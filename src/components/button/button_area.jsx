import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './button_area.scss';

const ButtonArea = (props) => {
  const { children } = props;
  const cls = classNames({
    'ysui-btn-area': true,
  });
  const otherProps = Object.assign({}, props);
  delete otherProps.children;
  return (
    <div className={cls}>{ children }</div>
  );
};
ButtonArea.propTypes = {
  children: PropTypes.node.isRequired,
};
ButtonArea.defaultProps = {
};
export default ButtonArea;
