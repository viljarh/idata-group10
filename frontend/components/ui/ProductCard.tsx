"use client";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./card";
import { useState } from "react";
import CarDetails from "../CarDetails";

interface ProductCard {
  data: VehicleProps;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleViewMoreClick = (event: MouseEvent<HTMLAnchorElement>) => {
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
            <Image
              src={data.images?.[0]}
              alt=""
              fill
              className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
          </div>
        </CardContent>

        <CardFooter className="flex-col items-start">
          <div>
            <p className="font-semibold text-lg">{data.name}</p>
            <p className="text-sm text-primary/80">{data.category}</p>
          </div>

          <div className="flex items-center justify-between">{data?.price}</div>

          <CarDetails
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            data={data}
          />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
