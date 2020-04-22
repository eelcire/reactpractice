import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Library from './components/Library';
import Book from './components/Book';

export default class App extends Component {
  state = {
    item: null,
  };

  fetchInfo(item) {
    return item;
  }

  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Switch>
          <Route path="/library">
            <Library fetchInfo={this.fetchInfo} />
          </Route>
          <Route path="/:id" render={() => <Book someData="asdf" />}></Route>
        </Switch>
      </Router>
    );
  }
}
