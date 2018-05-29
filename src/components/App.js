import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import NotFound from './routes/NotFound';
import Articles from './routes/Articles';
import NewArticle from './routes/NewArticle';
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
          <div><NavLink activeStyle={{ color: 'red' }} to="/articles">Articles</NavLink></div>
          <UserForm />
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/filters" component={Filters} />
            <Route path="/articles/new" component={NewArticle} />
            <Route path="/articles" component={Articles} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
