import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/Vector.svg";
import { ReactComponent as Next } from "../../../assets/skip-track.svg";

import "./form-layout.scss";

function FormLayout({ children, current }) {
  return (
    <div className="form-layout">
      <div className="form-layout__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="form-layout__links">
        <button onClick={() => current(1)}>
          Information <Next className="next" />
        </button>
        <button onClick={() => current(2)}>
          Payment <Next className="next" />
        </button>
        <button onClick={() => current(3)}>Confirm</button>
      </div>

      {children}
    </div>
  );
}

export default FormLayout;
