import React from "react";
import "./components.css";
import Background from "./Background";
// import { useState } from "react";

export default function Advertisement({
  brand,
  model,
  year,
  price,
  location,
  mileage,
  fuel,
  image,
  onSellerDetails,
  browseCars,
}) {
  // const [clickContactSeller, setClickContactSeller] = useState(false);
  // const handleContactSellerClick = () => {
  // setClickContactSeller(true);
  // };

  return (
    <Background className="advertisement">
      <img src={image} alt="Car" />
      <div className="details">
        <div className="car-name">{`${year} ${brand} ${model}`}</div>
        <p className="car-features">{`${mileage} | ${fuel} | ${location}`}</p>
        <div className="car-price">${price}</div>
      </div>
      {browseCars ? (
        <div className="w-full px-4 py-2">
          <button className="cont-seller-but" onClick={onSellerDetails}>
            Contact Seller
          </button>
        </div>
      ) : (
        <div className="w-full px-4 py-2">
          <button className="cont-seller-but">Mark as Sold</button>
        </div>
      )}
    </Background>
  );
}
