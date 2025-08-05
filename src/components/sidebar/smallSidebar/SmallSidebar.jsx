import "./SmallSidebar.css";
import { NavLink } from "react-router-dom";

const SmallSidebar = ({ sidebarLink }) => {
  return (
    <aside className="sidebar">
      <ul>
        {sidebarLink?.map((item) => (
          <li key={item.id}>
            <NavLink to={`${item.url}`}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SmallSidebar;
