import React from 'react';
// noinspection NpmUsedModulesInstalled
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import 'ysui';
import HomePage from './pages/home/home';
import ButtonPage from './pages/button/button';
import ListPage from './pages/list/list';
import './app.scss';

const App = ({ children }) => (
  <div>{children}</div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/home" />
      <Route path="home" component={HomePage} />
      <Route path="button" component={ButtonPage} />
      <Route path="list" component={ListPage} />
      <Route path="input" component={ListPage} />
      <Route path="dialog" component={ListPage} />
      <Route path="toast" component={ListPage} />
    </Route>
  </Router>
), document.getElementById('root'));
