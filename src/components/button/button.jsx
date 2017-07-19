import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './button.scss';

const Button = (props) => {
  const { component, type, children, className } = props;
  const Component = props.href ? 'a' : component;
  const cls = classNames({
    'ysui-btn': true,
    'ysui-btn-primary': type === 'primary',
    'ysui-btn-warn': type === 'warn',
    'ysui-btn-default': type === 'default',
    'ysui-btn-disabled': props.disabled,
    'ysui-btn-selected': props.selected,
    [className]: className,
  });
  const otherProps = Object.assign({}, props);
  delete otherProps.type;
  delete otherProps.children;
  delete otherProps.className;
  delete otherProps.component;
  return (
    <Component {...otherProps} className={cls}>{ children }</Component>
  );
};
Button.propTypes = {
  component: PropTypes.node,
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
};
Button.defaultProps = {
  component: 'div',
  type: 'primary',
  children: null,
  className: null,
  href: null,
  disabled: false,
  selected: false,
};
export default Button;
