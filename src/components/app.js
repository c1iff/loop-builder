import React, { Component } from 'react';

import SideBar from './sidebar.js'
import Loop from '../containers/loop.js';

export default class App extends Component {

  openNav() {
    document.getElementById("my-side-bar").style.width = "250px";
  }

  closeNav() {
    document.getElementById("my-side-bar").style.width = "0";
  }

  render() {
    return (
      <div>
        <span onClick={this.openNav}><i id="nav-toggle" className="fa fa-bars" aria-hidden="true"></i></span>
        <SideBar closeNav={this.closeNav} />
        <Loop />
      </div>
    );
  }
}
