import React, { useState } from "react";
import Background from "./Background";
import Data from "../Data/labelmapping";
import tt from "../Data/brand_to_model.json";

function NewCar({ showMyListings }) {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    transmission: "",
    odometer: "",
    condition: "",
    fuel: "",
    type: "",
    titleStatus: "",
    age: "",
    image: null,
  });

  const [manuModels, setManuModels] = useState([]);
  const [unDisableModel, setUnDisableModel] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

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

    const isFormComplete = Object.values(formData).every((item) => item !== "");
    setIsFormValid(isFormComplete);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Background className="flex flex-col justify-start items-center w-8/12 gap-2 h-svh p-6">
      <div className="flex flex-col items-start justify-center w-full p-4">
        <div className="flex flex-row justify-between w-full p-1">
          <span className="topic text-2xl font-bold text-[#274C77]">
            List Your Car
          </span>
          <button
            className="px-2 py-1 bg-[#274C77] rounded-[5px]"
            onClick={showMyListings}
          >
            <span className="text-[#E6EBEE]">Back</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-2xl-6 rounded-lg">
          <div className="flex flex-row items-center mb-6">
            <input
              accept="image/*"
              className="hidden"
              id="raised-button-file"
              type="file"
              onChange={handleImageUpload}
            />
            <label htmlFor="raised-button-file">
              <div className="inline-block mt-2 py-2 px-4 border border-gray-300 bg-gray-200 rounded-md shadow-sm cursor-pointer hover:bg-gray-300">
                Upload Image
              </div>
            </label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Car Preview"
                className="m-8 w-64 h-40 object-cover rounded-lg shadow-md"
              />
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="input-name">Brand</label>
              <select
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="rounded-lg w-full h-[35px] border border-[#274c7778] px-3  max-w-xs truncate"
              >
                <option value="">Select Brand</option>
                {Object.keys(Data.manufacturer).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="input-name">Model</label>
              <select
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
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
            <div className="flex flex-col">
              <label className="input-name">Year</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
              >
                <option value="">Select Year</option>
                {Object.keys(Data.year).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="input-name">Fuel</label>
              <select
                name="fuel"
                value={formData.fuel}
                onChange={handleChange}
                className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
              >
                <option value="">Select Fuel</option>
                {Object.keys(Data.fuel).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="input-name">Transmission</label>
              <select
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
              >
                <option value="">Select Transmission</option>
                {Object.keys(Data.transmission).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="input-name">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
              >
                <option value="">Select Type</option>
                {Object.keys(Data.type).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="input-name">Odometer</label>
              <input
                type="text"
                onChange={handleChange}
                className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
                name="odometer"
                value={formData.odometer}
              />
            </div>
            <div className="flex flex-col">
              <label className="input-name">Title Status</label>
              <select
                name="titleStatus"
                value={formData.titleStatus}
                onChange={handleChange}
                className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
              >
                <option value="">Select Title Status</option>
                {Object.keys(Data.title_status).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="input-name">Condition</label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
              >
                <option value="">Select Condition</option>
                {Object.keys(Data.condition).map((item, index) => (
                  <option key={index} value={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="input-name">Age</label>
              <input
                type="text"
                onChange={handleChange}
                className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
                name="age"
                value={formData.age}
                readOnly
              />
            </div>
          </div>
          <div className="flex justify-start mt-6 w-6/12">
            <button
              className={`p-3 bg-[#274C77] w-full max-w-sm rounded-[8px] text-white ${
                !isFormValid
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#1B3A5A] hover:cursor-pointer"
              }`}
              disabled={!isFormValid}
            >
              List Your Car
            </button>
          </div>
        </form>
      </div>
    </Background>
  );
}

export default NewCar;
