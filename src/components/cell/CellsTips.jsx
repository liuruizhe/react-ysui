import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CellsTitle = (props) => {
  const { children } = props;
  const newProps = Object.assign({}, props, {
    className: classNames('ysui-cells__tips', props.className),
  });
  delete newProps.children;
  return (
    <div {...newProps}>
      {children}
    </div>
  );
};

CellsTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CellsTitle.defaultProps = {
  className: '',
};

export default CellsTitle;
