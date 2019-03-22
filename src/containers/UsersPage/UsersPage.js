import React, { Component } from 'react';

import AboutSection from '../AboutSection/AboutSection';
import SearchSection from '../SearchSection/SearchSection';


class UsersPage extends Component {

  
  render() {
    return (
      <>
        <AboutSection />
        <SearchSection />
      </>
    );
  }
}

export default UsersPage;