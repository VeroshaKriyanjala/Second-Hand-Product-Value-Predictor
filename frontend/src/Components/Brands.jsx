import React from "react";
import CarBrandsData from "../Data/CarBrandsData";

const Brands = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Explore Our Premium Brands
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-8 gap-2 justify-items-center">
        {CarBrandsData.map((item, index) => (
          <div key={index} className="text-center">
            <img
              className="w-[70px] h-[70px]"
              src={item.icon}
              alt={item.title}
            />
            {/* <p className="text-gray-600">{item.title}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
