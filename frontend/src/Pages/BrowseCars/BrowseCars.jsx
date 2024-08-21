import React, { useEffect, useState } from "react";
import "./BrowseCars.css";
import Background from "../../Components/Background";
import Advertisement from "../../Components/Advertisement";
import image from "../../assets/car.png";
import axios from 'axios';

function BrowseCars() {

  let [listOfCar,setlistOfCar] = useState([])
  

  useEffect(() => {

    let fetchData = async() => {
      let {data:listOfCar} = await axios.get(`http://127.0.0.1:8000/vehicles`)
      setlistOfCar(listOfCar)
    }

    fetchData()

  })

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
          {listOfCar.map((ad,index) => (
            <Advertisement
              key={index}
              brand={ad.brand}
              model={ad.model}
              year={ad.year}
              price={ad.price}
              location={ad.state}
              mileage={ad.mileage}
              fuel={ad.fuel}
              image={image}
              sellerDetails={ad.sellerDetails}
              browseCars={true}
            />
          ))}
        </div>
      </Background>
      <div className="filter-contactseller">
        <Background className="filter">
          <div className="">
            <span className="topic">Filters</span>
          </div>
        </Background>
      </div>
    </div>
  );
}

export default BrowseCars;
