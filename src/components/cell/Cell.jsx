import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Cell = (props) => {
  const { children, component, className, access, form, href, htmlFor } = props;

  let DefaultComponent = htmlFor ? 'label' : 'div';
  DefaultComponent = href ? 'a' : DefaultComponent;
  const CellComponent = component || DefaultComponent;

  const newProps = Object.assign({}, props, {
    className: classNames({
      'ysui-cell': true,
      'ysui-cell_access': access,
      'ysui-cell_label': CellComponent === 'label',
      'ysui-cell_form': form,
      [className]: className,
    }),
  });
  delete newProps.children;
  delete newProps.component;
  delete newProps.access;
  delete newProps.form;

  return (
    <CellComponent {...newProps}>
      {children}
    </CellComponent>
  );
};

Cell.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  access: PropTypes.bool,
  form: PropTypes.bool,
  href: PropTypes.string,
  htmlFor: PropTypes.string,
};

Cell.defaultProps = {
  component: null,
  className: null,
  access: false,
  form: false,
  href: null,
  htmlFor: null,
};

export default Cell;
