import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLoopType, setLoopStyle } from '../actions/index';
import OptionsMenu from './options-menu.js'


class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      menuOpen1: false,
      menuOpen2: false,
      menuOpen3: false,
      menuOpen4: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.setStyleAttribute = this.setStyleAttribute.bind(this);
  }

  toggleNav() {
    this.setState(Object.assign({}, this.state, {navOpen: !this.state.navOpen}))
  }

  toggleDropDown(currentMenu) {
    this.setState(Object.assign({}, this.state, currentMenu))
  }

  setStyleAttribute(newStyle) {
    this.props.setLoopStyle(newStyle)
  }

  render() {
    return (
      <div>
        <span onClick={() => this.toggleNav()}><i id="nav-toggle" className="fa fa-bars" aria-hidden="true"></i></span>
        <div className={(this.state.navOpen ? "side-bar nav-open" : "side-bar")} id="my-side-bar">
          <span className="closebtn" onClick={() => this.toggleNav()}><i className="fa fa-times" aria-hidden="true"></i></span>
          <div onClick={() => this.toggleDropDown((this.state.menuOpen1 ? {menuOpen1: false} : {menuOpen1: true}))}>
            <span onClick={() => this.props.selectLoopType({loopType: 'loop1'})} className="menu-item">
              Loop 1 <i className={(this.state.menuOpen1 ? "fa fa-chevron-down ml-3" : "fa fa-chevron-right ml-3")} aria-hidden="true"></i>
            </span>
          </div>
          <OptionsMenu menuOpen={this.state.menuOpen1} setStyleAttribute={this.setStyleAttribute} />
          <div onClick={() => this.toggleDropDown((this.state.menuOpen2 ? {menuOpen2: false} : {menuOpen2: true}))}>
            <span onClick={() => this.props.selectLoopType({loopType: 'loop2'})} className="menu-item">
              Loop 2 <i className={(this.state.menuOpen2 ? "fa fa-chevron-down ml-3" : "fa fa-chevron-right ml-3")} aria-hidden="true"></i>
            </span>
          </div>
          <OptionsMenu menuOpen={this.state.menuOpen2} setStyleAttribute={this.setStyleAttribute} />
          <div onClick={() => this.toggleDropDown((this.state.menuOpen3 ? {menuOpen3: false} : {menuOpen3: true}))}>
            <span onClick={() => this.props.selectLoopType({loopType: 'loop3'})} className="menu-item">
              Loop 3 <i className={(this.state.menuOpen3 ? "fa fa-chevron-down ml-3" : "fa fa-chevron-right ml-3")} aria-hidden="true"></i>
            </span>
          </div>
          <OptionsMenu menuOpen={this.state.menuOpen3} setStyleAttribute={this.setStyleAttribute} />
          <div onClick={() => this.toggleDropDown((this.state.menuOpen4 ? {menuOpen4: false} : {menuOpen4: true}))}>
            <span onClick={() => this.props.selectLoopType({loopType: 'loop4'})} className="menu-item">
              Loop 4 <i className={(this.state.menuOpen4 ? "fa fa-chevron-down ml-3" : "fa fa-chevron-right ml-3")} aria-hidden="true"></i>
            </span>
          </div>
          <OptionsMenu menuOpen={this.state.menuOpen4} setStyleAttribute={this.setStyleAttribute} />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectLoopType, setLoopStyle }, dispatch);
}

export default connect(null, mapDispatchToProps)(SideBar);
