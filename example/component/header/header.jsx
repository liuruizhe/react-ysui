import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ title, desc }) => (
  <div className="header">
    <h1 className="header__title">{title}</h1>
    <p className="header__desc">{desc}</p>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  desc: '',
};

export default Header;
