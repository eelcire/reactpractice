import React from 'react';
import '../styles/button.css';

export default function Button(props) {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.text}
    </div>
  );
}
