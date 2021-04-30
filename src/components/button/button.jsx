import React from "react";
import "./buton-styles.scss";

export default function Button({ title, onClick, position }) {
  return (
    <button
      className={position === "right" ? "button right" : "button"}
      onClick={onClick}
      position={position}
    >
      {title}
    </button>
  );
}
