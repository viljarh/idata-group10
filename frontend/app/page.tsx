"use client";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Head from "next/head";
import { useState } from "react";

const cars = [
  {
    id: "1",
    category: "Electric",
    name: "Tesla Model 3",
    price: "200NOK",
    images: ["/img/teslamod3.jpeg"],
  },

  {
    id: "2",
    category: "Gas",
    name: "VW Golf",
    price: "300NOK",
    images: ["/img/teslamod3.jpeg"],
  },

  {
    id: "3",
    category: "Electric",
    name: "Tesla Model Y",
    price: "400NOK",
    images: ["/img/teslamod3.jpeg"],
  },

  {
    id: "4",
    category: "Gas",
    name: "BMW M3",
    price: "900NOK",
    images: ["/img/teslamod3.jpeg"],
  },

  {
    id: "5",
    category: "Gas",
    name: "Citroen C3",
    price: "200NOK",
    images: ["/img/teslamod3.jpeg"],
  },
  {
    id: "6",
    category: "Gas",
    name: "BMW iX",
    price: "500NOK",
    images: ["/img/teslamod3.jpeg"],
  },
  {
    id: "7",
    category: "Electric",
    name: "BMW i3",
    price: "420NOK",
    images: ["/img/teslamod3.jpeg"],
  },
  {
    id: "8",
    category: "Gas",
    name: "Peugeot 3008",
    price: "20NOK",
    images: ["/img/teslamod3.jpeg"],
  },
];

export default function Home() {
  const [carSize, setCarSize] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const handleSearch = () => {
    console.log("Search criteria:", { carSize, startDate, endDate });
  };
  return (
    <Container>
      <Head>
        <link rel="icon" href="/logo/logo.ico" sizes="any" />
      </Head>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(/img/aalesund.jpg)` }}
            className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          >
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
                {/*Find the cheapest cars to rent in Ålesund*/}
                <a href="#search-cars" className="block w-full">
                  <Button size="lg" className="w-full py-8 text-xl">
                    <ShoppingBag className="mr-2" />
                    Rent A Car Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="search-cars"
          className="w-full h-full flex justify-center items-center"
        >
          <h1 className="font-bold text-2xl">Search for cars</h1>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          {/* Implement search functionality here */}
          <div className="w-full h-full flex justify-center items-center">
            <form onSubmit={handleSearch} className="flex gap-4">
              {/* Input fields for search criteria */}
              <input
                type="text"
                placeholder="Car Size"
                value={carSize}
                onChange={(e) => setCarSize(e.target.value)}
              />
              <input
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input
                type="date"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <Button type="submit">Search</Button>
            </form>
          </div>
        </div>
        <div
          id="popular-cars"
          className="w-full h-full flex justify-center items-center"
        >
          <h1 className="font-bold text-2xl">Popular Cars</h1>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={cars} />
        </div>
      </div>
    </Container>
  );
}
