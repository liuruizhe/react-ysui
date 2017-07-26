import React from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import {
  Cells, CellsTitle, CellsTips,
  Cell, CellHeader, CellBody, CellFooter,
  CellBodyTitle, CellBodyText,
} from '../../../src';

const ListPage = () => (
  <div className="page">
    <Header title="List" desc="列表" />
    <div className="page__content">
      <CellsTitle>带说明的列表项</CellsTitle>
      <Cells>
        <Cell>
          <CellBody>开始时间</CellBody>
          <CellFooter explain>00:00</CellFooter>
        </Cell>
        <Cell>
          <CellBody>结束时间</CellBody>
          <CellFooter explain>00:00(第二天)</CellFooter>
        </Cell>
        <Cell>
          <CellBody>结束时间开始时间结束时间开始时间</CellBody>
          <CellFooter explain>00:00-----00:00(第二天)</CellFooter>
        </Cell>
      </Cells>
      <CellsTips>Tips</CellsTips>

      <CellsTitle>带多行说明的列表项</CellsTitle>
      <Cells>
        <Cell component="a" access>
          <CellBody multiLine>
            <CellBodyTitle>分享时段</CellBodyTitle>
            <CellBodyText>分享时段</CellBodyText>
          </CellBody>
          <CellFooter />
        </Cell>
        <Cell component="a" access>
          <CellBody multiLine>
            <CellBodyTitle>分享时段</CellBodyTitle>
            <CellBodyText>分享时段</CellBodyText>
          </CellBody>
          <CellFooter explain>说明</CellFooter>
        </Cell>
        <Cell component="a" access>
          <CellBody multiLine>
            <CellBodyTitle>分享时段分享时段分享时段分享时段分享时段分享时段分享时段</CellBodyTitle>
            <CellBodyText>分享时段分享时段分享时段分享时段分享时段分享时段分享时段</CellBodyText>
          </CellBody>
          <CellFooter />
        </Cell>
      </Cells>
      <CellsTips>Tips</CellsTips>

      <CellsTitle>带跳转的列表项</CellsTitle>
      <Cells>
        <Cell component="a" access>
          <CellBody>分享时段</CellBody>
          <CellFooter />
        </Cell>
        <Cell component="a" access>
          <CellBody>分享权限分享权限分享权限分享权限分享权限分享权限分享权限分享权限分享权限分享权限</CellBody>
          <CellFooter />
        </Cell>
        <Cell component="a" access>
          <CellBody>分享时段</CellBody>
          <CellFooter explain>凌晨</CellFooter>
        </Cell>
        <Cell component="a" access>
          <CellBody>分享时段分享时段分享时段分享时段分享时段分享时段分享时段分享时段分享时段分享时段分享时段</CellBody>
          <CellFooter explain>00:00-----00:00</CellFooter>
        </Cell>
      </Cells>
      <CellsTips>Tips</CellsTips>

      <CellsTitle>带图片的列表</CellsTitle>
      <Cells>
        <Cell>
          <CellHeader>
            <img src="" alt="alt" style={{ width: 112, height: 63, display: 'block' }} />
          </CellHeader>
          <CellBody multiLine>
            <CellBodyTitle>小二班</CellBodyTitle>
            <CellBodyText>每周三 12:00-14:00</CellBodyText>
            <CellBodyText>项目、项目</CellBodyText>
          </CellBody>
          <CellFooter />
        </Cell>
        <Cell component="a" access>
          <CellHeader>
            <img src="" alt="alt" style={{ width: 112, height: 63, display: 'block' }} />
          </CellHeader>
          <CellBody multiLine>
            <CellBodyTitle>小二班</CellBodyTitle>
            <CellBodyText>项目、项目</CellBodyText>
          </CellBody>
          <CellFooter />
        </Cell>
      </Cells>
      <CellsTips>Tips</CellsTips>
    </div>
    <Footer title="YSUI" />
  </div>
);

export default ListPage;
