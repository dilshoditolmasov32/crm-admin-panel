import Input from "../input/Input";
import ImageUploader from "../upload/imageAdd/ImageUploader";
import "./EditProduct.css";
import check from "../../assets/images/check.svg";
import CheckBox from "../checkbox/CheckBox";
const EditProduct = () => {
  return (
    <form className="editProduct-page">
      <ImageUploader />
      <div className="product-name-count">
        <Input
          title={"Mahsulot"}
          text={"O’quv stol / stul 150w Grey"}
          editData={"Готово"}
          className="inpout"
        />
        <Input title={"Mahsulot"} text={"100"} editData={"Изменить"} />
      </div>

      <h3 className="product-title">Mahsulot ma'lumotlari</h3>
      <div className="product-price">
        <Input title={"Brand"} text={"Aisha Turkey"} editData={"Готово"} />
        <Input
          title={"Material"}
          text={"Loyihangizni biz bilan birga yarating"}
          editData={"Изменить"}
        />
      </div>
      <div className="product-code">
        <Input title={"Mahsulot kodi"} text={"DC192244"} editData={"Готово"} />
        <Input
          title={"Material"}
          text={"Loyihangizni biz bilan birga yarating"}
          editData={"Изменить"}
        />
      </div>
      <div className="product-code">
        <Input
          title={"Narx, so’m"}
          text={"Loyihangizni biz bilan birga yarating  "}
          editData={"Готово"}
        />
        <Input
          title={"Chegirma"}
          text={"O’quv stol / stul 150w Grey"}
          editData={"Изменить"}
        />
      </div>

      <h3 className="product-state">Mahsulot holati</h3>

      <div className="product-checkbox">
        <CheckBox title={"Yangi mahsulotlar"} />
        <CheckBox title={"Mahsus taklif"}/>
      </div>
    </form>
  );
};

export default EditProduct;
