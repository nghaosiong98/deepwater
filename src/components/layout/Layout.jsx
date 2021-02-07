import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout as AntLayout, Row, Col } from 'antd';
import { useLocation } from 'react-router-dom';
import NavBar, { menuItems } from '../navbar/navbar';
import { setPageIndex } from '../navbar/navbar.action';

const { Content, Footer } = AntLayout;

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
      <NavBar />
      <Content style={{ marginTop: 64 }}>
        { children }
      </Content>
      <Footer>
        <Row>
          <Col span={8}>
            <span>
              Created by
              {' '}
              <a href="https://www.linkedin.com/in/haosiongng/">HaoSiong Ng</a>
            </span>
          </Col>
          <Col span={8} offset={8} style={{ textAlign: 'right' }}>
            <span>
              <a href="mailto:nghaosiong98@gmail.com">Found a bug?</a>
            </span>
          </Col>
        </Row>
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
