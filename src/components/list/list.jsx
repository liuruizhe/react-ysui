import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './list.scss';

const List = (props) => {
  const { type, title, des, hasArrow, className } = props;
  const cls = classNames({
    'ysui-list': true,
    'ysui-list-primary': type === 'primary',
    'ysui-list-selected': props.selected,
    [className]: className,
  });
  const otherProps = Object.assign({}, props);
  delete otherProps.type;
  delete otherProps.className;
  return (
    <div {...otherProps} className={cls}>
      <div className="ysui-list-title">{title}</div>
      <div className="ysui-list-desc">{des}</div>
      { hasArrow && <div className="ysui-list-arrow">111</div>}
    </div>
  );
};
List.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  des: PropTypes.string,
  hasArrow: PropTypes.bool,
  selected: PropTypes.bool,
  className: PropTypes.string,
};
List.defaultProps = {
  type: 'primary',
  title: null,
  des: null,
  hasArrow: null,
  selected: false,
  className: null,
};
export default List;
