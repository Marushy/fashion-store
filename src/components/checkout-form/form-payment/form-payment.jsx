import React, { Component } from "react";
import Button from "../../button/button";
import FormLayout from "../form-layout/form-layout";
import paypal from "../../../assets/paypal1.png";
import stripe from "../../../assets/stripe1.png";
import apple from "../../../assets/apple.png";
import klarna from "../../../assets/klarna.png";
import "./form-payment.styles.scss";

export class FormPayment extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  currentStep = (i) => {
    this.props.currentStep(i);
  };

  render() {
    const { values, handleChange } = this.props;
    console.log(values.payment);
    return (
      <FormLayout current={this.currentStep}>
        <div className="form-payment">
          <h2 className="form-payment__title">Payment provider</h2>
          <div className="payment-selector">
            <input
              id="paypal"
              label="paypal"
              value="PayPal"
              type="radio"
              checked={values.payment === "PayPal"}
              onChange={handleChange("payment")}
            />
            <label htmlFor="paypal" className="payment">
              <img src={paypal} alt="paypal" />
            </label>
            <input
              id="stripe"
              label="stripe"
              value="stripe"
              type="radio"
              checked={values.payment === "stripe"}
              onChange={handleChange("payment")}
            />
            <label htmlFor="stripe" className="payment">
              <img src={stripe} alt="stripe" />
            </label>
            <input
              id="applePay"
              label="applePay"
              value="applePay"
              type="radio"
              checked={values.payment === "applePay"}
              onChange={handleChange("payment")}
            />
            <label htmlFor="applePay" className="payment">
              <img src={apple} alt="apple" />
            </label>

            <input
              id="klarna"
              label="klarna"
              value="Klarna"
              type="radio"
              checked={values.payment === "Klarna"}
              onChange={handleChange("payment")}
            />
            <label htmlFor="klarna" className="payment">
              <img src={klarna} alt="klarna" />
            </label>
          </div>
          <Button
            type="submit"
            value="Submit"
            onClick={this.continue}
            title="Continue to Confirm"
            position="right"
          />
        </div>
      </FormLayout>
    );
  }
}

export default FormPayment;
