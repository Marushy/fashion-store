import React from "react";
import Button from "../../button/button";
import FormInput from "../form-input/form-input";
import FormLayout from "../form-layout/form-layout";
import "./form-user-details.scss";

export class FormUserDetail extends React.Component {
  userData;
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  currentStepFunc = (i) => {
    this.props.currentStep(i);
  };

  // React Life Cycle
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        // name: this.userData.name,
        email: this.userData.email,
        // phone: this.userData.phone,
      });
    } else {
      this.setState({
        // name: "",
        email: "",
        // phone: "",
      });
    }
    console.log(this.userData);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <FormLayout current={this.currentStepFunc}>
        <div className="form-user">
          <h2 className="form-user__title">Contact Information</h2>
          <FormInput
            defaultValue="Bob"
            title="email"
            placeholder="Email"
            value={values.email}
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
              value={values.firstName}
              type="text"
              onChange={handleChange("firstName")}
              className="half-size"
              required
            />
            <FormInput
              title="lastName"
              placeholder="Last name"
              value={values.lastName}
              type="text"
              onChange={handleChange("lastName")}
              className="half-size"
              required
            />
          </div>
          <FormInput
            title="company"
            placeholder="Company (optional)"
            value={values.company}
            type="text"
            onChange={handleChange("company")}
          />
          <FormInput
            title="address"
            placeholder="Address"
            value={values.address}
            type="text"
            onChange={handleChange("address")}
            required
          />
          <FormInput
            title="suite"
            placeholder="Apartment, suite, etc. (optional)"
            value={values.suite}
            type="text"
            onChange={handleChange("suite")}
          />
          <div className="form-user__name">
            <FormInput
              title="postalCode"
              placeholder="Postal code"
              value={values.postalCode}
              type="text"
              onChange={handleChange("postalCode")}
              className="half-size"
              required
            />
            <FormInput
              title="city"
              placeholder="City"
              value={values.city}
              type="text"
              onChange={handleChange("city")}
              className="half-size"
              required
            />
          </div>
          <FormInput
            title="country"
            placeholder="Counrty/Region"
            value={values.country}
            type="text"
            onChange={handleChange("country")}
            required
          />
          <FormInput
            title="phone"
            placeholder="Phone (optional)"
            value={values.phone}
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
