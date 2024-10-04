import { renderToString } from "react-dom/server";
import "./modal.css";
class Modal {
  addModal(variavel) {
    let modal;
    document.getElementById("rootmodal").style.visibility = "visible";
    switch (variavel) {
      case 0:
        modal = renderToString(<div>texto</div>);
        break;
      case 1:
        modal = renderToString(<div>musica</div>);
        break;
      case 2:
        modal = renderToString(<div>fotos</div>);
        break;
      case 3:
        modal = renderToString(<div>videos</div>);
        break;
    }
    document.getElementById("modalcontent").innerHTML = modal;
  }
}

export default Modal;
