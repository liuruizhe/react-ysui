import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = (props) => {
  const {
    title,
    desc,
  } = props;
  return (
    <div className="header">
      <h1 className="header-title">{title}</h1>
      <p className="header-desc">{desc}</p>
    </div>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
Header.defaultProps = {
  children: null,
};
export default Header;
