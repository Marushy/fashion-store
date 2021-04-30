import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { withRouter } from "react-router-dom";
import CartItem from "../cart -item/cart-item";
import Button from "../../components/button/button";
import { ReactComponent as RemoveCart } from "../../assets/trash.svg";

import "./cart-dropdown.styles.scss";

function CartDropdown({ history }) {
  const {
    cartItems,
    total,
    toggleCart,
    increase,
    decrease,
    removeProduct,
    clearCart,
  } = useContext(CartContext);
  const funcs = { increase, decrease, removeProduct };

  return (
    <div className="cart-dropdown">
      <h1 className="cart-dropdown__title">
        Cart{" "}
        <button onClick={() => clearCart()}>
          <RemoveCart />
        </button>
      </h1>

      <div className="cart-dropdown__items">
        {cartItems.length === 0 ? (
          <div className="cart-dropdown__items--empty">Your cart is empty!</div>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem {...item} key={item.id} {...funcs} />
            ))}
          </>
        )}
      </div>
      <div className="cart-dropdown__total">
        <div className="cart-dropdown__total--first">
          <p className="subtotal">
            Subtotal <span className="subtotal-span">&euro;{total}</span>
          </p>
          <p className="total">
            Taxes <span>&euro;{Math.round(0.2 * total)}</span>
          </p>
        </div>
        <div className="cart-dropdown__total--second">
          <p className="total-all">
            Total <span>&euro;{total * 1.2}</span>
          </p>
        </div>
      </div>

      <Button
        title="checkout"
        onClick={() => {
          history.push("/checkout");
          toggleCart();
        }}
      />
    </div>
  );
}

export default withRouter(CartDropdown);
