"use client";
import Link from "next/link";
import { useState } from "react";
import { VehicleProps } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import CarDetails from "./CarDetails";

interface CarCard {
  data: VehicleProps;
}

const CarCard: React.FC<CarCard> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(data.imageUrl)

  const handleViewMoreClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsOpen(true);
  };
  return (
    <Link
      href="/"
      onClick={handleViewMoreClick}
      className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg"
    >
      <Card className="rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">

            <Image src={imgSrc} alt={`Image of ${data.model}`} layout="fill" objectFit="cover" onError={() => setImgSrc('img/fallback.svg')} />

          </div>
        </CardContent>

        <CardFooter className="flex-col items-start">
          <div>
            <p className="font-semibold text-lg">
              {data.manufacturer} {data.model}
            </p>
            <p className="text-sm text-primary/80">{data.vehicleCategory}</p>
          </div>

          <div className="flex items-center justify-between mb-2">
            {data?.dailyPrice} NOK /day
          </div>

          <CarDetails
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            vehicle={data}
          />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CarCard;
