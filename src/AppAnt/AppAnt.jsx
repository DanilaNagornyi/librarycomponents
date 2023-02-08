import React, {useState} from 'react';
import { Layout, Row, Col, Typography, Slider } from 'antd';
import s from './AppAnt.module.css';
import Table from '../Table/Table';
import StComponents from "../StyledComponents/StComponents";
import styled from 'styled-components';
import cn from 'classnames';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const Styled = styled.div`
  .header,
  .footer {
    background-color: cadetblue;
    display: flex;
    align-items: center;
    &:hover {
      color: white;
    }
  }
  .footer {
    padding-bottom: 40px;
  }
`
const AppAnt = () => {
  const [rows, setRows] = useState(3);

  return (
      <Styled>
      <Layout>
        <Header className={cn(s.header, 'header')}>
          Header
        </Header>
        <Content>
          <Row>
            <Col xs={24} md={{ span: 16, offset: 4}}>
              <Slider min={1} max={100} defaultValue={rows} onChange={setRows} />
              <Title>Количество покемонов</Title>
              <Table rows={rows} />
              {/*  <StComponents />*/}
            </Col>
          </Row>
        </Content>
        <Footer className="footer">
          Footer
        </Footer>
      </Layout>
      </Styled>
  );
};

export default AppAnt;