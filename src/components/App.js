import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Menu</h2>
          <div><NavLink activeStyle={{ color: 'red' }} to="/counter">Counter</NavLink></div>
          <div><NavLink activeStyle={{ color: 'red' }} to="/filters">Filters</NavLink></div>
          <div><NavLink activeStyle={{ color: 'red' }} to="/articles">ArticleList</NavLink></div>
          <UserForm />
          <Route path="/counter" component={Counter} />
          <Route path="/filters" component={Filters} />
          <Route path="/articles" component={ArticleList} />
        </div>
      </Router>
    );
  }
}
