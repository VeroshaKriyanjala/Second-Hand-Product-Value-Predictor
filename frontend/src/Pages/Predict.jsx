import React, { useState, useEffect } from "react";
import Background from "../Components/Background";
import CarBrandsData from "../Data/CarBrandsData";
import Data from "../Data/labelmapping";
import tt from "../Data/brand_to_model.json";

function Predict() {
  const [manuModels, setManuModels] = useState([]);
  const [unDisableModel, setUnDisableModel] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    fuel: "",
    transmission: "",
    type: "",
    odometer: "",
    titleStatus: "",
    condition: "",
    age: "",
  });

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(
      (value) => value !== ""
    );
    setIsFormValid(allFieldsFilled);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "brand") {
      if (value !== "") {
        setUnDisableModel(true);
        setManuModels(tt[value]);
      } else {
        setUnDisableModel(false);
        setManuModels([]);
      }
      setFormData({ ...formData, brand: value, model: "" });
    } else if (name === "year") {
      let year = parseInt(value) + 2000;
      const today = new Date();
      const currentYear = today.getFullYear();
      const calculatedAge = currentYear - year;
      setFormData({
        ...formData,
        year: value,
        age: calculatedAge >= 0 ? calculatedAge : "",
      });
    } else if (name === "odometer") {
      const intValue = parseInt(value, 10);
      if (!isNaN(intValue)) {
        setFormData({ ...formData, odometer: intValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-row h-svh bg-white">
      <Background className="w-3/4 flex flex-col h-full gap-6 p-6 bg-white items-stretch">
        <div className="flex flex-row justify-start w-full p-1">
          <span className="topic text-2xl font-bold text-[#274C77]">
            Used Car Price Calculator
          </span>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-6/12 p-2 justify-start items-center">
              <div className="flex flex-col justify-start items-start max-w-[350px] w-full">
                <span className="text-black font-lato text-[15.16px] font-light">
                  Brand
                </span>
              </div>
              <select
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="rounded-[10px] h-[40px] border border-[#274c7778] px-[10px] pr-[20px] w-full max-w-[350px] truncate"
              >
                <option value="">Select Brand</option>
                {Object.keys(Data.manufacturer).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-6/12 p-2 justify-center items-center">
              <div className="flex flex-col justify-start items-start max-w-[350px] w-full">
                <span className="text-black font-lato text-[15.16px] font-light">
                  Model
                </span>
              </div>
              <select
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="rounded-[10px] h-[40px] border border-[#274c7778] px-[10px] pr-[20px] w-full max-w-[350px] truncate"
                disabled={!unDisableModel}
              >
                <option value="">Select Model</option>
                {manuModels.map((item, index) => (
                  <option key={index} value={item}>
                    {Data.model[item]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-6/12 p-2 justify-center items-center">
              <div className="flex flex-col justify-start items-start max-w-[350px] w-full">
                <span className="text-black font-lato text-[15.16px] font-light">
                  Year
                </span>
              </div>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="rounded-[10px] h-[40px] border border-[#274c7778] px-[10px] pr-[20px] w-full max-w-[350px] truncate"
              >
                <option value="">Select Year</option>
                {Object.keys(Data.year).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-6/12 p-2 justify-center items-center">
              <div className="flex flex-col justify-start items-start max-w-[350px] w-full">
                <span className="text-black font-lato text-[15.16px] font-light">
                  Fuel
                </span>
              </div>
              <select
                name="fuel"
                value={formData.fuel}
                onChange={handleChange}
                className="rounded-[10px] h-[40px] border border-[#274c7778] px-[10px] pr-[20px] w-full max-w-[350px] truncate"
              >
                <option value="">Select Fuel</option>
                {Object.keys(Data.fuel).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="flex flex-col w-6/12 p-2 justify-center items-center">
              <div className="flex flex-col justify-start items-start max-w-[350px] w-full">
                <span className="text-black font-lato text-[15.16px] font-light">
                  Transmission
                </span>
              </div>
              <select
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                className="rounded-[10px] h-[40px] border border-[#274c7778] px-[10px] pr-[20px] w-full max-w-[350px] truncate"
              >
                <option value="">Select Transmission</option>
                {Object.keys(Data.transmission).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-6/12 p-2 justify-center items-center">
              <div className="flex flex-col justify-start items-start max-w-[350px] w-full">
                <span className="text-black font-lato text-[15.16px] font-light">
                  Type
                </span>
              </div>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="rounded-[10px] h-[40px] border border-[#274c7778] px-[10px] pr-[20px] w-full max-w-[350px] truncate"
              >
                <option value="">Select Type</option>
                {Object.keys(Data.type).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="flex flex-col w-6/12 p-2 justify-center items-center">
              <div className="flex flex-col justify-start items-start max-w-[350px] w-full">
                <span className="text-black font-lato text-[15.16px] font-light">
                  Odometer
                </span>
              </div>
              <input
                type="text"
                onChange={handleChange}
                className="rounded-[10px] h-[40px] border border-[#274c7778] px-[10px] pr-[20px] w-full max-w-[350px] truncate"
                name="odometer"
                value={formData.odometer}
              />
            </div>
            <div className="flex flex-col w-6/12 p-2 justify-center items-center">
              <div className="flex flex-col justify-start items-start max-w-[350px] w-full">
                <span className="text-black font-lato text-[15.16px] font-light">
                  Title Status
                </span>
              </div>
              <select
                name="titleStatus"
                value={formData.titleStatus}
                onChange={handleChange}
                className="rounded-[10px] h-[40px] border border-[#274c7778] px-[10px] pr-[20px] w-full max-w-[350px] truncate"
              >
                <option value="">Select Title Status</option>
                {Object.keys(Data.title_status).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="flex flex-col w-6/12 p-2 justify-center items-center">
              <div className="flex flex-col justify-start items-start max-w-[350px] w-full">
                <span className="text-black font-lato text-[15.16px] font-light">
                  Condition
                </span>
              </div>

              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="rounded-[10px] h-[40px] border border-[#274c7778] px-[10px] pr-[20px] w-full max-w-[350px] truncate"
              >
                <option value="">Select Condition</option>
                {Object.keys(Data.condition).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="flex flex-col w-6/12 p-2 justify-center items-center">
              <button
                className={`p-3 bg-[#274C77] h-12 rounded-lg w-full max-w-[350px] text-white font-medium ${
                  !isFormValid
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#1d3a5a] transition-colors"
                }`}
                disabled={!isFormValid}
              >
                Check Your Car
              </button>
            </div>
          </div>
        </form>

        <div className="flex flex-row w-full justify-center items-center h-[100px]">
          <h1 className="text-xl font-bold">Estimated Price = </h1>
          <span className="text-xl font-semibold text-green-600 ml-2">
            $12,500
          </span>
        </div>
      </Background>

      <Background className="w-1/4 flex flex-col h-vah gap-6 p-6 bg-white shadow-inner">
        <div className="flex flex-row justify-start w-full p-1">
          <span className="topic text-2xl font-bold text-[#274C77]">
            Top Brands
          </span>
        </div>
        <div className="flex flex-col w-full justify-start p-1 gap-3">
          {CarBrandsData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg py-1 px-3 shadow-sm w-full flex flex-row justify-between items-center "
            >
              <span>{item.title}</span>
              <img
                className="w-[50px] h-[50px]"
                src={item.icon}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </Background>
    </div>
  );
}

export default Predict;
