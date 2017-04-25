import React, { Component } from 'react';

export default (props) => {

    const loopType = props.loopType
    const loopStyle = props.loopStyle

    return (
      <div id="block_{{ current_block.id }}" className={loopType.column}>
        <div className={`${loopType.card} ${loopStyle.backgroundColor}`}>
          <div className={loopType.innerDiv}>
            <a className={`${loopType.anchor} ${loopStyle.alignment}`} href={props.data.link}>
              <img className={loopType.image} src={props.data.link} alt="Vido poster" />
              <button className={loopType.button}><i className="fa fa-play play-button"></i></button>
            </a>
            <div className={loopType.description}>
              <h4 className={`${loopType.descriptionTitle} ${loopStyle.title}`}>{props.data.title}</h4>
              <small><p className={`${loopType.descriptionText} ${loopStyle.text}`}>{props.data.description}</p></small>
            </div>
          </div>
        </div>
      </div>
    );
}
