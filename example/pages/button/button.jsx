import React from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import { Button, ButtonArea } from '../../../src';

const ButtonPage = () => (
  <div className="page">
    <Header title="Button" desc="按钮" />
    <div className="page_content page_spacing">
      <ButtonArea>
        <Button>页面主按钮</Button>
        <Button selected>页面主按钮</Button>
        <Button disabled>页面主按钮</Button>
      </ButtonArea>

      <ButtonArea>
        <Button type="warn">警告类按钮</Button>
        <Button type="warn" selected>警告类按钮</Button>
        <Button type="warn" disabled>警告类按钮</Button>
      </ButtonArea>

      <ButtonArea>
        <Button type="default">次要按钮</Button>
        <Button type="default" selected>次要按钮</Button>
        <Button type="default" disabled>次要按钮</Button>
      </ButtonArea>

      <ButtonArea>
        <Button type="default" size="small">次要按钮</Button>
        <Button type="default" size="small" selected>次要按钮</Button>
        <Button type="default" size="small" disabled>次要按钮</Button>
      </ButtonArea>

      <ButtonArea direction="horizontal">
        <Button>为什么这个按钮文字特别长</Button>
        <Button>为什么这个按钮文字特别长</Button>
      </ButtonArea>

      <ButtonArea direction="horizontal">
        <Button>一个长按钮</Button>
        <Button selected style={{ maxWidth: 70 }}>短</Button>
      </ButtonArea>
    </div>
    <Footer />
  </div>
);

export default ButtonPage;
