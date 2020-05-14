import React, { Component } from "react";
import Directory from "../../organisms/Directory";
import "./HomePage.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Directory />
      </div>
    );
  }
}

export default HomePage;
