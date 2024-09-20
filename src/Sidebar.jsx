import "./css/Sidebar.css";
import "./css/button.css";
import ItemCell from "./ItemCell";

function Button({ buttonName }) {
  return (
    <button className="button">
      <h2>{buttonName}</h2>
    </button>
  );
}

function Sidebar() {
  return (
    <>
      <div className="title">
        <div className="store">
          <Button buttonName="Loja" />
        </div>
        <div className="upgrade">
          <Button buttonName="Atualizações" />
        </div>
        <div className="reward">
          <Button buttonName="Recompensas" />
        </div>
      </div>
      <div className="items">
        <ItemCell
          ItemId={1}
          ItemImg="chocolate8bits"
          ItemName="Chocolate de Baixa renda"
          ItemPrice={100}
          ItemLevel={0}
          ItemProduction={1}
        />
      </div>
      <div className="items">
        <ItemCell
          ItemId={1}
          ItemImg="chocolate8bits"
          ItemName="Chocolate de Baixa renda"
          ItemPrice={100}
          ItemLevel={0}
          ItemProduction={1}
        />
      </div>
      <div className="items">
        <ItemCell
          ItemId={1}
          ItemImg="chocolate8bits"
          ItemName="Chocolate de Baixa renda"
          ItemPrice={100}
          ItemLevel={0}
          ItemProduction={1}
        />
      </div>
      <div className="items">
        <ItemCell
          ItemId={1}
          ItemImg="chocolate8bits"
          ItemName="Chocolate de Baixa renda"
          ItemPrice={100}
          ItemLevel={0}
          ItemProduction={1}
        />
      </div>
    </>
  );
}

export default Sidebar;
