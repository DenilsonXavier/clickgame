import { renderToString } from "react-dom/server";
import "./modal.css";
import { createRoot } from "react-dom/client";
class Modal {
  addModal() {
    document.getElementById("rootmodal").style.visibility = "visible";
    document.getElementById("modalcontent").innerHTML = renderToString(
      <>
        <p>aaaaa</p>
      </>
    );
  }
}

export default Modal;
