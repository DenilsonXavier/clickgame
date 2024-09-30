import { renderToString } from "react-dom/server";
import "./tooltip.css";
class Tooltip {
  constructor() {
    this.div = document.createElement("div");
  }

  addtooltip(name, price, description, production = "") {
    this.div.className = "tooltip";
    this.div.innerHTML = renderToString(
      <div className="tooltiptext-group half-border">
        <div className="f-6">{name}</div>
        <div className="f-4">Custo: {price}</div>
      </div>
    );
    this.div.innerHTML +=
      production != ""
        ? renderToString(
            <div className="tooltiptext-group half-border">
              <div className="f-10">
                Gera: <text id="tooltipProductionIndicator">{production}</text>
                /Coração(ões) por segundo
              </div>
            </div>
          )
        : "";
    this.div.innerHTML += renderToString(
      <div className="tooltiptext-group">
        <div className="f-10">{description}</div>
      </div>
    );
    this.div.style.left = "43.5%";

    // Adiciona a div ao corpo do documento
    document.body.appendChild(this.div);
  }
  movetooltip() {
    console.log(1);
    document.addEventListener("mousemove", (e) => {
      this.div.style.top =
        e.screenY < 700 ? e.screenY - 110 + "px" : e.screenY - 200 + "px";
    });
  }
  atttooltipProduction(production) {
    document.getElementById("tooltipProductionIndicator").innerHTML =
      production;
  }
  removetooltip() {
    document.body.removeChild(this.div);
  }
}

export default Tooltip;
