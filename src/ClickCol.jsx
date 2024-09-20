import "./css/ClickCol.css";
import heart from "/heart.svg";
// import ClickerLogistic from "./ClickerLogistic";
import { useState } from "react";
// var clicks = new ClickerLogistic();

function ClickCol() {
  const [clickAmount, setClickAmount] = useState(
    localStorage.getItem("clickAmount")
      ? parseInt(localStorage.getItem("clickAmount"))
      : 0
  );
  const [clickBaseValue] = useState(
    localStorage.getItem("clickBaseValue")
      ? parseInt(localStorage.getItem("clickBaseValue"))
      : 1
  );
  const [clickModifier] = useState(
    localStorage.getItem("clickModifier")
      ? parseInt(localStorage.getItem("clickModifier"))
      : 1
  );
  const handleImageClick = () => {
    const newclickAmount = clickAmount + clickBaseValue * clickModifier;
    setClickAmount(newclickAmount);
    localStorage.setItem("clickAmount", newclickAmount);
  };

  return (
    <>
      <h2 className="heartIndicator">Corações: {clickAmount.toString()}</h2>
      <img
        className="clickImg"
        onClick={handleImageClick}
        src={heart}
        alt="Gerador de amor"
        draggable="false"
      />
      <div className="storeItems">
        <ul className="storeItemsLines">
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
        </ul>
      </div>
    </>
  );
}

export default ClickCol;
