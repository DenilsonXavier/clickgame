import "./css/ItemCell.css";

function ItemCell({
  ItemId,
  ItemImg,
  ItemName,
  ItemLevel,
  ItemPrice,
  ItemProduction,
}) {
  return (
    <div className="itemCell" id={ItemId}>
      <img className="itemImage" src={`./${ItemImg}.png`} alt={ItemName} />
      <div className="itemName">{ItemName}</div>
      <div className="itemLevel">Nível: {ItemLevel}</div>
      <div className="itemPrice">Preço: {ItemPrice} Corações</div>
      <div className="itemProduction">
        Gerar: {ItemProduction}
        <br />
        Corações/s
      </div>
    </div>
  );
}

export default ItemCell;
