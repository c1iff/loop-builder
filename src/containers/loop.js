import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLoopData } from '../actions/index';

import LoopBlock from '../components/loop-block';



class Loop extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.getLoopData()
  }

  renderLoop() {

    if (!this.props.loopType) {
      return (
        <div className="w-100">
          <h3 className="text-center">Select a loop type from the side bar</h3>
        </div>
      )
    } else {
      return this.props.loopData.map( (data) => {
        return <LoopBlock data={data} loopType={this.props.loopType} loopStyle={this.props.loopStyle} key={data.id} />
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
  return { loopData: state.loopData, loopType: state.loopType, loopStyle: state.loopStyle };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLoopData }, dispatch);
}


export default connect(mapSateToProps, mapDispatchToProps)(Loop);
