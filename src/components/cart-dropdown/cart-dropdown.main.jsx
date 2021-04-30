import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { withRouter } from "react-router-dom";
import CartItem from "../cart -item/cart-item";
import "./cart-dropdown.main.stylex.scss";

function CartDropdownMain({ history }) {
  const { cartItems, total, increase, decrease, removeProduct } = useContext(
    CartContext
  );
  const funcs = { increase, decrease, removeProduct };

  return (
    <div className="cart1-dropdown">
      <h1 className="cart1-dropdown__title">Cart </h1>
      <div className="cart1-dropdown__items">
        {cartItems.length === 0 ? (
          <div className="cart1-dropdown__items--empty">
            Your cart is empty!
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem {...item} key={item.id} {...funcs} />
            ))}
          </>
        )}
      </div>
      <div className="cart1-dropdown__total">
        <div className="cart1-dropdown__total--first">
          <p className="subtotal">
            Subtotal <span className="subtotal-span">&euro;{total}</span>
          </p>
          <p className="total">
            Taxes <span>&euro;{Math.round(0.2 * total)}</span>
          </p>
        </div>
        <div className="cart1-dropdown__total--second">
          <p className="total-all">
            Total <span>&euro;{total * 1.2}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(CartDropdownMain);
