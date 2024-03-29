import { Button } from "@/components/ui/button";
import {
  BsTwitterX,
  BsInstagram,
  BsTiktok,
  BsYoutube,
  BsFacebook,
} from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer-1 bg-gray-100 py-8 sm:py-12 mt-64 px-64 ">
      <div className="container mx-auto">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="font-semibold text-sm mb-3 text-gray-400">
              PRODUCT
            </h5>
            <ul className="list-none footer-links text-sm font-semibold text-gray-500">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  Integrations
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  API
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="font-semibold text-sm mb-3 text-gray-400">ABOUT</h5>
            <ul className="list-none footer-links text-sm font-semibold text-gray-500">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  Our Story
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  Company
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="font-semibold text-sm mb-3 text-gray-400">
              CONTACT
            </h5>
            <ul className="list-none footer-links text-sm font-semibold text-gray-500">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  Advertising
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  Press
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  Email
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-orange-400 hover:text-orange-400"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="font-semibold text-sm mb-3 text-gray-400 right-0">
              STAY CONNECTED
            </h5>
            <div className="flex flex-row space-x-8 mt-0.5">
              <a href="/">
                <BsFacebook size={20} color="gray" />
              </a>
              <a href="/">
                <BsInstagram size={20} color="gray" />
              </a>
              <a href="/">
                <BsTiktok size={20} color="gray" />
              </a>
              <a href="/">
                <BsTwitterX size={20} color="gray" />
              </a>
              <a href="/">
                <BsYoutube size={20} color="gray" />
              </a>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t items-center justify-between">
          <div className="px-4 text-sm text-gray-500">
            © 2024 Volt, Inc. All rights reserved.
          </div>
          <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0 flex flex-row ">
            <Button className="text-gray-500" variant="link">
              Terms
            </Button>
            <Button className="text-gray-500" variant="link">
              Privacy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
