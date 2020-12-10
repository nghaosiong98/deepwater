import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import TwoLeafImage from '../../images/two-leaves.svg';
import './home.css';

const home = () => (
  <div className="hero">
    <span>
      <img src={TwoLeafImage} alt="twoLeafs" />
      <h1>Upload. Predict. Save the lakes.</h1>
      <Button><Link to="/upload">Upload Now</Link></Button>
    </span>
  </div>
);

export default home;
