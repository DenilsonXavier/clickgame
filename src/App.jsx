import "./App.css";
import Sidebar from "./sidebar";
import heart from "./public/heart.svg";
function App() {
  return (
    <>
      <div className="gameBoard">
        <div className="clickCol">
          <img className="clickImg" src={heart} alt="Gerador de click" />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
