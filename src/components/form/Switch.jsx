import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Switch = (props) => {
  const { className } = props;
  const newProps = Object.assign({}, props, {
    className: classNames('ysui-switch', className),
  });
  return (
    <input type="checkbox" {...newProps} />
  );
};

Switch.propTypes = {
  className: PropTypes.string,
};

Switch.defaultProps = {
  className: null,
};

export default Switch;
