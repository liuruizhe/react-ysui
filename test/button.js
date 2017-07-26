import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import { Button, ButtonArea } from '../src/index';

describe('<ButtonArea></ButtonArea>', () => {
  ['veritical', 'horizontal'].forEach((direction) => {
    describe(`<ButtonArea direction="${direction}">ok</ButtonArea>`, () => {
      const wrapper = shallow(<ButtonArea direction={direction}>ok</ButtonArea>);

      it('should have class with "ysui-btn-area" when vertical', () => {
        if (direction === 'vertical') {
          assert(wrapper.hasClass('ysui-btn-area'));
        }
      });

      it('should have class with "ysui-btn-area_inline" when horizontal', () => {
        if (direction === 'horizontal') {
          assert(wrapper.hasClass('ysui-btn-area_inline'));
        }
      });
    });
  });
});

describe('<Button></Button>', () => {
  ['primary', 'default', 'warn'].forEach((type) => {
    ['normal', 'small'].forEach((size) => {
      [true, false].forEach((selected) => {
        [true, false].forEach((disabled) => {
          [true, false].forEach((isHyperLink) => {
            [undefined, null, '', 'custom_class'].forEach((clazz) => {
              describe(`<Button type="${type}" size="${size}" selected="${selected}" disabled="${disabled}" href="${isHyperLink}" className="${clazz}"></Button>`, () => {
                const label = 'ok';
                const href = 'https://www.baidu.com';
                let wrapper;
                if (isHyperLink) {
                  wrapper = shallow(<Button
                    type={type}
                    size={size}
                    selected={disabled}
                    disabled={disabled}
                    href={href}
                    className={clazz}
                  >{label}</Button>);
                } else {
                  wrapper = shallow(<Button
                    type={type}
                    size={size}
                    selected={disabled}
                    disabled={disabled}
                    className={clazz}
                  >{label}</Button>);
                }

                it('should render be a button without `href` attribute', () => {
                  if (!isHyperLink) {
                    assert(wrapper.type() === 'div');
                  }
                });

                it('should render be a `a` with `href` attribute', () => {
                  if (isHyperLink) {
                    assert(wrapper.type() === 'a');
                    assert(wrapper.prop('href') === href);
                  }
                });

                it(`should have class with "ysui-btn" & ysui-btn_${type}`, () => {
                  assert(wrapper.hasClass('ysui-btn'));
                  assert(wrapper.hasClass(`ysui-btn_${type}`));
                });


                it('should have class with "ysui-btn_small" when size is "small"', () => {
                  if (size === 'small') {
                    assert(wrapper.hasClass('ysui-btn_small'));
                  } else {
                    assert(!wrapper.hasClass('ysui-btn_small'));
                  }
                });

                it('should have class with "ysui-btn_disabled" and "disabled" attribute when disabled is true', () => {
                  if (disabled) {
                    assert(wrapper.hasClass('ysui-btn_disabled'));
                    assert(wrapper.prop('disabled'));
                  } else {
                    assert(!wrapper.hasClass('ysui-btn_disabled'));
                    assert(!wrapper.prop('disabled'));
                  }
                });

                it(`should have custom class name ${clazz}`, () => {
                  if (clazz) {
                    assert(wrapper.hasClass(`${clazz}`));
                  }
                });

                it(`should have text ${label}`, () => {
                  assert(wrapper.text() === label);
                });
              });
            });
          });
        });
      });
    });
  });
});
