import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import User from "../profil/User";
import "./SidebarData.css";

const SidebarData = () => {
  const pageData = [
    {
      id: 1,
      title: "Рабочий стол",
      icon: <FaUser />,
      link: "/",
    },
    {
      id: 2,
      title: "Сделка",
      icon: <RiMoneyDollarCircleFill />,
      link: "/deal",
    },
    {
      id: 3,
      title: "Склад",
      icon: <BiTask />,
      link: "/warehouse",
    },
    {
      id: 4,
      title: "Website",
      icon: <TbWorld />,
      link: "/web",
    },
    {
      id: 5,
      title: "Настройка",
      icon: <IoMdSettings />,
      link: "/setting",
    },
  ];
  return (
    <section className="sidebar-component">
     <User/>
      <ul>
        {pageData?.map((value) => (
          <NavLink 
          to={`${value.link}`}
          className="sidebar-link"
          key={value.id}
          > 
            <li  className="list-element">
              <span className="sidebar-icon">{value.icon}</span>
              {value.title}
            </li>
          </NavLink>
        ))}
      </ul>
    </section>
  );
};

export default SidebarData;
