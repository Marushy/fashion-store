import React from "react";
import PropTypes from "prop-types";
import "./form-imput.styles.scss";

function FormInput({
  title,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
}) {
  return (
    <div className="form-input">
      <input
        id={title}
        title={title}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        style={error && { border: "solid 1px red" }}
      />
      <label htmlFor={title}>{label}</label>
      {error && <p>{error}</p>}
    </div>
  );
}

FormInput.defaultProps = {
  type: "text",
  className: "",
};

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  //type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "email"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
