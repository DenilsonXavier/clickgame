import "./css/ItemCell.css";

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
    <button className="buttonCell" id={ItemId}>
      <img className="itemImage" src={`./${ItemImg}.png`} alt={ItemName} />
      <div className="itemInfo">
        <div className="itemName">{ItemName}</div>
        <div className="itemPrice">{ItemPrice} C</div>
      </div>
      <div className="itemLevel">{ItemLevel}</div>
      <div className="tooltiptext">
        <div className="tooltiptext-group half-border">
          <div className="flex-6">{ItemName}</div>
          <div className="flex-4">Custo: {ItemPrice}</div>
        </div>
        <div className="tooltiptext-group half-border">
          <div className="flex-10">
            Gera: {ItemProduction}/Coração(ões) por segundo
          </div>
        </div>
        <div className="tooltiptext-group">
          <div className="flex-10">{ItemDescription}</div>
        </div>
      </div>
    </button>
  );
}

function ItemCellUpgrades({
  ItemId,
  ItemImg,
  ItemName,
  ItemLevel,
  ItemPrice,
  ItemProduction,
  ItemDescription = "",
}) {
  return (
    <button className="buttonCell" id={ItemId}>
      <img className="itemImage" src={`./${ItemImg}.png`} alt={ItemName} />
      <div className="itemInfo">
        <div className="itemName">{ItemName}</div>
        <div className="itemPrice">{ItemPrice} C</div>
      </div>
      <div className="itemLevel">{ItemLevel}</div>
      <div className="tooltiptext">
        <div className="tooltiptext-group half-border">
          <div className="flex-6">{ItemName}</div>
          <div className="flex-4">Custo: {ItemPrice}</div>
        </div>
        <div className="tooltiptext-group half-border">
          <div className="flex-10">
            Gera: {ItemProduction}/Coração(ões) por segundo
          </div>
        </div>
        <div className="tooltiptext-group">
          <div className="flex-10">{ItemDescription}</div>
        </div>
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
  ItemProduction,
  ItemDescription = "",
}) {
  return (
    <button className="buttonCell" id={ItemId}>
      <img className="itemImage" src={`./${ItemImg}.png`} alt={ItemName} />
      <div className="itemInfo">
        <div className="itemName">{ItemName}</div>
        <div className="itemPrice">{ItemPrice} C</div>
      </div>
      <div className="itemLevel">{ItemLevel}</div>
      <div className="tooltiptext">
        <div className="tooltiptext-group half-border">
          <div className="flex-6">{ItemName}</div>
          <div className="flex-4">Custo: {ItemPrice}</div>
        </div>
        <div className="tooltiptext-group half-border">
          <div className="flex-10">
            Gera: {ItemProduction}/Coração(ões) por segundo
          </div>
        </div>
        <div className="tooltiptext-group">
          <div className="flex-10">{ItemDescription}</div>
        </div>
      </div>
    </button>
  );
}
export {
  ItemCellStore as ItemCellStore,
  ItemCellUpgrades as ItemCellUpgrades,
  ItemCellRewards as ItemCellRewards,
};
