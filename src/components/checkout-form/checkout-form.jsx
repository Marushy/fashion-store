import React, { Component } from "react";
import FormUserDetail from "./form-user-details/form-user-details";
import FormPayment from "./form-payment/form-payment";
import Confirm from "./confirm/confirm";
import Success from "./success/success";

export class CheckoutForm extends Component {
  userData;
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
    formValid: false,
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
    console.log(this.state.formValid);
    if (this.state.formValid) this.setState({ step: stepPage });
  };

  changedValidForm = (value) => {
    this.setState({ formValid: value });
  };

  //handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
    localStorage.setItem("user", JSON.stringify(this.state));
  };

  // React Life Cycle
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        email: this.userData.email,
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        company: this.userData.comapany,
        address: this.userData.address,
        suite: this.userData.suite,
        postalCode: this.userData.postalCode,
        city: this.userData.city,
        country: this.userData.country,
        phone: this.userData.phone,
        payment: this.userData.payment,
      });
    } else {
      this.setState({
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
      });
    }
  }

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
      formValid,
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
      formValid,
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetail
            nextStep={this.nextStep}
            currentStep={this.currentStep}
            handleChange={this.handleChange}
            changedValidForm={this.changedValidForm}
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
