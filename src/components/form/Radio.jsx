import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Radio = (props) => {
  const { className } = props;
  const newProps = Object.assign({}, props, {
    className: classNames('ysui-radio', className),
  });
  return (
    <input type="radio" {...newProps} />
  );
};

Radio.propTypes = {
  className: PropTypes.string,
};

Radio.defaultProps = {
  className: null,
};

export default Radio;
