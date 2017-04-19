import React, { Component } from 'react';

import LoopBlock from './loop-block';

export default class Loop extends Component {
  renderLoop() {
    return this.props.data.map( (data) => {
      return <LoopBlock data={data} key={data.id} />
    })
  }
  render() {
    return (
      <div>
        <h3>Loop</h3>
        <div className="row">
          {this.renderLoop()}
        </div>
      </div>
    );
  }
}
