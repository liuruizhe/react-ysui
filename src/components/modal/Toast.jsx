import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Mask from './Mask';

const Toast = (props) => {
  const { children, className, show, icon, iconStyle } = props;

  const newProps = Object.assign({}, props, {
    className: classNames({
      'ysui-toast': true,
      'ysui-toast_success': icon === 'success',
      'ysui-toast_fail': icon === 'fail',
      'ysui-toast_loading': icon === 'loading',
      [className]: className,
    }),
  });
  delete newProps.children;
  delete newProps.show;
  delete newProps.icon;
  delete newProps.iconStyle;

  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <Mask transparent />
      <div {...newProps}>
        <div className="ysui-toast__content">
          {icon &&
          <div className="ysui-toast__icon" style={iconStyle} />}
          <div className="ysui-toast__text">{children}</div>
        </div>
      </div>
    </div>
  );
};

Toast.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  show: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  iconStyle: PropTypes.shape({}),
};

Toast.defaultProps = {
  className: null,
  show: false,
  icon: false,
  iconStyle: {},
};

export default Toast;
