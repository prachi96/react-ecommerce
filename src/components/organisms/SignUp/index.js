import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CustomButton from "../../atoms/CustomButton";
import CustomInput from "../../atoms/CustomInput";
import "./SignUp.scss";
import { signUp } from "../../../redux/user/user.actions";

const SignUp = ({ signUp }) => {
  const { userCredentials, setUserCredentials } = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match!");
      return;
    }
    signUp({ email, password, displayName });
    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2 className="sign-up__title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <CustomInput
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          label="Display name"
          required
        />
        <CustomInput
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={handleChange}
          required
        />
        <CustomInput
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          label="Password"
          required
        />
        <CustomInput
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          label="Confirm password"
          required
        />
        <div className="button-group">
          <CustomButton type="submit">Sign up</CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUp: bindActionCreators(signUp, dispatch),
});

export default connect(null, mapDispatchToProps)(SignUp);
