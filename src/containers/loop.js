import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoopBlock from '../components/loop-block';

class Loop extends Component {

  renderLoop() {

    if (!this.props.loopType) {
      return <h3>Select a loop type from the side bar</h3>
    } else {
      return this.props.loopData.map( (data) => {
        return <LoopBlock data={data} loopType={this.props.loopType} key={data.id} />
      })
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.renderLoop()}
        </div>
      </div>
    );
  }
}

function mapSateToProps(state) {
  return { loopData: state.loopData, loopType: state.loopType };
}


export default connect(mapSateToProps)(Loop);
