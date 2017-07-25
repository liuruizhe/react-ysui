import React, { Component } from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import { Button, ButtonArea } from '../../../src';

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
        <div className="page_content page_spacing">
          <ButtonArea>
            <Button onClick={() => { this.setState({ open1: true }); }}>Toast成功样式</Button>
            <Button onClick={() => { this.setState({ open2: true }); }}>Toast失败样式</Button>
            <Button onClick={() => { this.setState({ open3: true }); }}>Toast加载样式</Button>
            <Button onClick={() => { this.setState({ open4: true }); }}>Toast默认样式</Button>
          </ButtonArea>
        </div>
        {this.state.open1 && <div>toast1</div>}
        {this.state.open2 && <div>toast2</div>}
        {this.state.open3 && <div>toast3</div>}
        {this.state.open4 && <div>toast4</div>}
        <Footer />
      </div>
    );
  }
}

export default ToastPage;
