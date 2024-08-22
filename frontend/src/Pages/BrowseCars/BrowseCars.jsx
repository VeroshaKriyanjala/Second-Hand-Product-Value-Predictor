import React from "react";
import "./BrowseCars.css";
import Background from "../../Components/Background";
import Advertisement from "../../Components/Advertisement";
import AdvertisementData from "../../Data/AdvertisementData";
import image from "../../assets/car.png";
import ContactSeller from "../../Components/ContactSeller";

function BrowseCars() {
  const [data, setData] = React.useState();
  const fetchSeller = (sellerDetails) => {
    setData(sellerDetails);
  };

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
              onSellerDetails={() => fetchSeller(ad.sellerDetails)}
              browseCars={true}
            />
          ))}
        </div>
      </Background>
      <div className="filter-contactseller">
        <Background className="filter">
          <div className="">
            {data && (
              <div>
                <ContactSeller onContactSeller={data} />
              </div>
            )}
            {!data && <div>No Seller Details</div>}
          </div>
        </Background>
      </div>
    </div>
  );
}

export default BrowseCars;
