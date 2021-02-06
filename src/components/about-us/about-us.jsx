import React from 'react';
import { Image, Row, Col } from 'antd';
import UMLake from '../../images/um-lake.jpg';
import BukitSerindit from '../../images/bukit_serindit.jpg';
import './about-us.css';

const AboutUs = () => (
  <div className="flex-column">
    <div className="slogan">
      <h1>Upload. Predict. Save the lakes.</h1>
    </div>
    <Row align="middle">
      <Col md={11} xs={24}>
        <Image src={UMLake} alt="Lake" preview={false} width="100%" />
      </Col>
      <Col md={13} xs={24} className="descriptions">
        <h1>Author</h1>
        <p>
          HaoSiong Ng, a final year computer science undergraduate at University of Malaya.
        </p>
        <h1>Idea</h1>
        <p>
          The main idea of this website is to create a lake monitoring platform which is
          powered by Artificial Intelligence.
        </p>
      </Col>
    </Row>
    <Row align="middle">
      <Col md={13} xs={24} className="descriptions">
        <h1>Project</h1>
        <p>
          This website is part of my final year project. My final year project is vision-based
          eutrophication prediction using deep learning. This website is developed as a medium
          to deliver my deep learning model.
        </p>
        <h1>Contact Us</h1>
        <p>
          For further inqueries please contact
          {' '}
          <a href="mailto: zati@um.edu.my">zati@um.edu.my</a>
          {' '}
          or
          {' '}
          <a href="mailto: nghaosiong98@gmail.com">nghaosiong98@gmail.com</a>
        </p>
      </Col>
      <Col md={11} xs={24}>
        <Image src={BukitSerindit} alt="Lake" preview={false} width="100%" />
      </Col>
    </Row>
  </div>
);

export default AboutUs;
