import React, { Component } from 'react';

export default class LoopBlock extends Component {
  render() {
    return (
      <div id="block_{{ current_block.id }}" className="col-md-4 col-lg-3">
        <div className="card">
          <a className="video-thumbnail img-fluid" href="#">
            <img className="img-fluid" src={this.props.data.link} alt="Vido poster" />
            <button className="thumbnail-play-button"><i className="fa fa-play play-button"></i></button>
          </a>
          <div className="py-1">
            <h4 className="card-title">{this.props.data.title}</h4>
            <small><p className="card-text text-muted">{this.props.data.description}</p></small>
          </div>
          <a href="#" className="btn btn-outline-warning">More Info</a>
        </div>
      </div>
    );
  }
}
