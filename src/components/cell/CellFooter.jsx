import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CellFooter = (props) => {
  const { children, className, explain } = props;
  const newProps = Object.assign({}, props, {
    className: classNames({
      'ysui-cell__ft': true,
      'ysui-cell__ft_explain': explain,
      [className]: className,
    }),
  });
  delete newProps.children;
  delete newProps.explain;
  return (
    <div {...newProps}>
      {children}
    </div>
  );
};

CellFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  explain: PropTypes.bool,
};

CellFooter.defaultProps = {
  children: null,
  className: null,
  explain: false,
};

export default CellFooter;
