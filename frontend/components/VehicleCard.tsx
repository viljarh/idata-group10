"use client";
import Link from "next/link";
import { useState } from "react";
import { VehicleProps } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import VehicleDetails from "./VehicleDetails";

interface VehicleCard {
  data: VehicleProps;
}

function capitalizeWords(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}


const VehicleCard: React.FC<VehicleCard> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(`/img/${data.model}/${data.image}`)

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

            <Image src={imgSrc || 'img/fallback.svg'} alt={`Image of ${data.model}`} layout="fill" objectFit="cover" onError={() => setImgSrc('img/fallback.svg')} />

          </div>
        </CardContent>

        <CardFooter className="flex-col items-start">
          <div>
            <p className="font-semibold text-lg capitalize">
            {capitalizeWords(`${data.manufacturer} ${data.model}`)}
            </p>
            <p className="text-sm text-primary/80 capitalize"> {capitalizeWords(`${data.rentalCompany}`)}</p>
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
