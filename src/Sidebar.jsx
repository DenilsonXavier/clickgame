import React, { useState } from "react";
import "./css/Sidebar.css";
import "./css/button.css";

import Button from "./Button";
import Store from "./Store";
import Updates from "./Updates";
import Rewards from "./Reward";

function Sidebar() {
  const [activeTab, setActiveTab] = useState("Loja");

  const renderContent = () => {
    switch (activeTab) {
      case "Loja":
        return <Store />;
      case "Atualizações":
        return <Updates />;
      case "Recompensas":
        return <Rewards />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="title">
        <div className="store">
          <Button buttonName="Loja" onClick={() => setActiveTab("Loja")} />
        </div>
        <div className="upgrade">
          <Button
            buttonName="Atualizações"
            onClick={() => setActiveTab("Atualizações")}
          />
        </div>
        <div className="reward">
          <Button
            buttonName="Recompensas"
            onClick={() => setActiveTab("Recompensas")}
          />
        </div>
      </div>
      <div className="items-content">{renderContent()}</div>
    </>
  );
}

export default Sidebar;
