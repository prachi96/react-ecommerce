import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./App.css";
import HomePage from "./components/templates/HomePage";
import ShopPage from "./components/templates/ShopPage";
import Header from "./components/molecules/Header";
import SignInSignUp from "./components/templates/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./global/actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userReference = await createUserProfileDocument(userAuth);

        userReference.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // closes the subscription of onAuthStateChanged function
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: bindActionCreators(setCurrentUser, dispatch),
});

/**
 * In case of Switch, if it gets a first match,
 * it renders that component and doesn't traverse other routes.
 * So we don't accidently render multiple components.
 */

export default connect(null, mapDispatchToProps)(App);
