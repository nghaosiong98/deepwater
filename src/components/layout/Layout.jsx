import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout as AntLayout } from 'antd';
import { useLocation } from 'react-router-dom';
import NavBar, { menuItems } from '../header/header';
import { setPageIndex } from '../header/header.action';
import './Layout.css';

const { Header, Content, Footer } = AntLayout;

const Layout = ({ children, onSetPageIndex }) => {
  const location = useLocation();

  React.useEffect(() => {
    const currentPath = menuItems.filter((item) => item.path === location.pathname);
    if (currentPath.length > 0) {
      onSetPageIndex(currentPath[0].index.toString(10));
    }
  }, [location]);

  return (
    <AntLayout>
      <Header>
        <NavBar />
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
};

Layout.propTypes = ({
  children: Proptypes.any,
  onSetPageIndex: Proptypes.func,
});

const mapDispatchToProps = (dispatch) => ({
  onSetPageIndex: (index) => dispatch(setPageIndex(index)),
});

export default connect(null, mapDispatchToProps)(Layout);
