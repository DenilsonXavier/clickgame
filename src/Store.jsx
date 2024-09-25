import ItemCell from "./ItemCell";

function Store() {
  return (
    <div className="items">
      <ItemCell
        ItemId={1}
        ItemImg="storeImg1"
        ItemName="Chocolate de Baixa renda"
        ItemPrice={100}
        ItemLevel={0}
        ItemProduction={1}
      />
       <ItemCell
        ItemId={2}
        ItemImg="storeImg2"
        ItemName="Homen aranha de pelucia"
        ItemPrice={100}
        ItemLevel={0}
        ItemProduction={1}
      />
       <ItemCell
        ItemId={3}
        ItemImg="storeImg3"
        ItemName="Coxinha de pizza"
        ItemPrice={100}
        ItemLevel={0}
        ItemProduction={1}
      />
       <ItemCell
        ItemId={4}
        ItemImg="storeImg4"
        ItemName="Rosa de papel"
        ItemPrice={100}
        ItemLevel={0}
        ItemProduction={1}
      />
       <ItemCell
        ItemId={5}
        ItemImg="storeImg5"
        ItemName="fabrica de amor"
        ItemPrice={100}
        ItemLevel={0}
        ItemProduction={1}
      />
      <ItemCell
        ItemId={6}
        ItemImg="storeImg6"
        ItemName="Cupido"
        ItemPrice={100}
        ItemLevel={0}
        ItemProduction={1}
      />
       <ItemCell
        ItemId={7}
        ItemImg="storeImg7"
        ItemName="Flor"
        ItemPrice={100}
        ItemLevel={0}
        ItemProduction={1}
      />
       <ItemCell
        ItemId={8}
        ItemImg="storeImg8"
        ItemName="Poção do Amor"
        ItemPrice={100}
        ItemLevel={0}
        ItemProduction={1}
      />
       <ItemCell
        ItemId={9}
        ItemImg="storeImg9"
        ItemName="Beijoca"
        ItemPrice={100}
        ItemLevel={0}
        ItemProduction={1}
      />
       <ItemCell
        ItemId={10}
        ItemImg="storeImg10"
        ItemName=" "
        ItemPrice={100}
        ItemLevel={0}
        ItemProduction={1}
      />
    </div>
  );
}

export default Store;
