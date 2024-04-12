import React from "react";
import Container from "@/components/ui/Container";
import Footer from "@/components/Footer";
import Head from "next/head";

const ContactUsPage = () => {
  return (
    <Container>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/logo/logo.ico" sizes="any" />
      </Head>
      <div className="flex flex-col min-h-screen m-5">
        <div className="flex flex-col h-full w-full justify-center items-center">
          <Container>
            <div className="w-full">
              <h1 className="font-bold text-3xl mb-8">Contact Us</h1>
              <div className="flex flex-col gap-4">
                <p>
                  If you have any questions or inquiries, please feel free to
                  reach out to us:
                </p>
                <ul>
                  <li>Email: contact@rentalroulette.com</li>
                  <li>Phone: +47 8008135</li>
                  <li>Address: Lerstadvegen 10, Ålesund, Norway</li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default ContactUsPage;
