import React, { Component } from 'react';

import { 
  Row,
  Col
} from 'reactstrap';

import Btn from '../../components/UI/Btn/Btn';
import PopularObjectList from '../PopularObjectList/PopularObjectList';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import SearchContainer from './SearchContainer/SearchContainer';
import SectionTitle from '../../components/UI/Section/SectionTitle';

class SearchSection extends Component {

  state = {
    countries: [],
    cities: [],
    institutions:[],
    SelectedOptions: {}
  }

  updateSelectedOptions(name, value) {
    let updatedSelectedOptions = {};
    const oldSelectedOptions = { ...this.state.SelectedOptions };
    
    switch(name) {
      case 'countryId': 
        updatedSelectedOptions = {[name]: value};
      break;
      case 'cityId':
        updatedSelectedOptions = {
          ...oldSelectedOptions,
          'city_id': value
        }

        delete updatedSelectedOptions.instId;
      break;  
      case 'instId':
        updatedSelectedOptions= {
          ...oldSelectedOptions,
          [name]: value
        }
      break;
      default: 

      break;
    }

    return updatedSelectedOptions;
  }

  componentDidMount = () => {
    // fetch countries
      axios.get('http://ciblog:8888/search/get_all_countries')
      .then(res => {
        this.setState({countries: res.data});
      })
      .catch(err => console.log(err));
  }

  countrySelectedHandler = (id) => {
    // make get request with corresponding id
      axios.get('http://ciblog:8888/search/get_cities', {
        params: {
          country_id: id
        }
      })
      .then(res => {
        this.setState({cities: res.data, SelectedOptions: this.updateSelectedOptions('countryId', id)});
      })
      .catch(err => console.log(err));
  }

  citySelectedHandler = (id) => {
    axios.get('http://ciblog:8888/search/get_institutions', {
      params: {
        city_id: id
      }
    })
    .then(res => {
        this.setState({institutions: res.data, SelectedOptions: this.updateSelectedOptions('cityId', id)});
    })
    .catch(err => console.log(err));
  }

  institutionSelectedHandler = (id) => {
    this.setState({SelectedOptions: this.updateSelectedOptions('instId', id)});
  }

  componentDidUpdate() {
    console.log(this.state.SelectedOptions);
  }

  render() {

    return (
      <SearchContainer>
          <Row className={'justify-content-center'}>
            <Col sm='12' md='10' lg='7'>

                  <SectionTitle>
                    <h2 id="select_spy">Select Country</h2>
                    <p>Select one of the countries on the list.</p>
                  </SectionTitle>

                  <SearchBar objects={this.state.countries} selected={this.countrySelectedHandler}/>
                  <SearchBar objects={this.state.cities} selected={this.citySelectedHandler}/>
                  <SearchBar objects={this.state.institutions} selected={this.institutionSelectedHandler}/>

                  <div style={{width: '100%', 'textAlign': 'center'}}>
                    <Btn>
                      Search
                    </Btn>
                  </div>
            </Col>
          </Row>

          <PopularObjectList />

      </SearchContainer>
    );
  };
}


export default SearchSection;