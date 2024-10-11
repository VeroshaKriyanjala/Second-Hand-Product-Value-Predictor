import React from "react";
import seller from "../assets/seller.jpeg";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/dashboard/predict");
  };

  return (
    <section className="relative bg-white py-8 lg:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left side: Text content */}
        <div className="lg:w-1/2 text-center lg:text-left px-4 mb-8 lg:mb-0">
          <p className="text-gray-500 mb-4">
            Want to find the Best price for Your Car?
          </p>
          <h1 className="text-5xl font-bold mb-6">Predict Your Car Price</h1>
          <div className="space-x-4 mb-8">
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-[#274C77] transition"
              onClick={handleDashboard}
            >
              View Dashboard
            </button>
          </div>
          <p className="mb-4">Or Find Your Dream Car</p>
          <div className="flex justify-center lg:justify-start space-x-2">
            <div className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              SUV
            </div>
            <div className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Sedan
            </div>
            <div className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Hatchback
            </div>
            <div className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Coupe
            </div>
            <div className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Hybrid
            </div>
          </div>
        </div>

        {/* Right side: Large image */}
        <div className="lg:w-1/2 flex justify-center h-full">
          <img
            src={seller}
            alt="Car Seller"
            className="w-full lg:w-3/4 xl:w-full h-auto shadow-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Inventory;
