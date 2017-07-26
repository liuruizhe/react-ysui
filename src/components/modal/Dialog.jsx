import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Mask from './Mask';

const Dialog = (props) => {
  const { children, className, show, title, buttons } = props;

  const newProps = Object.assign({}, props, {
    className: classNames({
      'ysui-dialog': true,
      [className]: className,
    }),
  });
  delete newProps.children;
  delete newProps.show;
  delete newProps.title;
  delete newProps.buttons;

  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <Mask />
      <div {...newProps}>
        <div className="ysui-dialog__bd">
          {title &&
          <div className="ysui-dialog__title">{title}</div>}
          <div className="ysui-dialog__content">
            {children}
          </div>
        </div>
        <div className="ysui-dialog__ft">
          {buttons.map((action, idx) => {
            const { type, label } = action;
            const newAction = Object.assign({}, action, {
              className: classNames({
                'ysui-dialog__btn': true,
                'ysui-dialog__btn_default': type === 'default',
                'ysui-dialog__btn_primary': type === 'primary',
                [className]: action.className,
              }),
            });
            delete newAction.type;
            delete newAction.label;

            const id = action.id || `ysui-dialog__btn-id-${idx}`;
            return (
              <a key={id} {...newAction}>
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /**
   * to display the dialog
   */
  show: PropTypes.bool,
  /**
   * Title of dialog
   */
  title: PropTypes.string,
  /**
   * Object Arrays of buttons, `label`, `label` property is require
   */
  buttons: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
  })),
};

Dialog.defaultProps = {
  className: null,
  show: false,
  title: null,
  buttons: [],
};

export default Dialog;
