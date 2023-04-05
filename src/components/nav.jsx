import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
        </div>
        <div className="badge badge-pill badge-secondary">
          Total:- {this.props.getTotal()}
        </div>
      </nav>
    );
  }
}

export default NavBar;
