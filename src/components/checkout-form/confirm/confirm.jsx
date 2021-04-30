import React from "react";
import FormLayout from "../form-layout/form-layout";
import Button from "../../button/button";

import "./confirm.stles.scss";

export class Confirm extends React.Component {
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

    return (
      <FormLayout current={this.currentStep}>
        <div className="form-confirm">
          <h2 className="form-confirm__title">Confirm</h2>
          <div className="form-confirm__info">
            <p className="form-confirm__info-item">{values.email}</p>
            <div className="form-confirm__info-block">
              <p className="form-confirm__info-item">
                <span>
                  {values.firstName} {values.lastName}
                </span>
              </p>
              <p className="form-confirm__info-item">{values.address}</p>
              <p className="form-confirm__info-item">{values.postalCode}</p>
              <p className="form-confirm__info-item">{values.country}</p>
            </div>
            <p className="form-confirm__info-item phone">{values.phone}</p>
            <p className="form-confirm__info-item">
              <span>{values.payment}</span> ({values.email})
            </p>
          </div>

          <Button
            type="submit"
            value="Submit"
            onClick={this.continue}
            title="Order"
            position="right"
          />
        </div>
      </FormLayout>
    );
  }
}

export default Confirm;
