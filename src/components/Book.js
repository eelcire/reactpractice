import React, { Component } from 'react';

export class Book extends Component {
  render() {
    return <div>{this.props.itemBody}</div>;
  }
}

export default Book;
