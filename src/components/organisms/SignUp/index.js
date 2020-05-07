import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CustomButton from "../../atoms/CustomButton";
import CustomInput from "../../atoms/CustomInput";
import "./SignUp.scss";
import { signUp } from "../../../redux/user/user.actions";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signUp } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password do not match!");
      return;
    }
    signUp({ email, password, displayName });
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up-container">
        <h2 className="sign-up__title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <CustomInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={displayName}
            label="Display name"
            required
          />
          <CustomInput
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
          />
          <CustomInput
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
            label="Password"
            required
          />
          <CustomInput
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: bindActionCreators(signUp, dispatch),
});

export default connect(null, mapDispatchToProps)(SignUp);
