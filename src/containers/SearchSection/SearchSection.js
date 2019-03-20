import React from 'react';

import Btn from '../../components/UI/Btn/Btn';

export default function SearchSection() {
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
    <div id="hide_on_search">
        
        <div className="row mt-2">

                      <div className="col-4 mx-auto select-animation">
              <a href="objects/view/1" style="text-decoration: none; color: #212529;">
                <div className="team-box">
                  <div className="team-img">
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX21584383.jpg" title="" alt="" />
                  </div>
                  <div className="team-info">
                    <h4 className="font-alt">Turkey</h4>
                    <span>Sadochok</span>
                  </div>
                </div>
              </a>
            </div>
                      <div className="col-4 mx-auto select-animation">
              <a href="objects/view/2" style="text-decoration: none; color: #212529;">
                <div className="team-box">
                  <div className="team-img">
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX21584383.jpg" title="" alt="" />
                  </div>
                  <div className="team-info">
                    <h4 className="font-alt">Ukraine</h4>
                    <span>Netflix</span>
                  </div>
                </div>
              </a>
            </div>
                      <div className="col-4 mx-auto select-animation">
              <a href="objects/view/3" style="text-decoration: none; color: #212529;">
                <div className="team-box">
                  <div className="team-img">
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX21584383.jpg" title="" alt="" />
                  </div>
                  <div className="team-info">
                    <h4 className="font-alt">France</h4>
                    <span>Servelat</span>
                  </div>
                </div>
              </a>
            </div>
                     
          </div>
            <div className="text-center">
              <p className="font-alt-custom-heading cstm-background"><i className="flash_animation fas fa-exclamation"></i> Most Popular Objects <i className="flash_animation fas fa-exclamation"></i></p>
            </div>  
          
        </div> 
      </div>
    </section>
  )
}
