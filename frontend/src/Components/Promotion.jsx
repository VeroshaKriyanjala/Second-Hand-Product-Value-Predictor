import React from "react";
import buycar from "../assets/buycar.jpeg";
import { Link } from "react-router-dom";

const Promotion = () => {
  return (
    <section className="py-16 flex flex-col md:flex-row items-center justify-around bg-white">
      <div className="promo-video mb-8 md:mb-0">
        <img
          src={buycar}
          alt="Promo Car"
          className="rounded shadow-lg w-full max-w-sm md:max-w-md" // Adjust image size here
        />
      </div>
      <div className="promo-text max-w-md text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">
          Get A Fair Price For Your Car
        </h2>
        <p className="text-gray-600 mb-4">
          Sell With Us Today. Reach our customer base with no cost!
        </p>
        <ol className="list-decimal pl-5 text-left mb-4">
          <li>Predict Your Car Price</li>
          <li>List in Our website</li>
          <li>Reach Unlimited Customer Base</li>
        </ol>
        <Link
          to="/dashboard/mylistings"
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-[#274C77] transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Promotion;
