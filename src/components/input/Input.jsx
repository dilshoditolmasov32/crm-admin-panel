import "./Input.css"

const Input = ({ title, text, editData }) => {
  return (
    <div className="input-selector">
      <p>{title}</p>
      <div className="my-input-style">
        <input type="text" placeholder={text} />
        <button className="edit-button">{editData}</button>
      </div>
    </div>
  );
};

export default Input;
