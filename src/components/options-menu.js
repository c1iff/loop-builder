import React, { Component } from 'react';

export default (props) => {
  if (props.menuOpen === true) {
    return (
      <ul className="collapse show menu-item" id="collapseExample">
        <li className="text-menu-option" onClick={() => props.setStyleAttribute({backgroundColor: 'bg-inverse'})}>Black Background</li>
        <li className="text-menu-option" onClick={() => props.setStyleAttribute({backgroundColor: ''})}>White Background</li>
        <li className="text-menu-option" onClick={() => props.setStyleAttribute({backgroundColor: 'bg-primary'})}>Blue Background</li>
        <li className="text-menu-option" onClick={() => props.setStyleAttribute({alignment: 'float-left'})}>Left Align</li>
        <li className="text-menu-option" onClick={() => props.setStyleAttribute({alignment: 'float-right'})}>Right Align</li>
        <li className="text-menu-option" onClick={() => props.setStyleAttribute({title: ''})}>Black Heading</li>
        <li className="text-menu-option" onClick={() => props.setStyleAttribute({title: 'text-white'})}>White Heading</li>
        <li className="text-menu-option" onClick={() => props.setStyleAttribute({text: 'text-muted'})}>Grey Text</li>
        <li className="text-menu-option" onClick={() => props.setStyleAttribute({text: 'text-white'})}>White Text</li>
      </ul>
    );
  } else {
    return <div></div>
  }
}
