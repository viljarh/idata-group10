"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { VehicleProps } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import VehicleDetails from "./VehicleDetails";
import { decode } from "jsonwebtoken";
import axiosInstance from "@/axios/axiosInstance";
import { Star } from "lucide-react";

interface VehicleCard {
  data: VehicleProps;
}

interface MyJwtPayload {
  userId: number;
}

function capitalizeWords(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const VehicleCard: React.FC<VehicleCard> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    `https://rentalroulette.com/img/${data.model.toLowerCase()}/${
      data.image?.toLowerCase() ?? "fallback.jpg"
    }`
  );
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkFavorite();
  }, []);

  const handleImageError = () => {
    console.error(`Image not found: ${data.model}/${data.image}`);
    setImgSrc("img/fallback.jpg");
  };

  const handleViewMoreClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const checkFavorite = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = decode(token) as MyJwtPayload;
        const userId = decoded.userId;
        const response = await axiosInstance.get(
          `/favorites/check?vehicleId=${data.vehicleId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setIsFavorite(response.data.isFavorite);
      }
    } catch (error) {
      console.error("Failed to check favorite", error);
    }
  };

  const toggleFavorite = async (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = decode(token) as MyJwtPayload;
        const userId = decoded.userId;

        if (isFavorite) {
          await axiosInstance.delete(`/favorites/${data.vehicleId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setIsFavorite(false);
        } else {
          await axiosInstance.post(
            `/favorites/${data.vehicleId}`,
            {},
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setIsFavorite(true);
        }
      }
    } catch (error) {
      console.error("Failed to toggle favorite: ", error);
    }
  };

  return (
    <Link
      href="/"
      onClick={handleViewMoreClick}
      className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg"
    >
      <Card className="rounded-lg border-2 relative">
        <div
          className="absolute top-2 right-2 cursor-pointer z-10"
          onClick={toggleFavorite}
        >
          {isFavorite ? (
            <Star size={24} color="gold" />
          ) : (
            <Star size={24} color="gray" />
          )}
        </div>
        <CardContent className="pt-4">
          <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
            <Image
              src={imgSrc}
              alt={`Image of ${data.model}`}
              layout="fill"
              objectFit="cover"
              onError={handleImageError}
              sizes={"100%"}
            />
          </div>
        </CardContent>

        <CardFooter className="flex-col items-start">
          <div>
            <p className="font-semibold text-lg capitalize">
              {capitalizeWords(`${data.manufacturer} ${data.model}`)}
            </p>
            <p className="text-sm text-primary/80 capitalize">
              {" "}
              {capitalizeWords(`${data.rentalCompany}`)}
            </p>
          </div>

          <div className="flex items-center justify-between mb-2 font-semibold">
            {data?.dailyPrice} NOK /day
          </div>

          <VehicleDetails
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            vehicle={data}
          />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default VehicleCard;
