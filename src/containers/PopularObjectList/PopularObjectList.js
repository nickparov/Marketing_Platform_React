import React, { Component } from 'react';

import {
  Row,
  Container,
  Col
} from 'reactstrap';
import PopularObject from './PopularObject/PopularObject';
import PopularBanner from './PopularBanner/PopularBanner';

class PopularObjectList extends Component {

  state = {
    popular_objects: [
      { img: 'url1', country: 'Ukraine', company: "Netflix", id: 0 },
      { img: 'url2', country: 'France', company: "Servelat", id: 1 },
      { img: 'url3', country: 'Turkey', company: "Sadochok", id: 2 }
    ]
  }

  componentDidMount() {
    // make an api call to retrieve pop objects
  }

  render() {
    const popularObjects = this.state.popular_objects.map(({url, country, company, id}) => (
      <Col md='4' sm='12' className={'mx-auto select-animation'} key={id}>
        <PopularObject url={url} country={country} company={company} id={id} />
      </Col>
    ));

    return (
      <Container style={{backgroundColor: "#f7f7f7"}} className={'mt-2'}>
        <Row>
          { popularObjects }
        </Row>
        <PopularBanner/>
      </Container>
    )
  }
}

export default PopularObjectList;
