import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SidebarData from "../components/sidebar/SidebarData";

import "../App.css";
const Layout = () => {
  return (
    <>
      <main className="main-page">
        <SidebarData />
        <Header />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
