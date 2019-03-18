import React from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

export default function Wrapper(props) {
  return (
    <>
        <Navigation />
            {props.children}
        <Footer />
    </>
  )
}
