import "./Profil.css";
import user from "../../assets/images/user.svg";

const Profil = () => {
  return (
    <div className="profil-page">
      <div className="profil-photo">
        <h4>#Networks</h4>
        <img src={user} alt="profile img" className="profil-img" />
      </div>
      <div className="profil-data">
        <div className="data-item">
          <label>Имя Фамилия</label>
          <input type="text" defaultValue="Одипов Мухаммад Бобур" readOnly />
        </div>
        <div className="data-item">
          <label>Номер телефона</label>
          <input type="text" defaultValue="+998 90 999 99 99" readOnly />
        </div>
        <div className="data-item">
          <label>Должность</label>
          <input type="text" defaultValue="Руководитель" readOnly />
        </div>
        <div className="data-item">
          <label>Пароль</label>
          <input type="text" defaultValue="MB2003" readOnly />
        </div>
      </div>
    </div>
  );
};

export default Profil;
