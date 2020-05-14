import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  isInverted,
  ...otherButtonProps
}) => (
  <button
    className={` ${isInverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherButtonProps}
  >
    {children}
  </button>
);

export default CustomButton;
