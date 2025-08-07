import "./Image.css";
import uploadImage from "../../assets/images/uploadImage.svg";
const Image = () => {
  return (
    <>
    <div className="product-photo">
      <div className="upload-image">
        <div className="product-image">
          <span>1</span>
        </div>

        <div className="image-hover">
          <div className="image-loading">
            <div>
              <img src={uploadImage} alt="dowlnoad icon" />
            </div>
          </div>
          <p>Загрузите ваш файл здесь</p>
        </div>
      </div>
    </div>
    </>

  );
};

export default Image;
