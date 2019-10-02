import React, { Component } from 'react';
import banner from "./assets/banner.jpg"


class Header extends Component {
  render() {
    return (
      <header>
        <img className="img-responsive standard-logo col-lg-12" src={banner} alt="header cefen"></img>
      </header>
    );
  }
}

export default Header;
