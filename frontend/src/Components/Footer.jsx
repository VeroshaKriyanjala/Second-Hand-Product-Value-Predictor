import React from "react";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#172d47] text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-2">836+</h3>
          <p>Cars Sold</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-2">738+</h3>
          <p>Deals Finalized</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-2">10000+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-2">238+</h3>
          <p>Vehicle Dealers</p>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 text-center md:text-left">
        <div className="w-full">
          <h4 className="font-bold text-xl mb-4">Follow Us : </h4>
          <ul className="list-none flex flex-row justify-center items-center w-full">
            <li className="w-full mb-2">
              <a
                href="#"
                className="hover:text-gray-400 w-full block text-center"
              >
                Facebook
              </a>
            </li>
            <li className="w-full mb-2">
              <a
                href="#"
                className="hover:text-gray-400 w-full block text-center"
              >
                Twitter
              </a>
            </li>
            <li className="w-full mb-2">
              <a
                href="#"
                className="hover:text-gray-400 w-full block text-center"
              >
                Instagram
              </a>
            </li>
            <li className="w-full mb-2">
              <a
                href="#"
                className="hover:text-gray-400 w-full block text-center"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center pt-4 border-t border-gray-700 mt-4">
        <p className="text-gray-500">
          © {new Date().getFullYear()} CARS.com All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
