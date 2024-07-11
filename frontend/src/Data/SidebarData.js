import { FiHome } from "react-icons/fi";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineLightbulb } from "react-icons/md";

const SideBarData = [
  {
    title: "Home",
    icon: { FiHome },
    path: "/",
  },
  {
    title: "Browse Cars",
    icon: { HiMiniDevicePhoneMobile },
    path: "/browsecars",
  },
  {
    title: "My Listings",
    icon: { MdOutlineLightbulb },
    path: "/mylistings",
  },
  {
    title: "My Account",
    icon: { MdOutlineLightbulb },
    path: "/myaccount",
  },
  {
    title: "Support",
    icon: { MdOutlineLightbulb },
    path: "/support",
  },

  // ,{
  //     title:"Electricity",
  //     icon:{GiElectric},
  //     path:,
  // },{
  //     title:"Water",
  //     icon:{MdOutlineWaterDrop},
  //     path:,
  // },{
  //     title:"Wifi",
  //     icon:{GrWifiLow},
  //     path:,
  // },{
  //     title:"Security",
  //     icon:{GrShieldSecurity},
  //     path:,
  // },{
  //     title:"Settings",
  //     icon:{IoSettingsOutline},
  //     path:,
  // }
];

export default SideBarData;
