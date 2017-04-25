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
        <button className="btn btn-outline-primary" onClick={() => this.setStyleAttribute({backgroundColor: 'bg-inverse'})}>Black Background</button>
        <button className="btn btn-outline-primary" onClick={() => this.setStyleAttribute({backgroundColor: ''})}>White Background</button>
        <button className="btn btn-outline-primary" onClick={() => this.setStyleAttribute({backgroundColor: 'bg-primary'})}>Blue Background</button><br /><br />
        <button className="btn btn-outline-success" onClick={() => this.setStyleAttribute({alignment: 'float-left'})}>Left Align</button>
        <button className="btn btn-outline-success" onClick={() => this.setStyleAttribute({alignment: 'float-right'})}>Right Align</button><br /><br />
        <button className="btn btn-outline-danger" onClick={() => this.setStyleAttribute({title: ''})}>Black Heading</button>
        <button className="btn btn-outline-danger" onClick={() => this.setStyleAttribute({title: 'text-white'})}>White Heading</button><br /><br />
        <button className="btn btn-outline-secondary" onClick={() => this.setStyleAttribute({text: 'text-muted'})}>Grey Text</button>
        <button className="btn btn-outline-secondary" onClick={() => this.setStyleAttribute({text: 'text-white'})}>White Text</button><br /><br />
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
