import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";

import "./cart-icon.styles.scss";

function CartIcon() {
  const { itemCount, toggleCart } = useContext(CartContext);

  return (
    <div onClick={toggleCart}>
      {itemCount > 0 ? <sup>{itemCount}</sup> : null}
      <span className="cart">Cart</span>
    </div>
  );
}

export default CartIcon;
