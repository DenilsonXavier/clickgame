import React, { useState } from "react";
import "./css/Sidebar.css";
import "./css/button.css";
import ItemCell from "./ItemCell";

function Button({ buttonName, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      <h2>{buttonName}</h2>
    </button>
  );
}

function Sidebar() {
  const [activeTab, setActiveTab] = useState("Loja");

  const renderContent = () => {
    if (activeTab === "Loja") {
      return (
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
      );
    } else if (activeTab === "Atualizações") {
      return (
        <div className="items">
          {/* Itens padrão da aba Atualizações */}
          <ItemCell
            ItemId={2}
            ItemImg="upgradeImg1"
            ItemName="Upgrade de Produção"
            ItemPrice={500}
            ItemLevel={0}
            ItemProduction={5}
          />
          <ItemCell
            ItemId={3}
            ItemImg="upgradeImg2"
            ItemName="Melhoria de Eficiência"
            ItemPrice={1000}
            ItemLevel={0}
            ItemProduction={10}
          />
        </div>
      );
    } else if (activeTab === "Recompensas") {
      return (
        <div className="items">
          {/* Itens padrão da aba Recompensas */}
          <ItemCell
            ItemId={4}
            ItemImg="rewardImg1"
            ItemName="Recompensa de Fidelidade"
            ItemPrice={0}
            ItemLevel={1}
            ItemProduction={50}
          />
          <ItemCell
            ItemId={5}
            ItemImg="rewardImg2"
            ItemName="Bônus de Tempo"
            ItemPrice={0}
            ItemLevel={1}
            ItemProduction={100}
          />
        </div>
      );
    }
  };

  return (
    <>
      <div className="title">
        <div className="store">
          <Button buttonName="Loja" onClick={() => setActiveTab("Loja")} />
        </div>
        <div className="upgrade">
          <Button buttonName="Atualizações" onClick={() => setActiveTab("Atualizações")} />
        </div>
        <div className="reward">
          <Button buttonName="Recompensas" onClick={() => setActiveTab("Recompensas")} />
        </div>
      </div>

      {renderContent()}
    </>
  );
}

export default Sidebar;
