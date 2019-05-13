import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="main-nav-div">
        <input type="checkbox" id="hamburger" />
        <label className="menuicon" htmlFor="hamburger">
          <span />
        </label>
        <div className="menu">
          <ul>
            <li>
              <a href="http://www.google.com">home</a>
            </li>
            <li>
              <a href="http://www.google.com">blog</a>
            </li>
            <li>
              <a href="http://www.google.com">about</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
