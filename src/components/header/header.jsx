import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { setPageIndex } from './header.action';
import './header.css';

export const menuItems = [
  {
    label: 'Home',
    path: '/',
    index: 0,
  },
  {
    label: 'Upload',
    path: '/upload',
    index: 1,
  },
  {
    label: 'About Us',
    path: '/about',
    index: 2,
  },
];

const Header = ({ pageIndex, onSetPageIndex }) => (
  <Menu theme="dark" mode="horizontal" selectedKeys={[pageIndex]}>
    {menuItems.map((item) => (
      <Menu.Item
        key={item.index}
        onClick={() => onSetPageIndex(item.index.toString(10))}
      >
        <Link to={item.path}>{item.label}</Link>
      </Menu.Item>
    ))}
  </Menu>
);

Header.propTypes = ({
  pageIndex: PropTypes.number,
  onSetPageIndex: PropTypes.func,
});

const mapStateToProps = (state) => ({
  pageIndex: state.headerReducer.pageIndex,
});

const mapDispatchToProps = (dispatch) => ({
  onSetPageIndex: (index) => dispatch(setPageIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
