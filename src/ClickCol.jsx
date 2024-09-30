import "./css/ClickCol.css";

import showFloatNumber from "./etc/floatNumber";
import { useEffect, useState } from "react";
import Pop from "./etc/popAudio";

function ClickCol() {
  const [clickAmount, setclickAmount] = useState(
    localStorage.getItem("clickAmount")
      ? parseFloat(localStorage.getItem("clickAmount"))
      : () => {
          localStorage.setItem("clickAmount", 0);
          return 0;
        }
  );
  const [clickBaseValue, setclickBaseValue] = useState(
    localStorage.getItem("clickBaseValue")
      ? parseFloat(localStorage.getItem("clickBaseValue"))
      : () => {
          localStorage.setItem("clickBaseValue", 1);
          return 1;
        }
  );
  const [clickModifier, setclickModifier] = useState(
    localStorage.getItem("clickModifier")
      ? parseFloat(localStorage.getItem("clickModifier"))
      : () => {
          localStorage.setItem("clickModifier", 1);
          return 1;
        }
  );

  const handleClick = () => {
    setclickAmount(clickAmount + clickBaseValue * clickModifier);
  };
  localStorage.setItem("clickAmount", parseInt(clickAmount));
  useEffect(() => {
    const timer = setInterval(() => {
      setclickAmount(parseInt(localStorage.getItem("clickAmount")));
      setclickModifier(parseInt(localStorage.getItem("clickModifier")));
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h2 className="heartIndicator">Corações: {clickAmount}</h2>
      <img
        className="clickImg"
        onClick={(c) => {
          Pop();
          handleClick();
          showFloatNumber(
            clickBaseValue * clickModifier,
            2000,
            c.pageX,
            c.pageY
          );
        }}
        src={"/heart.svg"}
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
