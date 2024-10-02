import ItemCell from "./ItemCell";

function Reward() {
  return (
    <div className="items">
      <ItemCellRewards
        ItemId={21}
        ItemImg="rewardImg1"
        ItemName="Textinho de Amor"
        ItemPrice={0}
        ItemLevel={1}
        ItemProduction={50}
      />
      <ItemCellRewards
        ItemId={22}
        ItemImg="rewardImg2"
        ItemName="Músicas que me lembra vc"
        ItemPrice={0}
        ItemLevel={1}
        ItemProduction={100}
      />
      <ItemCellRewards
        ItemId={23}
        ItemImg="rewardImg3"
        ItemName="Gifs"
        ItemPrice={0}
        ItemLevel={1}
        ItemProduction={100}
      />
      <ItemCellRewards
        ItemId={24}
        ItemImg="rewardImg4"
        ItemName="Nossas fotos"
        ItemPrice={0}
        ItemLevel={1}
        ItemProduction={100}
      />
      <ItemCellRewards
        ItemId={25}
        ItemImg="rewardImg5"
        ItemName="Supresa"
        ItemPrice={0}
        ItemLevel={1}
        ItemProduction={100}
      />
    </div>
  );
}

export default Reward;
