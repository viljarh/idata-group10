// Got inspiration and some code from https://v0.dev/t/uWfTubiZ3UM
import Link from "next/link";
import "../app/globals.css";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            className="text-white hover:text-gray-300"
            href="https://github.com/viljarh/idata-group10"
          >
            <GitHubLogoIcon className="h-6 w-6 text-black dark:text-white" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            className="text-white hover:text-gray-300"
            href="https://twitter.com/chucknorrisjoke"
          >
            <TwitterLogoIcon className="h-6 w-6 text-black dark:text-white" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
        <div className="flex p-4 items-center justify-center bottom-0">
          <p className="text-xs text-gray-500">
            This website is a result of a university group project, performed in
            the course IDATA2301 Web technologies, at NTNU. All the information
            provided here is a result of imagination. Any resemblance with real
            companies or products is a coincidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
