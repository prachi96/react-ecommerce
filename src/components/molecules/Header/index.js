import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import { auth } from "../../../firebase/firebase.utils";
import "./Header.scss";
import ShoppingCartIcon from "../ShoppingCartIcon";
import ShoppingCartDropdown from "../ShoppingCartDropdown";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { selectIsCartDropdownVisible } from "../../../redux/cart/cart.selectors";
import { signOut } from "../../../redux/user/user.actions";

const Header = ({ currentUser, isCartDropdownVisible, signOut }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options-container">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={signOut}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <ShoppingCartIcon />
    </div>
    {isCartDropdownVisible && <ShoppingCartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartDropdownVisible: selectIsCartDropdownVisible,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: bindActionCreators(signOut, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
