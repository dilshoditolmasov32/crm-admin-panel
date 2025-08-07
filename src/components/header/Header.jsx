import { IoSearch } from "react-icons/io5";
import "./Header.css";
import SelectMenu from "../select/SelectMenu";

const Header = () => {
  return (
    <header className="header-section">
      <div className="navbar-search__menu">
        <div className="navbar__search">
          <input type="text" placeholder="Найти..." />
          <button className="search-btn">
            <IoSearch />
          </button>
        </div>

        <SelectMenu
          inputLabel={"Company name"}
          option1={"Kale Gallery"}
          option2={"JNK"}
          option3={"Imaj"}
          option4={"Bella"}
        />

        <p className="hisobnoma">Создать отчет</p>
      </div>
      <div className="settings">
        <div className="counter-summa">
          0 сделок:
          <span>0 soʻm</span>
        </div>

        <a href={"setting/profil"} className="setting-link">
          Настроить
        </a>
      </div>
    </header>
  );
};

export default Header;
