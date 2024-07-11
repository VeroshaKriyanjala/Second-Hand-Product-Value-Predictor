import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import SideBarData from "../Data/SidebarData";

function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="sidebar">
      <div className="sidebar_dev">
        <ul>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={activeIndex === index ? "active" : ""}>
                <Link to={item.path} className="links">
                  <button onClick={() => setActiveIndex(index)}>
                    {/* <item.icon className="icon" /> */}
                    <span className="label_name">{item.title}</span>
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
