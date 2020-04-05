import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/templates/HomePage";
import ShopPage from "./components/templates/ShopPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

/**
 * In case of Switch, if it gets a first match,
 * it renders that component and doesn't traverse other routes.
 * So we don't accidently render multiple components.
 */

export default App;
