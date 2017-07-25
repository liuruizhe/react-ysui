import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Mask from './Mask';

const Dialog = (props) => {
  const { children, className, show, title, buttons } = props;

  const newProps = Object.assign({}, props, {
    className: classNames('Dialog', className),
  });
  delete newProps.children;
  delete newProps.show;
  delete newProps.title;
  delete newProps.buttons;

  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <Mask />
      <div {...newProps}>
        { title &&
        <div className="Dialog-header">
          <span className="Dialog-title">{title}</span>
        </div>}
        <div className="Dialog-body">
          {children}
        </div>
        <div className="Dialog-footer">
          {buttons.map((action, idx) => {
            const { cls, type, label } = action;
            const newAction = Object.assign({}, action, {
              className: classNames('Dialog-btn', {
                'Dialog-btn-default': type === 'default',
                'Dialog-btn-primary': type === 'primary',
              }, cls),
            });
            delete newAction.type;
            delete newAction.label;

            const id = `Dialog-btn-id-${idx}`;
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
  show: PropTypes.bool,
  title: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    cls: PropTypes.string,
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
