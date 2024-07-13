import React from "react";
import "./components.css";
import Background from "./Background";

function Advertisement({
  brand,
  model,
  year,
  price,
  location,
  mileage,
  fuel,
  image,
}) {
  return (
    <Background className="advertisement">
      <img src={image} alt="Car" />
      <div className="details">
        <div className="car-name">{`${year} ${brand} ${model}`}</div>
        <p className="car-features">{`${mileage} | ${fuel} | ${location}`}</p>
        <div className="car-price">${price}</div>
      </div>
      <div className="w-full px-4 py-2">
        <button className="cont-seller-but">Contact Seller</button>
      </div>
    </Background>
  );
}

export default Advertisement;
