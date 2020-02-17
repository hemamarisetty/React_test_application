import React, { Component } from "react";
import './header.css';
class NavbarPage extends Component {

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid justify-content-start">
            <a className="navbar-brand" href="#"></a>
            <div className="container w-50 justify-content-lg-center justify-content-md-start">
              <div className="search-wrapper d-flex">
                <input type="text" className="search form-control" aria-label="Search"/> 
                <img className="search-icon" src="icons/search_icon.svg" alt="Search"/>
              </div>
            </div>
          </div>
        </nav>
        <div className="navbar-mini"></div>
      </div>
    );
  }
}

export default NavbarPage;