import React from "react";
import SignIn from "../../organisms/SignIn";
import SignUp from "../../organisms/SignUp";
import "./SignInSignUp.scss";

class SignInSignUp extends React.Component {
  render() {
    return (
      <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInSignUp;
