import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import HomePage from "./components/templates/HomePage";
import ShopPage from "./components/templates/ShopPage";
import CheckoutPage from "./components/templates/CheckoutPage";
import Header from "./components/molecules/Header";
import SignInSignUp from "./components/templates/SignInSignUp";
import { selectCurrentUser } from "./redux/user/user.selectors";
// import { selectCollectionArray } from "./redux/shop/shop.selectors";
import "./App.css";
import { bindActionCreators } from "redux";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
    </div>
  );
};

/**
 * In case of Switch, if it gets a first match,
 * it renders that component and doesn't traverse other routes.
 * So we don't accidently render multiple components.
 */

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionItems: selectCollectionArray,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: bindActionCreators(checkUserSession, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
