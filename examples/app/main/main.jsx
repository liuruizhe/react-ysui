import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-ysui';
import Header from '../header/header';
import './main.scss';

const Main = () => (
  <div className="page">
    <Header
      title="YSUI"
      desc="YSUI 是一套基础样式库，目的是使用户的使用感知更加统一。"
    />
    <Link className="content-button" to="/buttons">
      <Button>按钮</Button>
    </Link>
  </div>
);
export default Main;
