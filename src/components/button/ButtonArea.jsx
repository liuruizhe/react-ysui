import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ButtonArea = (props) => {
  const { children, className, direction } = props;

  const newProps = Object.assign({}, props, {
    className: classNames({
      'ysui-btn-area': direction === 'vertical',
      'ysui-btn-area_inline': direction === 'horizontal',
      [className]: className,
    }),
  });
  delete newProps.children;
  delete newProps.direction;

  return (
    <div {...newProps}>{children}</div>
  );
};

ButtonArea.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /**
   * irection of Button Layout inside, Options: veritical, horizontal
   */
  direction: PropTypes.string,
};

ButtonArea.defaultProps = {
  className: null,
  direction: 'vertical',
};

export default ButtonArea;
