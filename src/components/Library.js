import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default class Library extends Component {
  state = {
    data: [],
  };

  componentDidMount = async () => {
    await axios.get('http://jsonplaceholder.typicode.com/posts').then((res) => {
      this.setState({ data: res.data });
    });
  };

  onButtonClick = (e) => {
    const id = e.target.innerHTML;
    const res = this.state.data.filter((item) => item.id == id);
    return res[0].body;
  };

  render() {
    const { data } = this.state;

    const renderItems = () =>
      !data
        ? null
        : data.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <Link
                    to={{
                      pathname: `/book/${item.id}`,
                      aboutProps: {
                        name: 'hi',
                      },
                    }}
                  >
                    {item.id}
                  </Link>
                </td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
              </tr>
            );
          });

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    );
  }
}
