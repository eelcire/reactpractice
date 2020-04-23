import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Library extends Component {
  render() {
    const renderLibrary = !this.props.prevState
      ? null
      : this.props.prevState.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <Link
                  onClick={this.props.onButtonClick}
                  to={`/book/${item.id}`}
                >
                  {item.id}
                </Link>
              </td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
            </tr>
          );
        });

    console.log(this.props);
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{renderLibrary}</tbody>
      </table>
    );
  }
}

export default Library;
