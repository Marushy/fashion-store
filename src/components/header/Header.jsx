import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Vector.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import CartIcon from "../cart-icon/cart-icon";
import "./header-styles.scss";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header className="header">
      <div
        className={isMobile ? "header__container--mobile" : "header__container"}
        onClick={() => setIsMobile(false)}
      >
        <Link className="header__container-link" to="/shop/women">
          Women
        </Link>
        <Link className="header__container-link" to="/shop/male">
          Men
        </Link>
        <Link
          className="header__container-link header__container-link--sale"
          to="/shop/sale-women-male"
        >
          Sale
        </Link>
      </div>

      <div>
        <Link to="/">
          <Logo
            className={
              !isMobile
                ? "logo--mobile"
                : "header__container-link header__container-link--logo"
            }
          />
        </Link>
      </div>

      <div
        className={
          isMobile ? "header__container--mobile1" : "header__container"
        }
        onClick={() => setIsMobile(false)}
      >
        <Link className="header__container-link" to="/">
          Contact
        </Link>
        <Link className="header__container-link" to="/">
          Sign in
        </Link>
        <button className="header__container-link header__container-link--cart ">
          <CartIcon />
        </button>
      </div>

      <button className="mobile" onClick={() => setIsMobile(!isMobile)}>
        {!isMobile ? (
          <Menu className="mobile__icon" />
        ) : (
          <Close className="mobile__icon--close" />
        )}
      </button>
    </header>
  );
}

export default Header;
