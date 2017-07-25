import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Mask = (props) => {
  const { className, transparent } = props;

  const newProps = Object.assign({}, props, {
    className: classNames('Mask', {
      'Mask-notransparent': !transparent,
    }, className),
  });
  delete newProps.transparent;

  return (<div {...newProps} />);
};

Mask.propTypes = {
  className: PropTypes.string,
  transparent: PropTypes.bool,
};

Mask.defaultProps = {
  className: null,
  transparent: false,
};

export default Mask;
