import "./css/App.css";
import Sidebar from "./sidebar";
import ClickCol from "./ClickCol";
function App() {
  return (
    <>
      <div className="gameBoard">
        <div className="clickCol">
          <ClickCol />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
