import React from 'react';
import { Link } from 'react-router';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import {
  Cells, CellsTitle,
  Cell, CellBody, CellFooter,
} from '../../../src';

const HomePage = () => (
  <div className="page">
    <Header
      title="YSUI"
      desc="YSUI 是一套基础样式库，目的是使用户的使用感知更加统一。"
    />
    <div className="page_content">
      <CellsTitle>表单</CellsTitle>
      <Cells>
        <Cell component={Link} access to="/button">
          <CellBody>Button</CellBody>
          <CellFooter />
        </Cell>
        <Cell component={Link} access to="/list">
          <CellBody>List</CellBody>
          <CellFooter />
        </Cell>
        <Cell component={Link} access to="/input">
          <CellBody>Input</CellBody>
          <CellFooter />
        </Cell>
      </Cells>

      <CellsTitle>操作反馈</CellsTitle>
      <Cells>
        <Cell component={Link} access to="/dialog">
          <CellBody>Dialog</CellBody>
          <CellFooter />
        </Cell>
        <Cell component={Link} access to="/toast">
          <CellBody>Toast</CellBody>
          <CellFooter />
        </Cell>
      </Cells>
    </div>
    <Footer />
  </div>
);

export default HomePage;
