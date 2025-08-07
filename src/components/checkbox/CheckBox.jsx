import "./CheckBox.css";
import check from "../../assets/images/check.svg"
const CheckBox = ({title}) => {
  return (
    <div className="custom-checkbox-selector">
      <h4>
        {title}
      </h4>
      <label className="checkbox-wrapper">
        <input type="checkbox" className="custom-checkbox" name="checkbox" />
        <img src={check} alt="check icon" className="check-icon" />
      </label>
    </div>
  );
};

export default CheckBox;
