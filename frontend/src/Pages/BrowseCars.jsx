import React, { useState, useEffect } from "react";
import Background from "../Components/Background";
import Advertisement from "../Components/Advertisement";
import image from "../assets/car.png";
import ContactSeller from "../Components/ContactSeller";
// import axios from "axios";

function BrowseCars() {
  let [listOfCars, setlistOfCars] = useState([]);
  let [sellerData, setsellerData] = useState([]);

  let id = "01234";

  useEffect(() => {
    // let fetchData = async () => {
    //   let { data: listOfCars } = await axios.get(
    //     `http://127.0.0.1:8000/vehicles`
    //   );
    //   setlistOfCars(listOfCars);
    // };
    // fetchData();
  }, []);

  let fetchSeller = async (id) => {
    // let { data: sellerData } = await axios.get(
    //   `http://127.0.0.1:8000/get_user/${id}`
    // );
    // setsellerData(sellerData);
  };

  return (
    <div className="flex flex-row justify-center items-start w-full h-vh gap-5">
      <Background className="flex flex-col justify-start items-center w-full h-full gap-[10px] p-6 bg-white">
        <div className="flex flex-row justify-start w-full p-1">
          <span className="topic text-2xl font-bold text-[#274C77]">
            Browse Cars
          </span>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="rounded-lg w-full h-9 border border-gray-300 px-3"
            placeholder="Search Here"
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-3">
          {listOfCars.map((ad) => (
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
              onSellerDetails={() => fetchSeller(ad.user_id)}
              browseCars={true}
            />
          ))}
        </div>
      </Background>
      <div className="w-4/12">
        <Background className="flex flex-col justify-start items-center w-full h-full">
          <div className="w-full">
            {sellerData ? (
              <div>
                <ContactSeller onContactSeller={sellerData} />
              </div>
            ) : (
              <div>No Seller Details</div>
            )}
          </div>
        </Background>
      </div>
    </div>
  );
}

export default BrowseCars;
