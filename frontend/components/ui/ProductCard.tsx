"use client";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./card";
import { useState } from "react";
import CarDetails from "../CarDetails";
import { VehicleProps } from "@/types";
import Image from "next/image";

interface ProductCard {
  data: VehicleProps;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

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
            {data.imageUrl ? (
              <Image src={data.imageUrl} alt="image" fill />
            ) : (
              <div className="w-full aspect-square bg-gray-200 animate-pulse" />
            )}
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

export default ProductCard;
