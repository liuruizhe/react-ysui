import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = (props) => {
  const { className, inputRefs } = props;
  const newProps = Object.assign({}, props, {
    className: classNames('Input', className),
  });
  delete newProps.inputRefs;
  return (
    <input ref={(c) => { inputRefs(c); }} {...newProps} />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  inputRefs: PropTypes.func,
};

Input.defaultProps = {
  className: null,
  inputRefs: () => {},
};

export default Input;
