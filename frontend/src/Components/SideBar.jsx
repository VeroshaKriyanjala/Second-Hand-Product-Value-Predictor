import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SideBarData from "../Data/SidebarData";
import { useGlobalContext } from "../context/GlobalContextProvider";

function SideBar() {
  const { isLogged } = useGlobalContext(); // Use global context to check if logged in
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const activeItem = SideBarData.findIndex(
      (item) => item.path === location.pathname
    );
    setActiveIndex(activeItem);
  }, [location]);

  return (
    <ul className="list-none p-0 h-full bg-white">
      {SideBarData.map((item, index) =>
        !isLogged && item.protected ? null : (
          <Link
            to={item.path}
            onClick={() => setActiveIndex(index)}
            key={index}
          >
            <li
              className={`p-5 text-lg ${
                activeIndex === index ? "bg-gray-200" : ""
              }`}
            >
              <span className="topic text-xl font-bold text-[#274C77]">
                {item.title}
              </span>
            </li>
          </Link>
        )
      )}
    </ul>
  );
}

export default SideBar;
