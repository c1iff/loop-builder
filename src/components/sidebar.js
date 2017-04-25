import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLoopType, setLoopStyle } from '../actions/index';
import OptionsMenu from './options-menu.js'


class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.setStyleAttribute = this.setStyleAttribute.bind(this);
  }

  toggleDropDown() {
    if (this.state.menuOpen === false) {
      this.setState({menuOpen: true});
    } else {
      this.setState({menuOpen: false});
    }
  }

  setStyleAttribute(newStyle) {

    this.props.setLoopStyle(newStyle)
    this.setState({})
  }

  render() {
    return (
      <div id="my-side-bar" className="side-bar" onClick={this.props.closeNav}>
        <span className="closebtn" ><i className="fa fa-times" aria-hidden="true"></i></span>
          <div onMouseEnter={this.toggleDropDown} onMouseLeave={this.toggleDropDown}>
            <span
              onClick={() => this.props.selectLoopType({loopType: 'loop1'})}
              data-toggle="collapse" href="#collapseExample"
              aria-expanded="false" aria-controls="collapseExample">
              Loop 1
            </span>
            <OptionsMenu menuOpen={this.state.menuOpen} setStyleAttribute={this.setStyleAttribute} />
          </div>


        <span onClick={() => this.props.selectLoopType({loopType: 'loop2'})}>Loop 2</span>
        <span onClick={() => this.props.selectLoopType({loopType: 'loop3'})}>Loop 3</span>
        <span onClick={() => this.props.selectLoopType({loopType: 'loop4'})}>Loop 4</span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectLoopType, setLoopStyle }, dispatch);
}

export default connect(null, mapDispatchToProps)(SideBar);
