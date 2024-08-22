import React from "react";
import Background from "./Background";
import "./components.css";

function ContactSeller({ onContactSeller }) {
  console.log(onContactSeller);
  return (
    <Background className="contact-seller">
      <div className="">
        <span className="">{onContactSeller.name}</span>
        <span className="">{onContactSeller.contact}</span>
        <span className="">{onContactSeller.email}</span>
      </div>
    </Background>
  );
}

export default ContactSeller;
