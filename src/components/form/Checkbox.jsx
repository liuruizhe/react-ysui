import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Checkbox = (props) => {
  const { className, id } = props;
  const newProps = Object.assign({}, props, {
    className: classNames('Checkbox', className),
  });
  return (
    <div>
      <input type="checkbox" {...newProps} />
      <label className="Checkbox-icon" htmlFor={id} />
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

Checkbox.defaultProps = {
  className: null,
  id: null,
};

export default Checkbox;
