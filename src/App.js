import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Library from './components/Library';
import Book from './components/Book';

export default class App extends Component {
  state = {
    library: [],
    itembody: null,
    error: null,
  };
  componentDidMount = async () => {
    await axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.setState({ library: res.data });
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  onButtonClick = (e) => {
    const item = !e.target.innerHTML
      ? null
      : this.state.library.filter((item) => item.id == e.target.innerHTML);
    this.setState({ itembody: item[0].body });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {!this.state.error ? (
          <Router>
            <Switch>
              <Route exact path="/">
                <Library
                  onButtonClick={this.onButtonClick}
                  prevState={this.state.library}
                />
              </Route>
              <Route exact path="/book/:bookid">
                <Book itemBody={this.state.itembody} />
              </Route>
            </Switch>
          </Router>
        ) : (
          'Error, API not connected properly'
        )}
      </div>
    );
  }
}
