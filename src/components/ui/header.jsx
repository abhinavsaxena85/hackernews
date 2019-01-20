import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    selectedTab: ""
  };

  linkHighlight(value) {
    this.setState({ selectedTab: value });
  }

  render() {
    return (
      <div className="row header-container">
        <div>
          <span className="home-logo">
            <Link onClick={() => this.linkHighlight("")} to="/">
              Y
            </Link>
          </span>
          <Link
            style={
              this.state.selectedTab === "top"
                ? { color: "white" }
                : { color: "black" }
            }
            onClick={() => this.linkHighlight("top")}
            to="/news/top"
          >
            top
          </Link>
          <label>|</label>
          <Link
            style={
              this.state.selectedTab === "new"
                ? { color: "white" }
                : { color: "black" }
            }
            onClick={() => this.linkHighlight("new")}
            to="/news/new"
          >
            new
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
