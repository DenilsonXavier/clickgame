import { renderToReadableStream } from "react-dom/server";
import "./modal.css";
class Modal extends React.Component {
  constructor() {
    this.div = document.createElement("div");
    this.div.id = "modal";
  }

  addModal() {
    this.div.innerHTML += renderToReadableStream(
      <div className="modal" onMouseOver={() => tooltip.removetooltip()}>
        <div className="overlay"></div>
        <div className="modal-content">
          <button className="close-modal" onClick={this.removeModal}>
            fechar
          </button>
        </div>
      </div>
    );
    document.body.appendChild(this.div);
    document.body.classList.add("active-modal");
  }

  removeModal() {
    console.log("aaa");
    document.body.removeChild(this.div);
    document.body.classList.remove("active-modal");
  }
}

export default Modal;
