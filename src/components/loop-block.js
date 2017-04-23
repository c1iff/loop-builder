import React, { Component } from 'react';

export default (props) => {

    return (
      <div id="block_{{ current_block.id }}" className={props.loopType.column}>
        <div className={props.loopType.card}>
          <div className={props.loopType.innerDiv}>
            <a className={props.loopType.anchor} href={props.data.link}>
              <img className={props.loopType.image} src={props.data.link} alt="Vido poster" />
              <button className={props.loopType.button}><i className="fa fa-play play-button"></i></button>
            </a>
            <div className={props.loopType.description}>
              <h4 className={props.loopType.descriptionTitle}>{props.data.title}</h4>
              <small><p className={props.loopType.descriptionText}>{props.data.description}</p></small>
            </div>
          </div>
          <div className={props.loopType.customContent[0]}>{props.loopType.customContent[1]}</div>
        </div>
      </div>
    );

}
