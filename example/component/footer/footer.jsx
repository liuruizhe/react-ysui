import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import imgSrc from '../../logo.png';
import './footer.scss';

const Footer = ({ title }) => (
  <div className="footer">
    <Link className="footer__link" to="/home">
      <img src={imgSrc} alt="logo" />
      {title && <span>{title}</span>}
    </Link>
  </div>
);

Footer.propTypes = {
  title: PropTypes.string,
};

Footer.defaultProps = {
  title: '',
};

export default Footer;
