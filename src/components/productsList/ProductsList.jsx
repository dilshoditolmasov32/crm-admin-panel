import React, { useState, useEffect, memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./ProductList.css";
import productImage from "../../assets/images/photo.svg";
import Modal from "../modal/Modal";
import { getProductsData } from "../../../service/products";
const ProductList = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productListData = await getProductsData();
        console.log(productListData?.results[0]);
        setProducts(productListData?.results);
      } catch (error) {
        console.error("Productlarni olishda xatolik:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="products-section">
        <div className="product-line"></div>
        <h3 className="product-title">#Networks.</h3>
        <div className="products">
          {products?.map((element) => (
            <div className="product" key={element.id}>
              <div className="product-img">
                <img
                  src={element.images[0]}
                  alt="image"
                  className="card-image"
                />
              </div>
              <div className="product-desc">{element.description.made}
              </div>

              <div className="product-price"> {element.final_price.slice(0, 7)} so'm</div>
              <div className="product-buttons">
                <a href={"edit-product"}>
                  <button className="product-editBtn">изменить</button>
                </a>
                <button
                  className="product-deleteBtn"
                  onClick={() => setOpen(true)}
                >
                  удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={open}
        setOpen={setOpen}
        titleText={"Вы действительно хотите удалить?"}
      />
    </>
  );
};

export default memo(ProductList);
