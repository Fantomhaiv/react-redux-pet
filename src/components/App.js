import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import NotFound from './routes/NotFound';
import Articles from './routes/Articles';
import NewArticle from './routes/NewArticle';
import CommentsPage from './routes/CommentsPage';
import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';

import history from '../history';

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <h2>Menu</h2>
          <div><NavLink activeStyle={{ color: 'red' }} to="/counter">Counter</NavLink></div>
          <div><NavLink activeStyle={{ color: 'red' }} to="/filters">Filters</NavLink></div>
          <div><NavLink activeStyle={{ color: 'red' }} to="/articles">Articles</NavLink></div>
          <div><NavLink activeStyle={{ color: 'red' }} to="/comments">Comments</NavLink></div>
          <UserForm />
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/filters" component={Filters} />
            <Route path="/articles/new" component={NewArticle} />
            <Route path="/articles" component={Articles} />
            <Route path="/comments/:page" component={CommentsPage} />
            <Redirect from="/comments" to="/comments/1" />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}
