import React, { Component } from 'react';

import SideBar from './sidebar.js'
import Loop from '../containers/loop.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loopType: 'Loop-1'
    };

    this.onLoopSelect = this.onLoopSelect.bind(this);
  }

  onLoopSelect(loop) {
    this.setState(loop)
  }

  render() {
    return (
      <div id="main" className="container">
        <h1 className="text-center display-4">Loop Builder</h1>
        <hr className="my-4" />
        <span onClick={this.openNav}><i id="nav-toggle" className="fa fa-bars" aria-hidden="true"></i></span>
        <SideBar onLoopSelect={this.onLoopSelect}/>
        <Loop />
      </div>
    );
  }
}
