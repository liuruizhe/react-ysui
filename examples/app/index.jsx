import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import PropTypes from 'prop-types';
import Buttons from './buttons/buttons';
import Lists from './lists/lists';
import Main from './main/main';
import './index.scss';

const Index = props => (
  <div>
    {props.children}
  </div>
);
Index.propTypes = {
  children: PropTypes.node,
};
Index.defaultProps = {
  children: null,
};
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRedirect to="/main" />
      <Route path="main" component={Main} />
      <Route path="buttons" component={Buttons} />
      <Route path="lists" component={Lists} />
    </Route>
  </Router>
), document.getElementById('app'));
