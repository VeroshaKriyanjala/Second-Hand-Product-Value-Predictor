import React, { useState } from "react";
import Background from "../Components/Background";
import NewCar from "../Components/NewCar";
import Advertisement from "../Components/Advertisement";
import AdvertisementData from "../Data/AdvertisementData";
import image from "../assets/car.png";

function MyListings() {
  const [showNewCar, setShowNewCar] = useState(false);

  const onShowMyListings = () => {
    setShowNewCar(false);
  };

  return (
    <div className="flex flex-row justify-center items-start w-full h-vh gap-5">
      {!showNewCar ? (
        <>
          <Background className="flex flex-col justify-start items-center w-full h-full gap-1 p-6">
            <div className="flex flex-row justify-between w-full p-1">
              <span className="font-lato text-[#274c77] text-2xl font-bold">
                My Listings
              </span>
              <button
                className="px-2 py-1 bg-[#274C77] rounded-md"
                onClick={() => setShowNewCar(true)}
              >
                <span className="text-[#E6EBEE]">Add New Car</span>
              </button>
            </div>
            <div className="w-full">
              {/* <input
                type="text"
                className="rounded-lg w-full h-[35px] border border-[#274c7778] px-3"
                placeholder="Search Here"
              /> */}
            </div>
            <div className="w-full grid grid-cols-5 gap-3">
              {AdvertisementData.map((ad, index) => (
                <Advertisement
                  key={index}
                  brand={ad.brand}
                  model={ad.model}
                  year={ad.year}
                  price={ad.price}
                  location={ad.location}
                  mileage={ad.mileage}
                  fuel={ad.fuel}
                  image={image}
                  sellerDetails={ad.sellerDetails}
                  browseCars={ad.sold}
                />
              ))}
            </div>
          </Background>
          {/* <div className="w-4/12">
            <Background className="flex flex-col justify-start items-center w-full h-full">
              <div>
                <span className="font-lato text-[#274c77] text-[18px] font-bold">
                  Filters
                </span>
              </div>
            </Background>
          </div> */}
        </>
      ) : (
        <>
          <NewCar showMyListings={onShowMyListings} />
          <div className="w-4/12">
            <Background className="flex flex-col justify-start items-center w-full h-full p-6 shadow-inner">
              <div className="flex flex-row justify-between w-full p-1">
                <span className="topic text-2xl font-bold text-[#274C77]">
                  Seller Details
                </span>
              </div>
              <div className="flex flex-row justify-between w-full p-1 text-justify my-2">
                <p>
                  * These are the contact details which will be shown to the
                  customers
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <span className="font-semibold">Name: Verosha Kriyanjala</span>
                <span className="font-semibold">
                  e-mail: veroshakriyanjala32@gmail.com
                </span>
                <span className="font-semibold">
                  phone number: +94 70 127 2099
                </span>
              </div>
            </Background>
          </div>
        </>
      )}
    </div>
  );
}

export default MyListings;
