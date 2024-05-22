import { url } from "inspector";
import Link from "next/link";
import React from "react";

const libraries = [
  {
    name: "Next.js",
    description: "A React framework for production.",
    url: "https://nextjs.org/",
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    url: "https://reactjs.org/",
  },
  {
    name: "Tailwind CSS",
    description: "A CSS framework",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Prisma",
    description: "ORM for Node.js and TypeScript",
    url: "https://prisma.io/",
  },
  {
    name: "Nest.js",
    description: "Node.js framework for backend development",
    url: "https://nestjs.com/",
  },
  {
    name: "Axios",
    description: "Promise based HTTP client for the browser and node.js",
    url: "https://axios-http.com/",
  },
  {
    name: "Shadcn UI",
    description: "A collection of UI components for React",
    url: "https://ui.shadcn.com/",
  },
  {
    name: "Lucide Icons",
    description: "A set of open-source icons",
    url: "https://lucide.dev/",
  },
];

const images = [
  {
    description: "Landing page image, created by ChatGPT",
    url: "https://chat.openai.com/",
  },
  {
    description: "Mazda 2",
    url: "https://imgcdn.oto.com.sg/large/gallery/color/3/26/mazda-2-hatchback-color-190626.jpg",
  },
  {
    description: "Peugeot 207",
    url: "https://sunspotscars.com/web-assets/uploads/2019/04/peugeuot-207-corfu-rentals-sunspots-cars.jpg",
  },
  {
    description: "Peugeot 307 SW",
    url: "https://wallpapers.com/images/hd/caption-majestic-peugeot-307-in-motion-tomqttwpofk0e22f.jpg",
  },
  {
    description: "Peugeot 3008",
    url: "https://www.peugeot.com.my/content/dam/peugeot/malaysia/images/car-model/new-3008/2023/colors/PearlWhite-1920x1080.jpg",
  },
  {
    description: "Skoda Fabia",
    url: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Skoda-Fabia/2968/1545899323311/front-left-side-47.jpg?impolicy=resize&imwidth=420",
  },
  {
    description: "Volkswagen Golf",
    url: "https://cdn-www.pod-point.com/e-golf-white-background-2.jpg?v=1558019060",
  },
  {
    description: "Peugeot iOn",
    url: "hhttps://360view.3dmodels.org/zoom/Peugeot/Peugeot_iOn_2011_1000_0001.jpg",
  },
  {
    description: "Nissan Leaf",
    url: "https://wieck-nissanao-production.s3.amazonaws.com/photos/69ad3ebfb14bf1005e33dbaec997a11cc87494a7/preview-928x522.jpg",
  },
  {
    description: "BMW M3",
    url: "https://images.opumo.com/wordpress/wp-content/uploads/2021/01/1-54-1200x723.jpg",
  },
  {
    description: "Tesla Model 3",
    url: "https://img.freepik.com/premium-photo/car-isolated-white-background-tesla-model-3-white-car-blank-clean-white-backgr-white-black_655090-607332.jpg",
  },
  {
    description: "Tesla Model Y",
    url: "https://img.freepik.com/premium-photo/car-isolated-white-background-tesla-model-y-electric-suv-white-car-blank-clean-white-black_655090-605467.jpg",
  },
  {
    description: "Volkswagen Transporter",
    url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxO--sLdCwvnsJ2VgjjVkaSQB1_dWI3NAeZtcrscfbVzYFkiA9",
  },
];

const InfoPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Project Libraries</h1>
      <p className="mb-4">
        This project utilizes the following libraries and frameworks:
      </p>
      <ul className="space-y-4">
        {libraries.map((library, index) => (
          <li key={index} className="p-4 rounded-lg border shadow-md">
            <h2 className="text-xl font-semibold">
              <Link
                href={library.url}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                {library.name}
              </Link>
            </h2>
            <p>{library.description}</p>
          </li>
        ))}
      </ul>

      <h1 className="text-3xl font-bold mt-8 mb-4">Images Used</h1>
      <p className="mb-4">The following images were used in this project:</p>
      <ul className="space-y-4">
        {images.map((image, index) => (
          <li key={index} className="border p-4 rounded-lg shadow-md">
            <p className="text-lg">{image.description}</p>
            <Link
              href={image.url}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              {image.url}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoPage;
