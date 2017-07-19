import React from 'react';
import Header from '../header/header';
import { List } from 'react-ysui';
import './lists.scss';

const Lists = () => (
  <div className="page">
    <Header
      title="List"
      desc="列表"
    />
    <List
      title="列表"
      des="描述"
      hasArrow
    />
    <br />
  </div>
);
export default Lists;
