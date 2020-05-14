import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CustomInput from "../../atoms/CustomInput";
import CustomButton from "../../atoms/CustomButton";
import { googleSignIn, emailSignIn } from "../../../redux/user/user.actions";

import "./SignIn.scss";

const SignIn = ({ emailSignIn, googleSignIn }) => {
  const { userCredentials, setUserCredentials } = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignIn({ email, password });
    setUserCredentials({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2 className="sign-in__title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <CustomInput
          type="email"
          name="email"
          value={email}
          label="email"
          onChange={handleChange}
          required
        />
        <CustomInput
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          label="password"
          required
        />
        <div className="button-group">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignIn: bindActionCreators(googleSignIn, dispatch),
  emailSignIn: bindActionCreators(emailSignIn, dispatch),
});

export default connect(null, mapDispatchToProps)(SignIn);
