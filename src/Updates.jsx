import { ItemCellUpgrades } from "./ItemCell";
import { useState } from "react";
import * as itemsjson from "./items.json";
function Updates() {
  const [itemUpgrades, setitemUpgrades] = useState(
    localStorage.getItem("itemUpgrades")
      ? JSON.parse(localStorage.getItem("itemUpgrades"))
      : Object.values(itemsjson["itemUpgrades"])
  );

  return (
    <div className="items">
      {itemUpgrades.map((items, index) => (
        <ItemCellUpgrades
          ItemId={index}
          ItemImg={items.img}
          ItemName={items.name}
          ItemSold={items.sold}
          ItemPrice={items.price}
          ItemDescription={items.description}
        />
      ))}
    </div>
  );
}

export default Updates;
