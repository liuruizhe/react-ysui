import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Mask from './Mask';

const Toast = (props) => {
  const { children, className, show, iconSrc, iconStyle } = props;

  const newProps = Object.assign({}, props, {
    className: classNames('Toast', className),
  });
  delete newProps.children;
  delete newProps.show;
  delete newProps.iconSrc;
  delete newProps.iconStyle;

  return (
    <div
      className="Toast-parent"
      style={{ display: show ? 'block' : 'none' }}
    >
      <Mask transparent />
      <div {...newProps}>
        {iconSrc &&
        <img className="Toast-icon" alt="" src={iconSrc} style={iconStyle} />}
        <span className="Toast-content">{children}</span>
      </div>
    </div>
  );
};

Toast.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  show: PropTypes.bool,
  iconSrc: PropTypes.string,
  iconStyle: PropTypes.shape({}),
};

Toast.defaultProps = {
  className: null,
  show: false,
  iconSrc: null,
  iconStyle: {},
};

export default Toast;
