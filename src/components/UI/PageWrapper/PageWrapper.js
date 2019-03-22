import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import Navigation from '../../Navigation/Navigation';
import MainBanner from '../../MainBanner/MainBanner';
import Footer from '../../Footer/Footer';

class PageWrapper extends Component {

    componentDidMount = () => {
      console.log(this.props);
    }
    

    render() {
      return (
        <>
            <Navigation />
                <MainBanner/>
                { this.props.children }
            <Footer />
        </>
      )
    } 

}

export default withRouter(PageWrapper);