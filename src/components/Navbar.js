import React from "react";
import {Link, withRouter} from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="main-nav-div">
        <input type="checkbox" id="hamburger" />
        <label className="menuicon" htmlFor="hamburger">
          <span />
        </label>
        <div className="menu">
          <ul>
            <li>
              <Link  to='/' className="nav-links">Home</Link>
            </li>
            <li>
              <Link  to='/Trending' className="nav-links">Trending</Link>
            </li>
            <li>
              <Link  to='/Profile' className="nav-links">Profile</Link>
            </li>
            <li>
              <Link  to='/categories' className="nav-links">Categories</Link>
            </li>
            <li>
              <Link  to='/Favorited' className="nav-links">Favorited</Link>
            </li>
            <li>
              <Link  to='/About' className="nav-links">About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
}
export default withRouter(Navbar);
