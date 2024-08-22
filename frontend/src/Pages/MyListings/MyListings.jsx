import React from "react";
import "./MyListings.css";
import Background from "../../Components/Background";
import Advertisement from "../../Components/Advertisement";
import AdvertisementData from "../../Data/AdvertisementData";
import image from "../../assets/car.png";

function MyListings() {

  let[listOfCars,setlistOfCars] = useState([])
  let id  = '01234'


  useEffect(() => {
    
    let fetchData = async () => {
      let {data:listOfCars} = await axios.get(`http://127.0.0.1:8000/get-vehicles-userid/${id}`)
      setlistOfCars(listOfCars)
    }

    fetchData()

  },[])


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
              sellerDetails={ad.sellerDetails}
              browseCars={false}
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

export default MyListings;
