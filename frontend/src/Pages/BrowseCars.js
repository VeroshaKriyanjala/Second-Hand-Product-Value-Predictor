import "./BrowseCar.css";
import Background from "../Components/Background";

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
          ></input>
        </div>
        <div></div>
      </Background>
      <Background className="filter"></Background>
    </div>
  );
}

export default BrowseCars;
