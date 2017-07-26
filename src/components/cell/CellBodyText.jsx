import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CellBodyText = (props) => {
  const { children, className } = props;
  const newProps = Object.assign({}, props, {
    className: classNames({
      'ysui-cell__bd__text': true,
      [className]: className,
    }),
  });
  delete newProps.children;
  return (
    <div {...newProps}>{children}</div>
  );
};

CellBodyText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CellBodyText.defaultProps = {
  className: null,
};

export default CellBodyText;
