import React from 'react';
import Header from '../header/header';
import { Button, ButtonArea }  from 'react-ysui';
import './buttons.scss';

const Buttons = () => (
  <div className="page">
    <Header
      title="Button"
      desc="按钮"
    />
    <Button>页面主按钮</Button>
    <Button selected>页面主按钮</Button>
    <Button disabled>页面主按钮</Button>
    <br />
    <Button type="warn">警告类按钮</Button>
    <Button type="warn" selected>警告类按钮</Button>
    <Button type="warn" disabled>警告类按钮</Button>
    <br />
    <Button type="default">次要按钮</Button>
    <Button type="default" selected>次要按钮</Button>
    <Button type="default" disabled>次要按钮</Button>
    <br />
    <ButtonArea>
      <Button>为什么这个按钮文字特别长</Button>
      <Button>为什么这个按钮文字特别长</Button>
    </ButtonArea>
    <ButtonArea>
      <Button>一个长按钮</Button>
      <Button selected className="fixWidth">短</Button>
    </ButtonArea>
    <br />
  </div>
);
export default Buttons;
