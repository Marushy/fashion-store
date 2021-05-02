import React from "react";
import Button from "../../button/button";
import FormInput from "../form-input/form-input";
import FormLayout from "../form-layout/form-layout";
import "./form-user-details.scss";

const initialState = {
  emailError: "",
  firstNameError: "",
  lastNameError: "",
  addressError: "",
  postalCodeError: "",
  cityError: "",
  countryError: "",
};

export class FormUserDetail extends React.Component {
  state = initialState;

  validate = () => {
    let emailError = "";
    let firstNameError = "";
    let lastNameError = "";
    let addressError = "";
    let postalCodeError = "";
    let cityError = "";
    let countryError = "";

    if (!this.props.values.email.includes("@")) {
      emailError = "please enter valid email";
    }
    if (!this.props.values.firstName) {
      firstNameError = "first name is required";
    }
    if (!this.props.values.lastName) {
      lastNameError = "last name is required";
    }
    if (!this.props.values.address) {
      addressError = "address is required";
    }
    if (!this.props.values.postalCode) {
      postalCodeError = "postal code is required";
    }
    if (!this.props.values.city) {
      cityError = "city is required";
    }
    if (!this.props.values.country) {
      countryError = "country is required";
    }

    if (
      emailError ||
      firstNameError ||
      lastNameError ||
      addressError ||
      postalCodeError ||
      cityError ||
      countryError
    ) {
      this.setState({
        emailError,
        firstNameError,
        lastNameError,
        addressError,
        postalCodeError,
        cityError,
        countryError,
      });
      return false;
    }
    return true;
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  currentStepFunc = (i) => {
    this.props.currentStep(i);
  };

  formCheck = (form) => {
    this.props.changedValidForm(form);
  };

  continue = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    this.formCheck(isValid);
    if (isValid) {
      this.props.nextStep();
      this.setState(initialState);
    }
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <FormLayout current={this.currentStepFunc} values={values}>
        <div className="form-user">
          <h2 className="form-user__title">Contact Information</h2>
          <div className="error">{this.state.emailError}</div>
          <FormInput
            title="email"
            placeholder="Email"
            value={values.email || ""}
            type="email"
            onChange={handleChange("email")}
          />
          <h2 className="form-user__title form-user__title--second">
            Shipping address
          </h2>
          <div className="form-user__name">
            <FormInput
              title="firstName"
              placeholder="First name"
              value={values.firstName || ""}
              type="text"
              onChange={handleChange("firstName")}
              className="half-size"
              required
            />
            <div className="error">{this.state.firstNameError}</div>

            <FormInput
              title="lastName"
              placeholder="Last name"
              value={values.lastName || ""}
              type="text"
              onChange={handleChange("lastName")}
              className="half-size"
              required
            />
            <div className="error ">{this.state.lastNameError}</div>
          </div>
          <FormInput
            title="company"
            placeholder="Company (optional)"
            value={values.company || ""}
            type="text"
            onChange={handleChange("company")}
          />
          <div className="error ">{this.state.addressError}</div>
          <FormInput
            title="address"
            placeholder="Address"
            value={values.address || ""}
            type="text"
            onChange={handleChange("address")}
            required
          />

          <FormInput
            title="suite"
            placeholder="Apartment, suite, etc. (optional)"
            value={values.suite || ""}
            type="text"
            onChange={handleChange("suite")}
          />
          <div className="form-user__name">
            <FormInput
              title="postalCode"
              placeholder="Postal code"
              value={values.postalCode || ""}
              type="text"
              onChange={handleChange("postalCode")}
              className="half-size"
              required
            />
            <div className="error ">{this.state.postalCodeError}</div>
            <FormInput
              title="city"
              placeholder="City"
              value={values.city || ""}
              type="text"
              onChange={handleChange("city")}
              className="half-size"
              required
            />
            <div className="error ">{this.state.cityError}</div>
          </div>
          <div className="error ">{this.state.countryError}</div>
          <FormInput
            title="country"
            placeholder="Counrty/Region"
            value={values.country || ""}
            type="text"
            onChange={handleChange("country")}
            required
          />

          <FormInput
            title="phone"
            placeholder="Phone (optional)"
            value={values.phone || ""}
            type="text"
            onChange={handleChange("phone")}
          />
          <Button
            type="submit"
            value="Submit"
            onClick={this.continue}
            title="Continue to Payment"
            position="right"
          />
        </div>
      </FormLayout>
    );
  }
}

export default FormUserDetail;
