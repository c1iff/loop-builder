import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLoopData, setLoopStyle } from '../actions/index';

import LoopBlock from '../components/loop-block';



class Loop extends Component {

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
        <button className="btn btn-outline-primary" onClick={() => this.props.setLoopStyle({backgroundColor: 'bg-inverse'})}>Black Background</button>
        <button className="btn btn-outline-primary" onClick={() => this.props.setLoopStyle({backgroundColor: ''})}>White Background</button>
        <button className="btn btn-outline-primary" onClick={() => this.props.setLoopStyle({backgroundColor: 'bg-primary'})}>Blue Background</button><br /><br />
        <button className="btn btn-outline-primary" onClick={() => this.props.setLoopStyle({backgroundColor: 'bg-primary', alignment: 'float-left'})}>Left Align</button>
        <button className="btn btn-outline-primary" onClick={() => this.props.setLoopStyle({backgroundColor: 'bg-primary', alignment: 'float-right'})}>Right Align</button>
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
