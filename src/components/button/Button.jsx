import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { children, component, className, type, href } = props;

  const DefaultComponent = href ? 'a' : 'div';
  const ButtonComponent = component || DefaultComponent;

  const newProps = Object.assign({}, props, {
    className: classNames({
      'ysui-btn': true,
      'ysui-btn_primary': type === 'primary',
      'ysui-btn_warn': type === 'warn',
      'ysui-btn_default': type === 'default',
      'ysui-btn_disabled': props.disabled,
      'ysui-btn_selected': props.selected,
      'ysui-btn_small': props.size === 'small',
      [className]: className,
    }),
  });
  delete newProps.children;
  delete newProps.component;
  delete newProps.type;
  delete newProps.size;
  delete newProps.selected;

  return (
    <ButtonComponent {...newProps}>{children}</ButtonComponent>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  /**
   * primary, default, warn
   */
  type: PropTypes.string,
  /**
   * normal, small
   */
  size: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
};

Button.defaultProps = {
  component: null,
  className: null,
  type: 'primary',
  size: 'normal',
  selected: false,
  disabled: false,
  href: null,
};

export default Button;
