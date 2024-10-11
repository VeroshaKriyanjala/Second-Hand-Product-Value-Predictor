import React, { useState } from "react";
import Background from "../Components/Background";
import image from "../assets/images.jpeg";

function MyAccount() {
  const [selectedImage, setSelectedImage] = useState(image);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="flex flex-row h-svh bg-white">
      <Background className="w-8/12 flex flex-col h-full gap-6 p-6 bg-white items-stretch">
        <div className="flex flex-row justify-start w-full mb-4">
          <span className="topic text-2xl font-bold text-[#274C77]">
            My Account
          </span>
        </div>

        <div className="flex flex-row items-center gap-5">
          <div className="w-32 h-32">
            <img
              src={selectedImage}
              alt="Profile"
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="profile-pic"
              className="bg-[#274C77] text-white p-2 rounded-md cursor-pointer hover:bg-[#1d3a5a] transition-colors"
            >
              Change Profile Picture
            </label>
            <input
              type="file"
              id="profile-pic"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <form className="flex flex-col w-full gap-4 mt-6">
          <div className="flex flex-col w-6/12">
            <label
              className="input-name text-lg font-medium mb-2"
              htmlFor="name"
            >
              Name :
            </label>
            <input
              type="text"
              id="name"
              className="rounded-lg w-full h-[35px] border border-[#274c7778] px-3  max-w-xs truncate"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col w-6/12">
            <label
              className="input-name text-lg font-medium mb-2"
              htmlFor="email"
            >
              e-mail :
            </label>
            <input
              type="email"
              id="email"
              className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col w-6/12">
            <label
              className="input-name text-lg font-medium mb-2"
              htmlFor="contact"
            >
              Contact No :
            </label>
            <input
              type="text"
              id="contact"
              className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
              placeholder="Enter your contact number"
            />
          </div>

          <div className="flex justify-end mt-6">
            <button className="p-3 bg-[#274C77] h-12 rounded-lg px-8 text-white font-medium hover:bg-[#1d3a5a] transition-colors">
              Update
            </button>
          </div>
        </form>
      </Background>
      <Background className="w-4/12 flex flex-col h-vah gap-6 p-6 bg-white shadow-inner">
        <div className="flex flex-row justify-start w-full mb-4">
          <span className="topic text-2xl font-bold text-[#274C77]">
            Change Password
          </span>
        </div>

        <form className="flex flex-col gap-4 w-full">
          <div className="flex flex-col">
            <label
              className="text-lg font-medium mb-1"
              htmlFor="currentPassword"
            >
              Current Password:
            </label>
            <input
              type="password"
              id="currentPassword"
              className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
              placeholder="Enter current password"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1" htmlFor="newPassword">
              New Password:
            </label>
            <input
              type="password"
              id="newPassword"
              className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
              placeholder="Enter new password"
            />
          </div>

          <div className="flex flex-col">
            <label
              className="text-lg font-medium mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="rounded-lg  h-[35px] border border-[#274c7778] px-3 w-full max-w-xs truncate"
              placeholder="Confirm new password"
            />
          </div>

          <div className="flex justify-end items-end">
            <button
              type="submit"
              className="p-3 bg-[#274C77] h-12 rounded-lg px-6 text-white font-medium hover:bg-[#1d3a5a] transition-colors"
            >
              Update Password
            </button>
          </div>
        </form>
      </Background>
    </div>
  );
}

export default MyAccount;
