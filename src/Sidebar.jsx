import React, { useEffect, useState } from "react";
import "./css/Sidebar.css";

import useInterval from "./etc/useInterval";
import * as itemsjson from "./items.json";
import ItemCell from "./ItemCell";
const itemsArray = Object.values(itemsjson["itemStore"]);

function Sidebar() {
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
    localStorage.getItem("storeAmount")
      ? localStorage.setItem(
          "storeAmount",
          parseFloat(localStorage.getItem("storeAmount")) + Amout
        )
      : localStorage.setItem("storeAmount", Amout);
    setItemStore(JSON.parse(localStorage.getItem("itemStore")));
  };

  useInterval(() => {
    storeCal();
  }, 1000);
  return (
    <>
      <div className="title">
        <div className="title-items f-33">Loja</div>
        <div className="title-items f-33">Atualizações</div>
        <div className="title-items f-33">Recompensas</div>
      </div>
      <div className="items-content">
        <div className="items-col f-33">
          <ItemCell cell="store" />
        </div>
        <div className="items-col f-33">
          <ItemCell cell="upgrades" />
        </div>
        <div className="items-col f-33">
          {/* <ItemCell cell="rewards" /> */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
