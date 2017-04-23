import React, { Component } from 'react';

export default class LoopBlock2 extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="card-black">
          <div className="horizontal-card d-inline-block">
            <a className="video-thumbnail float-left w-25 mr-3" href="#">
              <img className="img-fluid" src={this.props.data.link} alt="Vido poster" />
              <button className="thumbnail-play-button"><i className="fa fa-play play-button"></i></button>
            </a>
            <div className="align-right py-1">
              <h4 className="card-title">{this.props.data.title}</h4>
              <small><p className="card-text text-muted">{this.props.data.description}</p></small>
            </div>
          </div>
        </div>
        <div className="section-line-center align-self-center mb-3"></div>
      </div>
    );
  }
}
