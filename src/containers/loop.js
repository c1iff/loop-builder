import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLoopData, setLoopStyle } from '../actions/index';

import LoopBlock from '../components/loop-block';



class Loop extends Component {
  constructor(props) {
    super(props);

    this.setStyleAttribute = this.setStyleAttribute.bind(this);
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

  setStyleAttribute(newStyle) {
    const newStyleState = this.props.loopStyle
    newStyleState[Object.keys(newStyle)[0]] = newStyle[Object.keys(newStyle)[0]]
    this.props.setLoopStyle(newStyleState)
    this.setState({})
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
  return bindActionCreators({ getLoopData, setLoopStyle }, dispatch);
}


export default connect(mapSateToProps, mapDispatchToProps)(Loop);
