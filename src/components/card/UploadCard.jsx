import UploadBanner from "../banner/UploadBanner";
import "./CardBanner.css";


const UploadCard = () => {
  return (
    <div >
  
    <div className="cardBanner-page">
      <div className="project-selector">
        <div>
          <p>Главный текст</p>
          <div className="banner-text">
            <input
              type="text"
              placeholder="Loyihangizni biz bilan birga yarating"
            />
            <button className="submit-btn">Изменить</button>
          </div>
        </div>
        <div>
          <p>Подтекст</p>
          <div className="banner-text">
            <input
              type="text"
              placeholder="Loyihangizni biz bilan birga yarating"
            />
            <button className="submit-btn">Готово</button>
          </div>
        </div>
      </div>
    </div>
      <UploadBanner/>
      </div>
  );
};

export default UploadCard;
