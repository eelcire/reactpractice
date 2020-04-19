import React, { Fragment } from 'react';
import '../styles/output.css';

export default function Output(props) {
  return <input class="output" value={props.input}></input>;
}
