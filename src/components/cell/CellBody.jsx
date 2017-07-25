import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CellBody = (props) => {
  const { children, className, multiLine } = props;
  const newProps = Object.assign({}, props, {
    className: classNames({
      'ysui-cell__bd': true,
      'ysui-cell__bd_multi-line': multiLine,
      [className]: className,
    }),
  });
  delete newProps.children;
  delete newProps.multiLine;
  return (
    <div {...newProps}>
      {children}
    </div>
  );
};

CellBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  multiLine: PropTypes.bool,
};

CellBody.defaultProps = {
  className: null,
  multiLine: false,
};

export default CellBody;
