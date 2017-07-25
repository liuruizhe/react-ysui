import React from 'react';
import { Link } from 'react-router';
import imgSrc from '../../logo.png';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <Link className="footer__link" to="/home">
      <img src={imgSrc} alt="logo" />
      <span>YSUI</span>
    </Link>
  </div>
);

export default Footer;
