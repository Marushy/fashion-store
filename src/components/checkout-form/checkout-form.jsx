import React, { Component } from "react";
import FormUserDetail from "./form-user-details/form-user-details";
import FormPayment from "./form-payment/form-payment";
import Confirm from "./confirm/confirm";
import Success from "./success/success";

export class CheckoutForm extends Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    suite: "",
    postalCode: "",
    city: "",
    country: "",
    phone: "",
    payment: "",
    step: 1,
  };

  //proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //go to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //manually change step
  currentStep = (stepPage) => {
    this.setState({ step: stepPage });
  };

  //handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      email,
      firstName,
      lastName,
      company,
      address,
      suite,
      postalCode,
      city,
      country,
      phone,
      payment,
    } = this.state;
    const values = {
      email,
      firstName,
      lastName,
      company,
      address,
      suite,
      postalCode,
      city,
      country,
      phone,
      payment,
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetail
            nextStep={this.nextStep}
            currentStep={this.currentStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPayment
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            currentStep={this.currentStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            currentStep={this.currentStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Success
            step={step}
            currentStep={this.currentStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default:
        return <p>default</p>;
    }
  }
}

export default CheckoutForm;
