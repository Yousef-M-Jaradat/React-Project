import React from "react";

function Header() {
    
    const heroBlockStyle = {
        backgroundImage: "url(../../assets/img/1920x960/img1.jpg)",
      };   
  return(
<div>


<div class="hero-block hero-v7 bg-img-hero-bottom gradient-overlay-half-sapphire-gradient text-center z-index-2" style={heroBlockStyle}>
                <div class="container space-2 space-top-xl-10">
                  
                    <div class="py-wd-10 pb-5">
                      <h1 class="font-size-60 font-size-xs-30 text-white font-weight-bold">Boat Holidays Made Easy</h1>
                      <p class="font-size-20 font-weight-normal text-white">Rent a boat from the #1 yacht charter platform</p>
                    </div>
                   
                    <div class="space-top-lg-2 space-top-xl-3">
                                   <div class="card border-0">
                            <div class="card-body">
                                <form class="js-validate">
                                  <div class="row d-block nav-select d-lg-flex mb-lg-3 px-lg-3 px-2">
                                    <div class="col-sm-12 col-lg-3dot7 mb-4 mb-lg-0 ">
                                    
                                        <span class="d-block text-gray-1  font-weight-normal mb-0 text-left">Destination or Hotel Name</span>
                                        <select class="js-select selectpicker dropdown-select tab-dropdown col-12 pl-0 flaticon-pin-1 d-flex align-items-center text-primary font-weight-semi-bold" title="Where are you going?"
                                            data-style=""
                                            data-live-search="true"
                                            data-searchbox-classes="input-group-sm">
                                            <option class="border-bottom border-color-1" value="project1" data-content='
                                                <span class="d-flex align-items-center">
                                                    <span class="font-size-16">London, United Kingdom</span>
                                                </span>'>
                                                London, United Kingdom
                                            </option>
                                            <option class="border-bottom border-color-1" value="project2" data-content='
                                                <span class="d-flex align-items-center">
                                                    <span class="font-size-16">New York, United States</span>
                                                </span>'>
                                                New York, United States
                                            </option>
                                            <option  class="border-bottom border-color-1" value="project3" data-content='
                                                <span class="d-flex align-items-center">
                                                    <span class="font-size-16">New South Wales, Australia</span>
                                                </span>'>
                                                New South Wales, Australia
                                            </option>
                                            <option class="border-bottom border-color-1" value="project4" data-content='
                                                <span class="d-flex align-items-center">
                                                    <span class="font-size-16">Istanbul, Turkey</span>
                                                </span>'>
                                                Istanbul, Turkey
                                            </option>
                                            <option class="" value="project4" data-content='
                                                <span class="d-flex align-items-center">
                                                    <span class="font-size-16">Reykjavík, Iceland</span>
                                                </span>'>
                                                Reykjavík, Iceland
                                            </option>
                                        </select>
                                  
                                    </div>

                                    <div class="col-sm-12 col-lg-3dot6 mb-4 mb-lg-0 ">
                                   
                                        <span class="d-block text-gray-1 font-weight-normal mb-0 text-left">Check In - Out</span>
                                        <div class="js-focus-state">
                                            <div class="border-bottom border-width-2 border-color-1">
                                                <div id="datepickerWrapperFrom" class="u-datepicker input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="d-flex align-items-center mr-2">
                                                          <i class="flaticon-calendar text-primary font-weight-semi-bold"></i>
                                                        </span>
                                                    </div>
                                                    <input class="js-range-datepicker font-size-lg-16 shadow-none font-weight-bold form-control hero-form bg-transparent  border-0" type="date"
                                                         data-rp-wrapper="#datepickerWrapperFrom"
                                                         data-rp-type="range"
                                                         data-rp-date-format="M d / Y"
                                                         data-rp-default-date='["Jul 7 / 2020", "Aug 25 / 2020"]'></input>
                                                </div>
                                              
                                            </div>
                                        </div>
                                   
                                    </div>

                                    <div class="col-sm-12 col-lg-2dot8 mb-4 mb-lg-0">
                                  
                                        <span class="d-block text-gray-1 font-weight-normal mb-0 text-left">Boat Type</span>
                                        <div class="js-focus-state">
                                            <div class="d-flex border-bottom border-width-2 border-color-1">
                                                <i class="flaticon-backpack d-flex align-items-center mr-2 text-primary font-weight-semi-bold"></i>
                                                <select class="js-select selectpicker dropdown-select">
                                                    <option value="2 Rooms - 3 Guests" selected>sailboat</option>
                                                    <option value="2 Rooms - 3 Guests">2 Rooms - 4 Guests</option>
                                                    <option value="2 Rooms - 3 Guests">3 Rooms - 6 Guests</option>
                                                    <option value="2 Rooms - 3 Guests">1 Rooms - 2 Guests</option>
                                                </select>
                                            </div>
                                        </div>
                              
                                    </div>

                                    <div class="col-sm-12 col-lg-1dot8 align-self-lg-end text-md-right">
                                        <button type="submit" class="btn btn-primary text-white font-weight-semi-bold btn-md mb-xl-0 mb-lg-1 transition-3d-hover"><i class="flaticon-magnifying-glass font-size-20 mr-2"></i>Search</button>
                                    </div>
                                  </div>
                             
                                </form>
                            </div>
                        </div>
                  
                    </div>
                </div>
            </div>
    
</div>





  );  


};
export default Header;