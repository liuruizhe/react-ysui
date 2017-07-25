import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CellHeader = (props) => {
  const { children } = props;
  const newProps = Object.assign({}, props, {
    className: classNames('ysui-cell__hd', props.className),
  });
  delete newProps.children;
  return (
    <div {...newProps}>
      {children}
    </div>
  );
};

CellHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CellHeader.defaultProps = {
  className: '',
};

export default CellHeader;
