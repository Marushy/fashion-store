import React from "react";
import { ReactComponent as Trash } from "../../assets/dustbin.svg";
import { ReactComponent as Minus } from "../../assets/remove.svg";

import "./cart-item.styles.scss";

function CartItem(props) {
  const {
    title,
    price,
    salePrice,
    sale,
    images,
    quantity,
    id,
    decrease,
    removeProduct,
  } = props;
  const product = { title, price, salePrice, sale, images, quantity, id };
  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={`/${images.gallery[0]}`} alt="product" className="" />
      </div>
      <div className="cart-item__desc">
        <p className="cart-item__desc-title">{title}</p>
        {sale ? (
          <p className="cart-item__desc-price">
            {salePrice} X{" "}
            <span className="cart-item__desc-quantity">{quantity}</span>
          </p>
        ) : (
          <p className="cart-item__desc-price">
            {price} X{" "}
            <span className="cart-item__desc-quantity">{quantity}</span>
          </p>
        )}
      </div>
      <div className="cart-item__control">
        {quantity === 1 && (
          <button onClick={() => removeProduct(product)}>
            <Trash className="cart-item__control--icon" />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => decrease(product)}>
            <Minus className="cart-item__control--icon" />
          </button>
        )}
      </div>
    </div>
  );
}

export default CartItem;
