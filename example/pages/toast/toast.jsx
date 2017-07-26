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
            <Button
              onClick={() => {
                this.setState({ open1: true });
                setTimeout(() => {
                  this.setState({ open1: false });
                }, 2000);
              }}
            >Toast成功样式</Button>
            <Button
              onClick={() => {
                this.setState({ open2: true });
                setTimeout(() => {
                  this.setState({ open2: false });
                }, 2000);
              }}
            >Toast失败样式</Button>
            <Button
              onClick={() => {
                this.setState({ open3: true });
                setTimeout(() => {
                  this.setState({ open3: false });
                }, 2000);
              }}
            >Toast加载样式</Button>
            <Button
              onClick={() => {
                this.setState({ open4: true });
                setTimeout(() => {
                  this.setState({ open4: false });
                }, 2000);
              }}
            >Toast默认样式</Button>
          </ButtonArea>
        </div>
        <Toast show={this.state.open1} icon="success">保存成功</Toast>
        <Toast show={this.state.open2} icon="fail">保存失败，请重试</Toast>
        <Toast show={this.state.open3} icon="loading">保存中…</Toast>
        <Toast show={this.state.open4}>网速太慢了</Toast>
        <Footer title="YSUI" />
      </div>
    );
  }
}

export default ToastPage;
