import React from "react";
import FormLayout from "../form-layout/form-layout";

import "./success.styles.scss";

export default function Success({ currentStep }) {
  return (
    <FormLayout current={currentStep}>
      <div className="form-success">
        <h2 className="form-success__title">Thank you for your order!</h2>
        <p className="form-success__text">
          The order will be processed within next 48 hours.
        </p>
      </div>
    </FormLayout>
  );
}
