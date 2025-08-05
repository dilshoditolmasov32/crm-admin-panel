import "./Home.css";
import Workers from "../../components/workers/Workers";
import Chat from "../../components/chat/Chat";
import Message from "../../components/message/Message";
import Wrapper from "../../components/cards/Wrapper";

const Home = () => {
  return (
    <div className="home">
      <Wrapper/>
      <div className="lists">
        <Workers />
        <Chat />
        < Message />
      </div>
    </div>
  );
};

export default Home;
