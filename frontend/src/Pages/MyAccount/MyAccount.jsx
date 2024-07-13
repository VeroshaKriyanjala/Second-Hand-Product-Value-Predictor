import Background from "../../Components/Background";
import image from "../../assets/images.jpeg";

function MyAccount() {
  return (
    <Background className="w-8/12 flex flex-col h-full gap-5">
      <div className="flex flex-row justify-start w-full p-1">
        <span className="topic">My Account</span>
      </div>
      <div className="flex flex-row">
        <div className="w-4/12 h-6">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col w-8/12">
          <div className="flex flex-col w-3/4 p-1">
            <span className="input-name">NIC</span>
            <input type="text" className="input-field"></input>
          </div>
          <div className="flex flex-col w-3/4 p-1">
            <span className="input-name">First Name</span>
            <input type="text" className="input-field"></input>
          </div>
          <div className="flex flex-col w-3/4 p-1">
            <span className="input-name">Last Name</span>
            <input type="text" className="input-field"></input>
          </div>
        </div>
      </div>
      <div className="fle flex-col w-8/12 mt-3">
        <div className="flex flex-col w-3/4 p-1">
          <span className="input-name">NIC</span>
          <input type="text" className="input-field"></input>
        </div>
        <div className="flex flex-col w-3/4 p-1">
          <span className="input-name">First Name</span>
          <input type="text" className="input-field"></input>
        </div>
        <div className="flex flex-col w-3/4 p-1">
          <span className="input-name">Last Name</span>
          <input type="text" className="input-field"></input>
        </div>
      </div>
      <div className="flex flex-row justify-end items-end">
        <button className="p-1 bg-[#274C77] h-12 rounded-[8px] px-8">
          <span className="text-[#F8F8FB]">Update</span>
        </button>
      </div>
    </Background>
  );
}

export default MyAccount;
