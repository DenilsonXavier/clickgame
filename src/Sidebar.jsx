import React, { useState } from "react";
import "./css/Sidebar.css";
import "./css/button.css";

import Button from "./Button";
import Rewards from "./Reward";
import useInterval from "./etc/useInterval";
import * as itemsjson from "./items.json";
import { ItemCellStore, ItemCellUpgrades } from "./ItemCell";
const itemsArray = Object.values(itemsjson["itemStore"]);

function Sidebar() {
  const [activeTab, setActiveTab] = useState("Loja");
  const renderContent = () => {
    switch (activeTab) {
      case "Loja":
        return <ItemCellStore />;
      case "Atualizações":
        return <ItemCellUpgrades />;
      case "Recompensas":
        return <Rewards />;
      default:
        return null;
    }
  };

  const [ItemStore, setItemStore] = useState(
    localStorage.getItem("itemStore")
      ? JSON.parse(localStorage.getItem("itemStore"))
      : () => {
          localStorage.setItem("itemStore", JSON.stringify(itemsArray));
          return itemsArray;
        }
  );
  const storeCal = () => {
    let Amout = 0;
    ItemStore.map((items) => {
      if (items.level > 0) {
        Amout += items.production * items.productionModifier;
      }
    });
    localStorage.getItem("clickAmount")
      ? localStorage.setItem(
          "clickAmount",
          parseFloat(localStorage.getItem("clickAmount")) + Amout
        )
      : localStorage.setItem("clickAmount", Amout);
    setItemStore(JSON.parse(localStorage.getItem("itemStore")));
  };

  useInterval(() => {
    storeCal();
  }, 880);

  return (
    <>
      <div className="title">
        <div className="store">
          <Button buttonName="Loja" onClick={() => setActiveTab("Loja")} />
        </div>
        <div className="upgrade">
          <Button
            buttonName="Atualizações"
            onClick={() => setActiveTab("Atualizações")}
          />
        </div>
        <div className="reward">
          <Button
            buttonName="Recompensas"
            onClick={() => setActiveTab("Recompensas")}
          />
        </div>
      </div>
      <div className="items-content">{renderContent()}</div>
    </>
  );
}

export default Sidebar;
