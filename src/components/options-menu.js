import React, { Component } from 'react';

export default (props) => {
  if (props.menuOpen === true) {
    return (
      <div className="collapse show" id="collapseExample">
        <span className="text-primary" onClick={() => props.setStyleAttribute({backgroundColor: 'bg-inverse'})}>Black Background</span>
        <span className="text-primary" onClick={() => props.setStyleAttribute({backgroundColor: ''})}>White Background</span>
        <span className="text-primary" onClick={() => props.setStyleAttribute({backgroundColor: 'bg-primary'})}>Blue Background</span>
        <span className="text-primary" onClick={() => props.setStyleAttribute({alignment: 'float-left'})}>Left Align</span>
        <span className="text-primary" onClick={() => props.setStyleAttribute({alignment: 'float-right'})}>Right Align</span>
        <span className="text-primary" onClick={() => props.setStyleAttribute({title: ''})}>Black Heading</span>
        <span className="text-primary" onClick={() => props.setStyleAttribute({title: 'text-white'})}>White Heading</span>
        <span className="text-primary" onClick={() => props.setStyleAttribute({text: 'text-muted'})}>Grey Text</span>
        <span className="text-primary" onClick={() => props.setStyleAttribute({text: 'text-white'})}>White Text</span>
      </div>
    );
  } else {
    return <div></div>
  }
}
