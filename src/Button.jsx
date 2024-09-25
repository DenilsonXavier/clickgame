import React from "react";

function Button({ buttonName, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      <h2>{buttonName}</h2>
    </button>
  );
}

export default Button;
