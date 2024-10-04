import "./css/App.css";
import Sidebar from "./Sidebar";
import ClickCol from "./ClickCol";
import * as itemsjson from "./items.json";
import { useState } from "react";
const ItemRewards = Object.values(itemsjson["Rewards"]);

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
  const rewards = JSON.parse(localStorage.getItem("ItemRewards"));
  rewards.map((items, index) => {
    rewards[index].price = ItemRewards[index].price;
  });
  localStorage.setItem("ItemRewards", JSON.stringify(rewards));

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
