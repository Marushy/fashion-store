import React, { useContext } from "react";
import MenuItem from "../../components/menu-item/menu-item";
import { ProductsContext } from "../../context/shop.context";

import "./menu-proposal.styles.scss";

const MenuProposal = ({ category }) => {
  const { products } = useContext(ProductsContext);

  let productsFour = [];
  if (products.length > 4) {
    productsFour = products
      .filter((product) => product.category === category)
      .map((product) => (
        <MenuItem {...product} key={product.id} className="menu-item" />
      ))
      .slice(0, 3);
  }

  return <div className="menu-proposal">{productsFour}</div>;
};

export default MenuProposal;
