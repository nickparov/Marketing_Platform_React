import React, { Component } from 'react';

import { withRouter } from "react-router";

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import MainBanner from '../../components/MainBanner/MainBanner';

class Wrapper extends Component {
  

  render() {
    return (
      <>
          <Navigation />
              <MainBanner/>
              {this.props.children}
          <Footer />
      </>
    )
  } 
}
export default Wrapper;
