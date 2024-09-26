import "./css/ItemCell.css";
import Tooltip from "./etc/tooltip";
const tooltip = new Tooltip();

function ItemCellStore({
  ItemId,
  ItemImg,
  ItemName,
  ItemLevel,
  ItemPrice,
  ItemProduction,
  ItemDescription = "",
}) {
  return (
    <button
      className="buttonCell"
      id={ItemId}
      onMouseOver={() => {
        tooltip.addtooltip(
          ItemName,
          ItemPrice,
          ItemDescription,
          ItemProduction
        );
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

function ItemCellUpgrades({
  ItemId,
  ItemImg,
  ItemName,
  ItemSold,
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
      <div className="itemLevel">
        {ItemSold == false ? "Disponivel" : "Adquirido"}
      </div>
    </button>
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
