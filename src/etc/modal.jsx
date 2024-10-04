import { renderToString } from "react-dom/server";
import "./modal.css";
class Modal {
  addModal(variavel) {
    let modal;
    document.getElementById("rootmodal").style.visibility = "visible";
    switch (variavel) {
      case 0:
        modal = renderToString(<div> <img className="imagem" src="/Textinhodoamor.png" /></div>);
        break;
        case 1:
          modal = renderToString(
            <div>
              <a
                href="https://open.spotify.com/playlist/6KwLQocywBZkTjHcJTS1Jg?si=864mIn6FTxuK23fCaPFczg&pt=0fc59277254beb0083d0933beb14bf05&pi=u-e0Whk1LkTVO7"
                target="_blank"
                rel="noopener noreferrer" 
              >
                Ouça a playlist no Spotify
              </a>
            </div>
          );
          break;
      
      case 2:
        modal = renderToString(<div><img width="500" height="700" className="imagem" src="/nossasfotos.png" /></div>);
        break;
      case 3:
        modal = renderToString(<div><video width="500" height="700" controls autoPlay >
          <source src="/videodeamor.mp4" type="video/mp4"/>
    </video></div>);
        break;
    }
    document.getElementById("modalcontent").innerHTML = modal;
  }
}

export default Modal;
