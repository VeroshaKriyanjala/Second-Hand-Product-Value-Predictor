import "../Components/components.css";
import "./Home.css";
import Background from "../Components/Background";
import CarBrandsData from "../Data/CarBrandsData";

function Home() {
  return (
    <div className="home">
      <Background className="calculator">
        <div className="flex flex-row justify-start w-full p-1">
          <span className="topic">Used car Price Calculator</span>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-6/12 p-1 mr-8">
            <span className="input-name">Select Manufacturing Year</span>
            <input type="text" className="input-field"></input>
          </div>
          <div className="flex flex-col w-6/12 p-1 mr-8">
            <span className="input-name">Type</span>
            <input type="text" className="input-field"></input>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-6/12 p-1 mr-8">
            <span className="input-name">Brand</span>
            <input type="text" className="input-field"></input>
          </div>
          <div className="flex flex-col w-6/12 p-1 mr-8">
            <span className="input-name">Model</span>
            <input type="text" className="input-field"></input>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-6/12 p-1 mr-8">
            <span className="input-name">Paint Color</span>
            <input type="text" className="input-field"></input>
          </div>
          <div className="flex flex-col w-6/12 p-1 mr-8">
            <span className="input-name">Fuel</span>
            <input type="text" className="input-field"></input>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-6/12 p-1 mr-8">
            <span className="input-name">State</span>
            <input type="text" className="input-field"></input>
          </div>
          <div className="flex flex-col w-6/12 p-1 mr-8">
            <span className="input-name">Mileage</span>
            <input type="text" className="input-field"></input>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-6/12 p-1 mr-8">
            <button className="p-1  bg-[#274C77] h-12 rounded-[8px]">
              <span className="text-[#F8F8FB]">Check Your Car</span>
            </button>
          </div>
          <div className="flex flex-col w-6/12 p-1 mr-8"></div>
        </div>

        <div className="flex flex-row w-full justify-center h-[200px]">
          <div className="w-9/12 h-[200px] flex flex-col justify-end items-center p-1 gap-10">
            <div className="flex flex-row justify-evenly w-full h-6">
              <div className="flex flex-col justify-evenly items-center w-6/12 h-6">
                <span className="text-[#274C77]">Fair Condition</span>
                <span className="text-[#000000]">$ 12,500</span>
              </div>
              <div className="flex flex-col justify-evenly items-center w-6/12 h-6">
                <span className="text-[#274C77]">Good Condition</span>
                <span className="text-[#000000]">$ 14,500</span>
              </div>
            </div>
            <div className="w-10/12 h-6 flex flex-row justify-center">
              <div className="w-[3px] h-12  bg-slate-400 rounded-lg"></div>
              <div className="w-8/12 h-12"></div>
              <div className="w-[3px] h-12  bg-slate-400 rounded-lg"></div>
            </div>
            <div className="bg-[#A5B3C7] w-10/12 h-3 rounded-[8px] flex flex-row justify-center">
              <div className="bg-[#516F91] w-8/12 h-3 rounded-[8px]"></div>
            </div>
          </div>
          <div className="w-3/12 h-[200px] flex flex-row justify-end items-end p-1">
            <button className="absolute p-[15px] rounded-[8px] bg-[#EB8383] mr-8">
              <span className="text-[#F8F8FB] m-2">List Your Item</span>
            </button>
          </div>
        </div>
      </Background>
      <div className="notifications-brands gap-[20px]">
        <Background className="top-brands w-full h-full">
          <div className="flex flex-row justify-start w-full p-1">
            <span className="topic">Top Brands</span>
          </div>
          <div className="flex flex-col w-full justify-start p-1 gap-3">
            {CarBrandsData.map((item, index) => {
              return (
                <div key={index} className="brand-card">
                  {/* <item.icon className="icon" /> */}
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </Background>
        <Background>jgjg</Background>
      </div>
    </div>
  );
}
export default Home;
