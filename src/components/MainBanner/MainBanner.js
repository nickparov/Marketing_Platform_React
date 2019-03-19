import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import BannerBtns from '../BannerBtns/BannerBtns.js';

// assets
import bg_image from '../../assets/img/banner.jpg';

// reactstrap
import {
    Container,
    Row,
    Col
} from 'reactstrap';

class MainBanner extends Component {

  render() {
    let caption = null;
    let btns = null;

    if(this.props.location.pathname.includes('partners')) {
      caption = "Welcome to the partners page, take a look at our rules:";
      btns = <BannerBtns page="partners"/>;
    } else {
      caption = "Welcome to the users page!";
      btns = <BannerBtns page="users"/>;
    }

    return (
         <section id="home" className="home-banner" style={{backgroundImage: `url(${bg_image})`}}>
           <Container>
                <Row className='justify-content-center full-screen'>    
                    <Col md="10">
                        <div className="home-text-center text-center feature-box-02">
                            <h1 className="font-alt">Company</h1>
                            <h3>{ caption }</h3>
                            { btns }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
  }
}

export default withRouter(MainBanner);
