import React, { Component } from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import { Button, ButtonArea, Dialog } from '../../../src';

class DialogPage extends Component {
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
        <Header title="Dialog" desc="对话框" />
        <div className="page__content page__content_spacing">
          <ButtonArea>
            <Button onClick={() => { this.setState({ open1: true }); }}>Dialog样式一</Button>
            <Button onClick={() => { this.setState({ open2: true }); }}>Dialog样式二</Button>
            <Button onClick={() => { this.setState({ open3: true }); }}>Dialog样式三</Button>
            <Button onClick={() => { this.setState({ open4: true }); }}>Dialog样式四</Button>
          </ButtonArea>
        </div>
        <Dialog show={this.state.open1}>dialog1</Dialog>
        <Dialog show={this.state.open2}>dialog2</Dialog>
        <Dialog show={this.state.open3}>dialog3</Dialog>
        <Dialog show={this.state.open4}>dialog4</Dialog>
        <Footer title="YSUI" />
      </div>
    );
  }
}

export default DialogPage;
