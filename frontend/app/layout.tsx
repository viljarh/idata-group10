import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React, { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

const PageLayout = ({ children }: LayoutProps) => {
  <div>
    <Head>
      <title>Rental Roulette</title>
      <meta content="Find the cheapest cars to rent in Ålesund" />
      <link rel="icon" href="/" />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>;
};
