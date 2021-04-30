import React, { useContext } from "react";
import MenuItem from "../../components/menu-item/menu-item";
import { ProductsContext } from "../../context/shop.context";

import "./menu-proposal.styles.scss";

const MenuProposal = ({ match }) => {
  const { products } = useContext(ProductsContext);

  const womenProducts = products
    .filter((product) => product.id < 4)
    .map((product) => (
      <MenuItem {...product} key={product.id} className="menu-item" />
    ));
  return <div className="menu-proposal">{womenProducts}</div>;
};

export default MenuProposal;
