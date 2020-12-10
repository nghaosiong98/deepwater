import React from 'react';
import Proptypes from 'prop-types';
import { Layout as AntLayout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Layout.css';

const { Header, Content, Footer } = AntLayout;

const Layout = ({ children }) => (
  <AntLayout>
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/about">About US</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      { children }
    </Content>
    <Footer>
      <div className="footer-container">
        <span>
          Created by
          {' '}
          <a href="https://www.linkedin.com/in/haosiongng/">HaoSiong Ng</a>
        </span>
      </div>
    </Footer>
  </AntLayout>
);

Layout.propTypes = ({
  children: Proptypes.any,
});

export default Layout;
