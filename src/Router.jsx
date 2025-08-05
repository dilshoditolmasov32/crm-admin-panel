import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./pages/Layout";
import "./index.css";
import Setting from "./pages/setting/Setting";
import Web from "./pages/web/Web";
import DealCards from "./pages/deal/DealCards";
import UploadBanner from "./components/banner/UploadBanner";
import Request from "./components/request/Request";
import Block from "./components/product/block/Block";
import UploadCard from "./components/card/UploadCard";
import Category from "./components/product/category/Category";
import Profil from "./components/settingUser/Profil";
import Network from "./components/network/Network";
import Users from "./components/users/Users";
import WareHouse from "./pages/warehouse/WareHouse";
import ProductsList from "./components/productsList/ProductsList";
import EditProduct from "./components/editProduct/EditProduct";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="deal" element={<DealCards />} />

          <Route path="warehouse" element={<WareHouse />}>
            <Route index element={<Navigate to={"products-list"} replace />} />
            <Route path="products-list" element={<ProductsList />} />
            <Route path="edit-product" element={<EditProduct />} />
          </Route>

          <Route path="web" element={<Web />}>
            <Route index element={<Navigate to={"upload-banner"} replace />} />
            <Route path="upload-banner" element={<UploadBanner />} />
            <Route path="request" element={<Request />} />
            <Route path="block-product" element={<Block />} />
            <Route path="upload-banner2" element={<UploadCard />} />
            <Route path="category-product" element={<Category />} />
          </Route>

          <Route path="setting" element={<Setting />}>
            <Route index element={<Navigate to={"profil"} replace />} />
            <Route path="profil" element={<Profil />} />
            <Route path="reklama" element={<Network />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default AppRouter;
