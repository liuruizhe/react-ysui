import React, { Component } from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import { Button, ButtonArea, Dialog } from '../../../src';

class DialogPage extends Component {
  constructor(props) {
    super(props);

    this.close = () => {
      this.setState({
        open1: false,
        open2: false,
        open3: false,
        open4: false,
      });
    };

    this.buttons1 = [{
      type: 'default',
      label: '取消',
      onClick: this.close,
    }, {
      type: 'primary',
      label: '确定',
      onClick: this.close,
    }];

    this.buttons2 = [{
      type: 'primary',
      label: '确定',
      onClick: this.close,
    }];

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
        <Header title="Dialog" desc="对话框" />
        <div className="page__content page__content_spacing">
          <ButtonArea>
            <Button onClick={() => { this.setState({ open1: true }); }}>Dialog样式一</Button>
            <Button onClick={() => { this.setState({ open2: true }); }}>Dialog样式二</Button>
            <Button onClick={() => { this.setState({ open3: true }); }}>Dialog样式三</Button>
            <Button onClick={() => { this.setState({ open4: true }); }}>Dialog样式四</Button>
          </ButtonArea>
        </div>

        <Dialog
          buttons={this.buttons1}
          show={this.state.open1}
        >弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</Dialog>
        <Dialog
          title="弹窗标题"
          buttons={this.buttons1}
          show={this.state.open2}
        >弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</Dialog>
        <Dialog
          buttons={this.buttons2}
          show={this.state.open3}
        >弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</Dialog>
        <Dialog
          title="弹窗标题"
          buttons={this.buttons2}
          show={this.state.open4}
        >弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</Dialog>

        <Footer title="YSUI" />
      </div>
    );
  }
}

export default DialogPage;
