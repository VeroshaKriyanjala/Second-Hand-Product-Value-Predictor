import React from "react";

const services = [
  {
    id: 1,
    title: "Predict Your Car Value",
    description:
      "Enter the basic features of your car. The system provides an estimated value of your car.",
  },
  {
    id: 2,
    title: "List Your Car in Our Platform",
    description:
      "You can list your car on our platform and put a free advertisement to sell your car.",
  },
  {
    id: 3,
    title: "Connect with Sellers & Buy cars",
    description:
      "If buyers want to buy a car, they can browse your car and directly connect with you.",
  },
];

const Services = () => {
  return (
    <section className="p-10 bg-gray-100 ">
      <h2 className="text-center text-3xl font-semibold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 shadow-md rounded">
            {/* Service Number */}
            <div className="flex items-center mb-4">
              <span className="bg-[#274C77] text-white text-xl font-bold px-4 py-2 rounded-full">
                {service.id}
              </span>
            </div>

            {/* Service Title */}
            <h3 className="text-xl font-bold mb-2 text-[#274C77]">
              {service.title}
            </h3>

            {/* Service Description */}
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
