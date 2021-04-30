import React from "react";

function RadioButton({ label, value, checked }) {
  return (
    <label>
      <input type="radio" checked={checked} />
      <img src={label} alt="radio" />
      <span>{label}</span>
    </label>
  );
}

export default RadioButton;
