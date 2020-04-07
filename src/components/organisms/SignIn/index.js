import React from "react";
import CustomInput from "../../atoms/CustomInput";
import CustomButton from "../../atoms/CustomButton";
import { signInWithGoogle } from "../../../firebase/firebase.utils";
import "./SignIn.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in-container">
        <h2 className="sign-in__title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            onChange={this.handleChange}
            required
          />
          <CustomInput
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />
          <div className="button-group">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
