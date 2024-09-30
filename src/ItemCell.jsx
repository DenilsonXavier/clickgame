import { useEffect, useState } from "react";
import "./css/ItemCell.css";
import Tooltip from "./etc/tooltip";
import * as itemsjson from "./items.json";
const BaseItemStore = Object.values(itemsjson["itemStore"]);
const BaseItemUpgrades = Object.values(itemsjson["itemUpgrades"]);
const tooltip = new Tooltip();
function ItemCellStore() {
  const [ItemStore, setItemStore] = useState(
    localStorage.getItem("itemStore")
      ? JSON.parse(localStorage.getItem("itemStore"))
      : () => {
          localStorage.setItem("itemStore", JSON.stringify(BaseItemStore));
          return BaseItemStore;
        }
  );
  const [clickAmount, setclickAmount] = useState(
    localStorage.getItem("clickAmount")
      ? parseFloat(localStorage.getItem("clickAmount"))
      : 0
  );

  const buyItem = (id) => {
    if (clickAmount >= ItemStore[id].price) {
      localStorage.setItem("clickAmount", clickAmount - ItemStore[id].price);

      ItemStore[id].level += 1;
      ItemStore[id].price = Math.ceil(parseFloat(ItemStore[id].price) * 1.15);
      ItemStore[id].production = parseInt(
        parseInt(ItemStore[id].level) * parseInt(BaseItemStore[id].production)
      );
      localStorage.setItem("itemStore", JSON.stringify(ItemStore));
      setItemStore(JSON.parse(localStorage.getItem("itemStore")));
    }
  };

  useEffect(() => {
    setclickAmount(parseInt(localStorage.getItem("clickAmount")));
  });
  return (
    <div className="items">
      {ItemStore.map((items, index) => {
        if (
          (ItemStore[index - 1] != null && ItemStore[index - 1].level > 0) ||
          index == 0
        ) {
          return (
            <button
              className="buttonCell"
              onMouseMove={() => {
                tooltip.atttooltipProduction(
                  items.production * items.productionModifier
                );
              }}
              onMouseEnter={() => {
                tooltip.addtooltip(
                  items.name,
                  items.price,
                  items.description,
                  items.production * items.productionModifier
                );
              }}
              onMouseOver={() => {
                tooltip.movetooltip();
              }}
              onMouseLeave={() => {
                tooltip.removetooltip();
              }}
              onClick={() => {
                tooltip.atttooltipProduction(
                  items.production * items.productionModifier
                );
                buyItem(index);
              }}
              key={index}
            >
              <img
                className="itemImage f-1"
                src={`./${items.img}.png`}
                alt={items.name}
              />
              <div className="itemInfo f-7">
                <div className="itemName">{items.name}</div>
                <div className="itemPrice">{items.price} C</div>
              </div>
              <div className="itemLevel f-2">{items.level}</div>
            </button>
          );
        }
      })}
    </div>
  );
}

function ItemCellUpgrades() {
  const [ItemUpgrades, setItemUpgrades] = useState(
    localStorage.getItem("itemUpgrades")
      ? JSON.parse(localStorage.getItem("itemUpgrades"))
      : () => {
          localStorage.setItem(
            "itemUpgrades",
            JSON.stringify(BaseItemUpgrades)
          );
          return BaseItemUpgrades;
        }
  );

  const [ItemStore, setItemStore] = useState(
    localStorage.getItem("itemStore")
      ? JSON.parse(localStorage.getItem("itemStore"))
      : () => {
          localStorage.setItem("itemStore", JSON.stringify(BaseItemStore));
          return BaseItemStore;
        }
  );

  const [clickAmount, setclickAmount] = useState(
    localStorage.getItem("clickAmount")
      ? parseFloat(localStorage.getItem("clickAmount"))
      : 0
  );

  const buyItem = (id) => {
    if (
      ItemUpgrades[id].effectTo == "click" &&
      ItemUpgrades[id].sold == false
    ) {
      localStorage.setItem(
        "clickModifier",
        parseInt(localStorage.getItem("clickModifier")) *
          ItemUpgrades[id].effect
      );
      localStorage.setItem("clickAmount", clickAmount - ItemUpgrades[id].price);

      ItemUpgrades[id].sold = true;
      localStorage.setItem("itemUpgrades", JSON.stringify(ItemUpgrades));
      setItemUpgrades(JSON.parse(localStorage.getItem("itemUpgrades")));
      window.location.reload();
    } else if (
      clickAmount >= ItemUpgrades[id].price &&
      ItemUpgrades[id].sold == false
    ) {
      localStorage.setItem("clickAmount", clickAmount - ItemUpgrades[id].price);
      ItemStore[ItemUpgrades[id].effectTo].productionModifier =
        ItemStore[ItemUpgrades[id].effectTo].productionModifier *
        ItemUpgrades[id].effect;

      ItemUpgrades[id].sold = true;
      localStorage.setItem("itemUpgrades", JSON.stringify(ItemUpgrades));
      localStorage.setItem("itemStore", JSON.stringify(ItemStore));
      setItemUpgrades(JSON.parse(localStorage.getItem("itemUpgrades")));
      setItemStore(JSON.parse(localStorage.getItem("itemStore")));
    }
  };

  useEffect(() => {
    setclickAmount(localStorage.getItem("clickAmount"));
  });
  return (
    <div className="items">
      {ItemUpgrades.map((items, index) => {
        if (
          items.requirement == "click" ||
          ItemStore[items.requirement].level >= items.requirementLevel
        ) {
          console.log(items);
          console.log(ItemStore[items.requirement]);
          return (
            <button
              className="buttonCell"
              onMouseOver={() => {
                tooltip.addtooltip(items.name, items.price, items.description);
              }}
              onMouseLeave={() => {
                tooltip.removetooltip();
              }}
              onClick={() => {
                buyItem(index);
              }}
              key={index}
            >
              <img
                className="itemImage f-1"
                src={`./${items.img}.png`}
                alt={items.name}
              />
              <div className="itemInfo f-6">
                <div className="itemName">{items.name}</div>
                <div className="itemPrice">{items.price} C</div>
              </div>
              <div className="itemStatus f-3">
                {items.sold ? "Adquirido" : "Disponivel"}
              </div>
            </button>
          );
        }
      })}
    </div>
  );
}
function ItemCellRewards({
  ItemId,
  ItemImg,
  ItemName,
  ItemLevel,
  ItemPrice,
  ItemDescription = "",
}) {
  return (
    <button
      className="buttonCell"
      id={ItemId}
      onMouseOver={() => {
        tooltip.addtooltip(ItemName, ItemPrice, ItemDescription);
      }}
      onMouseLeave={() => {
        tooltip.removetooltip();
      }}
    >
      <img className="itemImage" src={`./${ItemImg}.png`} alt={ItemName} />
      <div className="itemInfo">
        <div className="itemName">{ItemName}</div>
        <div className="itemPrice">{ItemPrice} C</div>
      </div>
      <div className="itemLevel">{ItemLevel}</div>
    </button>
  );
}
export {
  ItemCellStore as ItemCellStore,
  ItemCellUpgrades as ItemCellUpgrades,
  ItemCellRewards as ItemCellRewards,
};
