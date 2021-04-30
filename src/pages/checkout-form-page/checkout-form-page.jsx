import React from "react";
import CartDropdownMain from "../../components/cart-dropdown/cart-dropdown.main";
import CheckoutForm from "../../components/checkout-form/checkout-form";
import Footer from "../../components/footer/footer";

import "./checkout-form-page.styles.scss";

function CheckoutFormPage() {
  return (
    <>
      <div className="checkout-form-page">
        <div className="checkout-form-page--item1">
          <CheckoutForm />
        </div>

        <div className="checkout-form-page--item2">
          <CartDropdownMain />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckoutFormPage;
