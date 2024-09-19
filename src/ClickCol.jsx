import "./css/ClickCol.css";
import heart from "/heart.svg";
import ClickerLogistic from "./ClickerLogistic";

function ClickCol() {
  return (
    <>
      <h2 className="heartIndicator">Corações: 000000</h2>
      <img
        className="clickImg"
        onClick={ClickerLogistic.clickGenerator()}
        src={heart}
        alt="Gerador de amor"
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
