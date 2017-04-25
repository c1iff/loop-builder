import React, { Component } from 'react';


class OptionBar extends Component {

  render() {
    return (
      <div id="my-side-bar" className="side-bar" onClick={this.props.closeNav}>
        <span onClick={() => this.props.selectLoopType({loopType: 'loop1'})}>Loop 1</span>
      </div>
    );
  }
}
