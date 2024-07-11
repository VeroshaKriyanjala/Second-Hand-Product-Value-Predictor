import { Link } from "react-router-dom";
import "./SideBar.css";

import SideBarData from "../Data/SidebarData";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar_dev">
        <ul>
          {SideBarData.map((item, index) => {
            return (
              <li>
                <Link to={item.path} className="links">
                  <button>
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
