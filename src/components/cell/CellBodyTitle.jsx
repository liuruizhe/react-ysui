import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CellBodyTitle = (props) => {
  const { children, className } = props;
  const newProps = Object.assign({}, props, {
    className: classNames({
      'ysui-cell__bd__title': true,
      [className]: className,
    }),
  });
  delete newProps.children;
  return (
    <div {...newProps}>{children}</div>
  );
};

CellBodyTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CellBodyTitle.defaultProps = {
  className: null,
};

export default CellBodyTitle;
