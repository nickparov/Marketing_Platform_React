import React, { Component } from 'react';

// assets
import bg_image from '../../assets/img/banner.jpg';

// reactstrap
import {
    Container,
    Row,
    Col
} from 'reactstrap';

export default class MainBanner extends Component {
  render() {
    return (
         <section id="home" className="home-banner" style={{backgroundImage: `url(${bg_image})`}}>
           <Container>
                <Row className='justify-content-center full-screen'>    
                    <Col md="10">
                        <div className="home-text-center text-center feature-box-02">
                            <h1 className="font-alt">Company</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
                            <div className="btn-bar">
                                <a href="index.html#services" className="btn btn-theme">Search</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
  }
}
