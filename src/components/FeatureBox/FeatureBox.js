import React from 'react';

import { 
  Col,
  Row
} from 'reactstrap';

const FeatureBox = () => {
  return (
    <div className="about-feacher">
      <Row>
        <Col sm='12' md='4'>
          <div className="feature-box">
            <i className="icon ti-ruler-pencil"></i>
            <div className="feature-content">
              <h5>Development</h5>
              <p>Lorem Ipsum is simply text of the printing and typesetting industry.</p>
            </div>
          </div>
        </Col>

        <Col sm='12' md='4'>
          <div className="feature-box">
            <i className="icon ti-image"></i>
            <div className="feature-content">
              <h5>Graphic</h5>
              <p>Lorem Ipsum is simply text of the printing and typesetting industry.</p>
            </div>
          </div>
        </Col>

        <Col sm='12' md='4'>
          <div className="feature-box">
            <i className="icon ti-layout"></i>
            <div className="feature-content">
              <h5>Web Design</h5>
              <p>Lorem Ipsum is simply text of the printing and typesetting industry.</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default FeatureBox;

