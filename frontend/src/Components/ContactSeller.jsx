import React from "react";
import Background from "./Background";
import "./components.css";

function ContactSeller({ sellerDetails }) {
  return (
    <Background className="contact-seller-popup">
      <div className="flex flex-row justify-between w-full p-1">
        <span className="topic">Seller Details</span>
      </div>
      <div className="seller-details">{console.log(sellerDetails)}</div>
    </Background>
  );
}

export default ContactSeller;
