import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLoopType, setLoopStyle } from '../actions/index';
import OptionsMenu from './options-menu.js'


class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {menuOpen1: false,
                  menuOpen2: false,
                  menuOpen3: false,
                  menuOpen4: false};

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.setStyleAttribute = this.setStyleAttribute.bind(this);
  }

  toggleDropDown(currentMenu) {
    this.setState(Object.assign({}, this.state, currentMenu))
  }

  setStyleAttribute(newStyle) {
    this.props.setLoopStyle(newStyle)
  }

  render() {
    return (
      <div id="my-side-bar" className="side-bar">
        <span className="closebtn" onClick={this.props.closeNav}><i className="fa fa-times" aria-hidden="true"></i></span>
          <div onClick={() => this.toggleDropDown({menuOpen1: true})} onMouseLeave={() => this.toggleDropDown({menuOpen1: false})}>
            <span
              onClick={() => this.props.selectLoopType({loopType: 'loop1'})}
              data-toggle="collapse" href="#collapseExample"
              aria-expanded="false" aria-controls="collapseExample">
              Loop 1
            </span>
            <OptionsMenu menuOpen={this.state.menuOpen1} setStyleAttribute={this.setStyleAttribute} />
          </div>
          <div onClick={() => this.toggleDropDown({menuOpen2: true})} onMouseLeave={() => this.toggleDropDown({menuOpen2: false})}>
            <span
              onClick={() => this.props.selectLoopType({loopType: 'loop2'})}
              data-toggle="collapse" href="#collapseExample"
              aria-expanded="false" aria-controls="collapseExample">
              Loop 2
            </span>
            <OptionsMenu menuOpen={this.state.menuOpen2} setStyleAttribute={this.setStyleAttribute} />
          </div>
          <div onClick={() => this.toggleDropDown({menuOpen3: true})} onMouseLeave={() => this.toggleDropDown({menuOpen3: false})}>
            <span
              onClick={() => this.props.selectLoopType({loopType: 'loop3'})}
              data-toggle="collapse" href="#collapseExample"
              aria-expanded="false" aria-controls="collapseExample">
              Loop 3
            </span>
            <OptionsMenu menuOpen={this.state.menuOpen3} setStyleAttribute={this.setStyleAttribute} />
          </div>
          <div onClick={() => this.toggleDropDown({menuOpen4: true})} onMouseLeave={() => this.toggleDropDown({menuOpen4: false})}>
            <span
              onClick={() => this.props.selectLoopType({loopType: 'loop4'})}
              data-toggle="collapse" href="#collapseExample"
              aria-expanded="false" aria-controls="collapseExample">
              Loop 4
            </span>
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
