import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLoopType } from '../actions/index';

class SideBar extends Component {

  render() {
    return (
      <div id="my-side-bar" className="side-bar">
        <span className="closebtn" onClick={this.props.closeNav}><i className="fa fa-times" aria-hidden="true"></i></span>
        <span onClick={() => this.props.selectLoopType({loopType: 'Loop1'})}>Loop 1</span>
        <span onClick={() => this.props.selectLoopType({loopType: 'Loop2'})}>Loop 2</span>
        <span onClick={() => this.props.selectLoopType({loopType: 'Loop3'})}>Loop 3</span>
        <span onClick={() => this.props.selectLoopType({loopType: 'Loop4'})}>Loop 4</span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectLoopType }, dispatch);
}

export default connect(null, mapDispatchToProps)(SideBar);
