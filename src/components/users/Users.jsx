import Input from "../input/Input";
import CheckBox from "../checkbox/CheckBox";
import user from "../../assets/images/user.svg"
import "./Users.css";
const Users = () => {
  return (
    <div className="user-profile-page">
      
<div>
  <h3>#Networks</h3>
  <img src={user} alt="user image" id="user-photo" />
</div>
<div className="user-profile-data">
  <Input
    title={"Имя фамилия"} text={"Одылов Мухаммад Бобур"} editData={"Изменить"}
  />
  <Input
    title={"Номер телефона"} text={"+998 90 999 99 99"} editData={"Изменить"}
  />
  <h5>Должность</h5>
 <div className="user-activity">
   <CheckBox
   title={"Руководитель "}
   />
   <CheckBox
   title={"Маркетинг "}
   />
   <CheckBox
   title={"Менеджер   "}
   />
   <CheckBox
   title={"Колл-Центр "}
   />
 </div>
  <Input
    title={"Пароль"} text={"MB2003"} editData={"Изменить"}
  />
</div>
    </div>
  );
};

export default Users;
