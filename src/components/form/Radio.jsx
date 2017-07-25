import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Radio = (props) => {
  const { className, id } = props;
  const newProps = Object.assign({}, props, {
    className: classNames('Radio', className),
  });
  return (
    <div>
      <input type="radio" {...newProps} />
      <label className="Radio-icon" htmlFor={id} />
    </div>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

Radio.defaultProps = {
  className: null,
  id: null,
};

export default Radio;
