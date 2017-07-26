import React, { Component } from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import { Button, ButtonArea, Toast } from '../../../src';

class ToastPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open1: false,
      open2: false,
      open3: false,
      open4: false,
    };
  }

  render() {
    return (
      <div className="page">
        <Header title="Toast" desc="弱提示" />
        <div className="page__content page__content_spacing">
          <ButtonArea>
            <Button onClick={() => { this.setState({ open1: true }); }}>Toast成功样式</Button>
            <Button onClick={() => { this.setState({ open2: true }); }}>Toast失败样式</Button>
            <Button onClick={() => { this.setState({ open3: true }); }}>Toast加载样式</Button>
            <Button onClick={() => { this.setState({ open4: true }); }}>Toast默认样式</Button>
          </ButtonArea>
        </div>
        <Toast show={this.state.open1}>toast1</Toast>
        <Toast show={this.state.open2}>toast2</Toast>
        <Toast show={this.state.open3}>toast3</Toast>
        <Toast show={this.state.open4}>toast4</Toast>
        <Footer title="YSUI" />
      </div>
    );
  }
}

export default ToastPage;
