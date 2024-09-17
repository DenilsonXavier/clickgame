import "./Sidebar.css";
import "./button.css";

function Button({ buttonName }) {
  return (
    <button className="button">
      <h2>{buttonName}</h2>
    </button>
  );
}

function Sidebar() {
  return (
    <>
      <div className="title">
        <div className="store">
          <Button buttonName="Loja" />
        </div>
        <div className="upgrade">
          <Button buttonName="Atualizações" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
