import "./css/App.css";
import Sidebar from "./Sidebar";
import ClickCol from "./ClickCol";
import mouse from "/mouse/Simple.png";
import * as itemsjson from "./items.json";
import { useState } from "react";
const ItemStore = Object.values(itemsjson["itemStore"]);

function App() {
  const [ItemUpgrades] = useState(
    localStorage.getItem("itemUpgrades")
      ? JSON.parse(localStorage.getItem("itemUpgrades"))
      : null
  );
  if (ItemUpgrades != null && ItemUpgrades[0].sold == true) {
    var r = document.querySelector(":root");
    r.style.setProperty("--cursor-custom", "url('/mouse/Simple.png'), auto");
    r.style.setProperty(
      "--cursor-custom-hover",
      "url('/mouse/Simple.png'), auto"
    );
    r.style.setProperty(
      "--cursor-custom-click",
      "url('/mouse/Simple-click.png'), auto"
    );
  }

  const reset = () => {
    localStorage.clear();
    localStorage.setItem("itemStore", JSON.stringify(ItemStore));
    localStorage.setItem("clickAmount", 10000);
    window.location.reload();
  };

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
      <div>
        {mouse}
        <h1>Cheats</h1>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
