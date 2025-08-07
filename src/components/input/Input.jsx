import "./Input.css"

const Input = ({ title, text, editData }) => {
  return (
    <div className="input-component">
      <p>{title}</p>
      <div className="my-input-style">
        <input type="text"  defaultValue={text}  />
        <button className="edit-button">{editData}</button>
      </div>
    </div>
  );
};

export default Input;
