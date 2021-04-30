import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { isInCart } from "../../helpers";
import Button from "../button/button";

import "./product-details.style.scss";

function ProductDetails({
  id,
  className,
  title,
  price,
  salePrice,
  sale,
  productDescription,
  images,
}) {
  const product = { id, title, price, salePrice, sale, images };

  const { addProduct, cartItems, increase } = useContext(CartContext);

  return (
    <div className={className}>
      <h1 className="product__title">{title}</h1>
      <p className="product__price">
        {sale ? (
          <span className="product__price--sale">&euro;{salePrice}</span>
        ) : null}

        <span className={sale ? `${"main"}` : 0}>&euro;{price}</span>
      </p>
      <div className="product__detail">
        <div className="product__detail--1">
          <p className="product__detail--1-description">
            {productDescription.descriptionFirst}
          </p>
          <ul className="product__detail--1-list">
            {productDescription.decriptionList &&
              productDescription.decriptionList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
          <p className="product__detail--1-description">
            {productDescription.composition}
          </p>
          <p className="product__detail--1-descriptionBack">
            {productDescription.backDescription}
          </p>
        </div>
        {!isInCart(product, cartItems) && (
          <Button title="Add to Cart" onClick={() => addProduct(product)} />
        )}
        {isInCart(product, cartItems) && (
          <Button title="Add More" onClick={() => increase(product)} />
        )}

        <div className="product__detail--2">
          <p>{productDescription.composition}</p>
          <p>{productDescription.productCare}</p>
          <p>{productDescription.productNo}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
