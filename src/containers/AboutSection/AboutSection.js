import React, { Component } from 'react';

import { 
  Container,
  Row,
  Col
} from 'reactstrap';

import FeatureBox from '../../components/FeatureBox/FeatureBox';

import image from '../../assets/img/AboutSectionImg.jpg';

import Btn from '../../components/UI/Btn/Btn';

class AboutSection extends Component {
  render() {
    return (
      <section id="aboutus" className="section">
       <Container>
          <Row className="justify-content-center align-items-center">
            <Col md='6'>
              <div className="about-left m-b-30px-md">
                <h1 className="font-alt">About MIR</h1>
                <h2 className="font-alt">Lorem Ipsum is simply dummy text of the.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
                <p className="m-b-20px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                <Btn>
                  Read More...
                </Btn>
              </div> 
            </Col>
            <Col md='6'>
              <img src={image} title="image" alt="image" />
            </Col>
          </Row>
          <FeatureBox />
      </Container>
    </section>
    )
  }
}

export default AboutSection;
