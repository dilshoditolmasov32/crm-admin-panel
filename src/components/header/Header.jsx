import { IoSearch } from "react-icons/io5";
import "./Header.css";

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

        <select id="company" name="company" required>
          <option value="company"
          defaultValue={"company name"}
          disabled selected hidden>
            Company name
          </option>
          <option value="kale">Kale Gallery</option>
          <option value="jnk">JNK</option>
          <option value="bella">Bella maison</option>
        </select>

        <p className="hisobnoma">Создать отчет</p>
      </div>
      <div className="settings">
        <div className="counter-summa">
          0 сделок:
          <span>0 soʻm</span>
        </div>
        <a href="/setting" className="setting-link">
          Настроить
        </a>
      </div>
    </header>
  );
};

export default Header;
