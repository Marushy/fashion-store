import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

function MenuItem({
  id,
  className,
  title,
  salePrice,
  price,
  sale,
  images,
  history,
}) {
  return (
    <div className={className}>
      <Link className="menuitem" to={`/shop/product/${id}`}>
        <img
          src={`/${images.urlStartItem}`} //{images.urlStartItem}
          alt={`${title} `}
          className="menuitem__img"
        />
        <p className="menuitem__text" onClick={() => history.push("product/")}>
          {title}
        </p>
        <p className="category-price">
          {sale ? <span className="sale-price">&euro;{salePrice}</span> : null}

          <span
            className={
              !salePrice || salePrice.length === 0 ? "" : "line-through"
            }
          >
            &euro;{price}
          </span>
        </p>
      </Link>
    </div>
  );
}

export default withRouter(MenuItem);
