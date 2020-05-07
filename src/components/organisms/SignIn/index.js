import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CustomInput from "../../atoms/CustomInput";
import CustomButton from "../../atoms/CustomButton";
import { googleSignIn, emailSignIn } from "../../../redux/user/user.actions";

import "./SignIn.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignIn } = this.props;
    emailSignIn({ email, password });
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignIn } = this.props;
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
            <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignIn: bindActionCreators(googleSignIn, dispatch),
  emailSignIn: bindActionCreators(emailSignIn, dispatch),
});

export default connect(null, mapDispatchToProps)(SignIn);
