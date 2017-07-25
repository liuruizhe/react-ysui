import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Cells = (props) => {
  const { children } = props;
  const newProps = Object.assign({}, props, {
    className: classNames('ysui-cells', props.className),
  });
  delete newProps.children;
  return (
    <div {...newProps}>
      {children}
    </div>
  );
};

Cells.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Cells.defaultProps = {
  className: '',
};

export default Cells;
