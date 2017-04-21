import React, { Component } from 'react';


export default class SideBar extends Component {

  render() {
    return (
      <div id="my-side-bar" className="side-bar">
        <span className="closebtn" onClick={this.props.closeNav}><i className="fa fa-times" aria-hidden="true"></i></span>
        <a href="#">Loop 1</a>
        <a href="#">Loop 2</a>
        <a href="#">Loop 3</a>
        <a href="#">Loop 4</a>
      </div>
    );
  }
}
