import React from 'react';

import { Container } from 'reactstrap'

const SearchContainer = (props) => {
  return (
    <section id="services" className="section gray-bg">
        <Container>
          { props.children }
        </Container>
    </section>
  )
}

export default SearchContainer
