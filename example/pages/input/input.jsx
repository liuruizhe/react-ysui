import React from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import {
  Cells, CellsTitle, CellsTips,
  Cell, CellHeader, CellBody, CellFooter,
  CellBodyTitle, CellBodyText,
  Switch, Checkbox, Radio,
} from '../../../src';

const InputPage = () => (
  <div className="page">
    <Header title="Input" desc="表单输入" />
    <div className="page__content">
      <CellsTitle>单选列表项</CellsTitle>
      <Cells>
        <Cell component="label" form htmlFor="radio1">
          <CellBody multiLine>
            <CellBodyTitle>分享时段</CellBodyTitle>
            <CellBodyText>分享时段</CellBodyText>
          </CellBody>
          <CellFooter>
            <Radio name="radio1" id="radio1" defaultChecked="checked" />
          </CellFooter>
        </Cell>
        <Cell component="label" form htmlFor="radio2">
          <CellBody>分享时段</CellBody>
          <CellFooter>
            <Radio name="radio1" id="radio2" />
          </CellFooter>
        </Cell>
      </Cells>
      <CellsTips>Tips</CellsTips>

      <CellsTitle>复选列表项</CellsTitle>
      <Cells>
        <Cell component="label" form htmlFor="checkbox1">
          <CellHeader>
            <Checkbox name="checkbox1" id="checkbox1" />
          </CellHeader>
          <CellBody multiLine>
            <CellBodyTitle>分享时段</CellBodyTitle>
            <CellBodyText>分享时段</CellBodyText>
          </CellBody>
        </Cell>
        <Cell component="label" form htmlFor="checkbox2">
          <CellHeader>
            <Checkbox name="checkbox1" id="checkbox2" defaultChecked="checked" />
          </CellHeader>
          <CellBody>分享时段</CellBody>
        </Cell>
        <Cell component="label" form htmlFor="checkbox3">
          <CellHeader>
            <Checkbox name="checkbox1" id="checkbox3" defaultChecked="checked" />
            <img src="" alt="alt" style={{ width: 112, height: 63, display: 'inline-block', marginLeft: 6 }} />
          </CellHeader>
          <CellBody>分享时段</CellBody>
        </Cell>
      </Cells>
      <CellsTips>Tips</CellsTips>

      <CellsTitle>开关</CellsTitle>
      <Cells>
        <Cell form>
          <CellBody>分享时段</CellBody>
          <CellFooter component="label" htmlFor="switch1">
            <Switch name="switch1" id="switch1" />
          </CellFooter>
        </Cell>
        <Cell form>
          <CellBody multiLine>
            <CellBodyTitle>分享时段</CellBodyTitle>
            <CellBodyText>分享时段</CellBodyText>
          </CellBody>
          <CellFooter component="label" htmlFor="switch2">
            <Switch name="switch2" id="switch2" />
          </CellFooter>
        </Cell>
      </Cells>
      <CellsTips>Tips</CellsTips>
    </div>
    <Footer title="YSUI" />
  </div>
);

export default InputPage;
