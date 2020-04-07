import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/templates/HomePage";
import ShopPage from "./components/templates/ShopPage";
import Header from "./components/molecules/Header";
import SignInSignUp from "./components/templates/SignInSignUp";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // closes the subscription of onAuthStateChanged function
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

/**
 * In case of Switch, if it gets a first match,
 * it renders that component and doesn't traverse other routes.
 * So we don't accidently render multiple components.
 */

export default App;
