import profile from "../../assets/images/profile.svg";
import "./User.css";
const User = () => {
  return (
    <div className="profile-section">
      <div className="user-profile">
        <div className="user-image">
          <input type="image" src={profile} alt="profile icon" />
        </div>
        <div className="profile-data">
          <span>Исполнитель*</span>
          <h4>Mukhammadbobur</h4>
        </div>
      </div>

      <div className="profile-line"></div>
    </div>
  );
};

export default User;
