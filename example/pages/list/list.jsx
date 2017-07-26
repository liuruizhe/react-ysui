import React from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
// import { List } from '../../../src';

const ListPage = () => (
  <div className="page">
    <Header title="List" desc="列表" />
    <div className="page__content">List</div>
    <Footer title="YSUI" />
  </div>
);

export default ListPage;
