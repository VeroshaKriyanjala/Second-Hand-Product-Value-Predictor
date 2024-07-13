import React from "react";
import "./BrowseCar.css";
import Background from "../Components/Background";
import Advertisement from "../Components/Advertisement";
import AdvertisementData from "../Data/AdvertisementData";
import image from "../assets/car.png";

function BrowseCars() {
  return (
    <div className="browsecar">
      <Background className="car-gallery">
        <div className="flex flex-row justify-start w-full p-1">
          <span className="topic">Browse Cars</span>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="input-field"
            placeholder="Search Here"
          />
        </div>
        <div className="grid-container">
          {AdvertisementData.map((ad) => (
            <Advertisement
              key={ad.id}
              brand={ad.brand}
              model={ad.model}
              year={ad.year}
              price={ad.price}
              location={ad.location}
              mileage={ad.mileage}
              fuel={ad.fuel}
              image={image}
            />
          ))}
        </div>
      </Background>
      <Background className="filter">
        <div className="flex flex-row justify-start w-full p-1 h-dvh">
          <span className="topic">Filters</span>
        </div>
      </Background>
    </div>
  );
}

export default BrowseCars;
