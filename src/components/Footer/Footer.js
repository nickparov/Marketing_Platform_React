import React from 'react';

import { Container } from 'reactstrap';
 
export default function Footer() {
  return (
    <div className={'footer'}>
      <Container className={'d-flex justify-content-end font-alt'}>
        <p style={{padding: '0 5px', margin: 0}}>created by</p>
        <a href="https://github.com/nickparov">nickparov <i className="fab fa-github-square fa-lg"></i></a>
      </Container>
    </div>
  )
}
