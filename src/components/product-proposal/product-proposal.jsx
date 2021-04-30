import React from "react";
import MenuProposal from "../../components/menu-proposal/menu-proposal";

import "./product-proposal.styles.scss";

function ProductProposal() {
  return (
    <div className="proposal">
      <div className="proposal__text">
        <p>You also might like</p>
      </div>
      <MenuProposal />
    </div>
  );
}

export default ProductProposal;
