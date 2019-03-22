import React from 'react';

import Btn from '../../components/UI/Btn/Btn';
import PopularObjectList from '../PopularObjectList/PopularObjectList';

const SearchSection = () => {
  return (
    <section id="services" className="section gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="section-title text-center">
              <h2 id="select_spy">Select Country</h2>
              <p>Select one of the countries on the list.</p>
              <div className="select-area mb-3" id="country_select">
                <select className="form-control" name="country_id">
                  <option value="none">None</option>
                  <option value="1">Turkey</option>
                  <option value="2">Ukraine</option>
                  <option value="3">France</option>
                </select>
              </div>    
              <div className="select-area mt-3" id="city_select">

              </div>  
              <div className="select-area mt-3" id="inst_select">
                
              </div> 

              <Btn>
                Search
              </Btn>
            </div>

          </div>
        </div> 
      <PopularObjectList />
      </div>
    </section>
  )
}


export default SearchSection;