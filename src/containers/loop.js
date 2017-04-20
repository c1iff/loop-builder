import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoopBlock from '../components/loop-block';

class Loop extends Component {
  renderLoop() {
    return this.props.loopData.map( (data) => {
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

function mapSateToProps(state) {
  return { loopData: state.loopData };
}


export default connect(mapSateToProps)(Loop);
