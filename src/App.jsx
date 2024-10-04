import "./css/App.css";
import Sidebar from "./Sidebar";
import ClickCol from "./ClickCol";
import * as itemsjson from "./items.json";
import { useState } from "react";
const ItemStore = Object.values(itemsjson["itemStore"]);
const ItemUpgrade = Object.values(itemsjson["itemUpgrades"]);

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
    localStorage.setItem("clickAmount", 550000);
    window.location.reload();
  };
  const resetItems = () => {
    let Store = JSON.parse(localStorage.getItem("itemStore"));
    let Upgrades = JSON.parse(localStorage.getItem("itemUpgrades"));

    Store.map((item, index) => {
      item.name = ItemStore[index].name;
      item.img = ItemStore[index].img;
      item.level = ItemStore[index].level;
      item.price = ItemStore[index].price;
      item.production = ItemStore[index].production;
    });
    localStorage.setItem("itemStore", JSON.stringify(Store));

    Upgrades.map((item, index) => {
      item.sold = ItemUpgrade[index].sold;
      item.name = ItemUpgrade[index].name;
      item.img = ItemUpgrade[index].img;
      item.price = ItemUpgrade[index].price;
      item.effect = ItemUpgrade[index].effect;
      item.effectTo = ItemUpgrade[index].effectTo;
    });
    localStorage.setItem("itemUpgrades", JSON.stringify(Upgrades));
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
        <h1>Cheats</h1>
        <button onClick={reset}>Reset</button>
        <button onClick={resetItems}>Reset items</button>
      </div>
    </>
  );
}

export default App;
