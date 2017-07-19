import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './list_area.scss';

const ListArea = (props) => {
  const { children } = props;
  const cls = classNames({
    'ysui-list-area': true,
  });
  const otherProps = Object.assign({}, props);
  delete otherProps.children;
  return (
    <div className={cls}>{ children }</div>
  );
};
ListArea.propTypes = {
  children: PropTypes.node.isRequired,
};
ListArea.defaultProps = {
};
export default ListArea;
