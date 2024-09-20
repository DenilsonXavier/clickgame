import "./css/ClickCol.css";
import heart from "/heart.svg";
import showFloatNumber from "./etc/floatNumber";
import { useState } from "react";

function ClickCol() {
  const [clicks, setClicks] = useState({
    clickAmount: localStorage.getItem("clickAmount")
      ? parseInt(localStorage.getItem("clickAmount"))
      : 0,
    clickBaseValue: localStorage.getItem("clickBaseValue")
      ? parseInt(localStorage.getItem("clickBaseValue"))
      : 1,
    clickModifier: localStorage.getItem("clickModifier")
      ? parseInt(localStorage.getItem("clickModifier"))
      : 1,
  });

  const handleClick = () => {
    setClicks({
      ...clicks,
      clickAmount:
        clicks.clickAmount + clicks.clickBaseValue * clicks.clickModifier,
    });
  };
  localStorage.setItem("clickAmount", clicks.clickAmount);

  return (
    <>
      <h2 className="heartIndicator">Corações: {clicks.clickAmount}</h2>
      <img
        className="clickImg"
        onClick={(c) => {
          handleClick();
          showFloatNumber(
            clicks.clickBaseValue * clicks.clickModifier,
            2000,
            c.pageX,
            c.pageY
          );
        }}
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
