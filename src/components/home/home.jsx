import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Row, Col, Image,
} from 'antd';
import TwoLeafImage from '../../images/two-leaves.svg';
import Landing1 from '../../images/landing1.jpg';
import Landing2 from '../../images/landing2.jpg';
import Landing3 from '../../images/landing3.jpg';
import Landing4 from '../../images/landing4.jpg';
import './home.css';

const home = () => (
  <>
    <div className="hero">
      <span>
        <img src={TwoLeafImage} alt="twoLeafs" />
        <h1>Upload. Predict. Save the lakes.</h1>
        <Button><Link to="/upload">Upload Now</Link></Button>
        <div className="description">
          <span>
            <h3>Upload any lake photo to help the community save the lakes.</h3>
            <p className="small-note">*Drone taken photos are recommended.</p>
          </span>
        </div>
      </span>

      <Row justify="center">
        <Col md={6} xs={12}>
          <Image src={Landing1} alt="L1" preview={false} />
        </Col>
        <Col md={6} xs={12}>
          <Image src={Landing2} alt="L2" preview={false} />
        </Col>
        <Col md={6} xs={12}>
          <Image src={Landing3} alt="L3" preview={false} />
        </Col>
        <Col md={6} xs={12}>
          <Image src={Landing4} alt="L4" preview={false} />
        </Col>
      </Row>
    </div>
  </>
);

export default home;
