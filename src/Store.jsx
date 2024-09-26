import { ItemCellStore } from "./ItemCell";
import { useState } from "react";
import * as itemsjson from "./items.json";

function Store() {
  const [ItemStore, setItemStore] = useState(
    localStorage.getItem("itemStore")
      ? JSON.parse(localStorage.getItem("itemStore"))
      : Object.values(itemsjson["itemStore"])
  );

  return (
    <div className="items">
      {ItemStore.map((items, index) => (
        <ItemCellStore
          ItemId={index}
          ItemImg={items.img}
          ItemName={items.name}
          ItemLevel={items.level}
          ItemPrice={items.price}
          ItemProduction={items.production}
          ItemDescription={items.description}
        />
      ))}
    </div>
  );
}

export default Store;
