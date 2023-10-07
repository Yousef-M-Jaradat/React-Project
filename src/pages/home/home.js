import React from 'react';
import CounterComponent from "../home/counter";
import Category from "../home/category";
import Header from "../home/header";
function Home(){
return (
  <div>
    
    <Header />
            <div class="category-block category-v3 border-bottom border-color-8">
                <div class="container space-1 mt-3 mb-4">
                    <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-5">
                        <h2 class="section-title text-black font-size-30 font-weight-bold mb-0">Our Amenities</h2>
                    </div>
                    <div class="row mb-1">
                        <div class="col-md-4 col-xl-2">
                            <div class="mb-5 mb-xl-0">
                                <a class="d-block">
                                    <div class="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                                    <i class="flaticon-wifi-signal mr-3 text-brown-light font-size-60"></i>
                                        <h6 class="font-size-17 text-gray-3 text-center font-weight-bold">Wifi</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-2">
                            <div class="mb-5 mb-xl-0">
                                <a class="d-block" >
                                    <div class="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                                    <i class="flaticon-weightlifting mr-3 text-brown-light font-size-60"></i>
                                        <h6 class="font-size-17 text-gray-3 font-weight-bold">Fitness center</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-2">
                            <div class="mb-5 mb-xl-0">
                                <a class="d-block" >
                                    <div class="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                                    <i class="flaticon-hamburger mr-3 text-brown-light font-size-60"></i>
                                        <h6 class="font-size-17 text-gray-3 font-weight-bold">Kitchen</h6>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="col-md-4 col-xl-2">
                            <div class="mb-5 mb-md-0">
                                <a class="d-block" >
                                    <div class="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                                    <i class="flaticon-air-conditioner mr-3 text-brown-light font-size-60"></i>
                                        <h6 class="font-size-17 text-gray-3 font-weight-bold">Air Conditioning</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-2">
                            <div class="mb-5 mb-md-0">
                                <a class="d-block" >
                                    <div class="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                                    <i class="flaticon-phone-call mr-3 text-brown-light font-size-60"></i>
                                        <h6 class="font-size-17 text-gray-3 font-weight-bold">Telephone</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4 col-xl-2">
                            <div class="mb-0">
                                <a class="d-block" >
                                    <div class="color-hover py-4 px-3 bg-gray-4 rounded-xs text-center transition-3d-hover shadow-hover-2">
                                    <i class="flaticon-bathrobe mr-3 text-brown-light font-size-60"></i>
                                        <h6 class="font-size-17 text-gray-3 font-weight-bold">Bathrobes</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
    <CounterComponent />
    <Category />
            <div class="testimonial-block testimonial-v2 border-bottom border-color-8">
                <div class="container">
                    <div class="pt-7 pb-8">
                        <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-5">
                            <h2 class="section-title text-black font-size-30 font-weight-bold mb-0">Customer Reviews</h2>
                        </div>
                        <div class="js-slick-carousel u-slick u-slick--gutters-3" data-infinite="    true" data-autoplay="true" data-speed="3000" data-fade="true"
                        data-pagi-classes="text-center u-slick__pagination mb-0 mt-4"
                            data-responsive='[{
                            "breakpoint": 992,
                               "settings": {
                                 "slidesToShow": 1
                               }
                            }]'>

                            <div class="js-slide">
                                
                                <div class="d-flex justify-content-center mb-6">
                                    <div class="position-relative">
                                        <img class="img-fluid mx-auto" src="../../assets/img/137x137/img1.jpg" alt="Image-Descrition"></img>
                                        <div class="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                                            <figure id="quote7" class="svg-preloader">
                                                <img class="js-svg-injector" src="../../assets/svg/illustrations/quote2.svg" alt="SVG" data-parent="#quote7"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <p class="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">This is the 3rd time I’ve used Travelo website and telling you the truth their services are always realiable and it only takes few minutes to plan and finalize</p>
                                    <h6 class="font-size-17 font-weight-bold text-gray-6 mb-0">Jessica Brown</h6>
                                    <span class="text-blue-lighter-1 font-size-normal">client</span>
                                </div>
                               
                            </div>

                            <div class="js-slide">
                                
                                <div class="d-flex justify-content-center mb-6">
                                    <div class="position-relative">
                                        <img class="img-fluid mx-auto" src="../../assets/img/137x137/img2.jpg" alt="Image-Descrition"></img>
                                        <div class="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                                            <figure id="quote8" class="svg-preloader">
                                                <img class="js-svg-injector" src="../../assets/svg/illustrations/quote2.svg" alt="SVG" data-parent="#quote8"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <p class="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">This is the 3rd time I’ve used Travelo website and telling you the truth their services are always realiable and it only takes few minutes to plan and finalize</p>
                                    <h6 class="font-size-17 font-weight-bold text-gray-6 mb-0">Augusta Silva</h6>
                                    <span class="text-blue-lighter-1 font-size-normal">client</span>
                                </div>
                               
                            </div>

                            <div class="js-slide">
                                
                                <div class="d-flex justify-content-center mb-6">
                                    <div class="position-relative">
                                        <img class="img-fluid mx-auto" src="../../assets/img/137x137/img3.jpg" alt="Image-Descrition"></img>
                                        <div class="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                                            <figure id="quote9" class="svg-preloader">
                                                <img class="js-svg-injector" src="../../assets/svg/illustrations/quote2.svg" alt="SVG" data-parent="#quote9"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <p class="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">This is the 3rd time I’ve used Travelo website and telling you the truth their services are always realiable and it only takes few minutes to plan and finalize</p>
                                    <h6 class="font-size-17 font-weight-bold text-gray-6 mb-0">Ali Tufan</h6>
                                    <span class="text-blue-lighter-1 font-size-normal">client</span>
                                </div>
                               
                            </div>

                            <div class="js-slide">
                                
                                <div class="d-flex justify-content-center mb-6">
                                    <div class="position-relative">
                                        <img class="img-fluid mx-auto" src="../../assets/img/137x137/img1.jpg" alt="Image-Descrition"></img>
                                        <div class="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                                            <figure id="quote10" class="svg-preloader">
                                                <img class="js-svg-injector" src="../../assets/svg/illustrations/quote2.svg" alt="SVG" data-parent="#quote10"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <p class="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">This is the 3rd time I’ve used Travelo website and telling you the truth their services are always realiable and it only takes few minutes to plan and finalize</p>
                                    <h6 class="font-size-17 font-weight-bold text-gray-6 mb-0">Jessica Brown</h6>
                                    <span class="text-blue-lighter-1 font-size-normal">client</span>
                                </div>
                               
                            </div>

                            <div class="js-slide">
                                
                                <div class="d-flex justify-content-center mb-6">
                                    <div class="position-relative">
                                        <img class="img-fluid mx-auto" src="../../assets/img/137x137/img3.jpg" alt="Image-Descrition"></img>
                                        <div class="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                                            <figure id="quote11" class="svg-preloader">
                                                <img class="js-svg-injector" src="../../assets/svg/illustrations/quote2.svg" alt="SVG" data-parent="#quote11"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <p class="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">This is the 3rd time I’ve used Travelo website and telling you the truth their services are always realiable and it only takes few minutes to plan and finalize</p>
                                    <h6 class="font-size-17 font-weight-bold text-gray-6 mb-0">Ali Tufan</h6>
                                    <span class="text-blue-lighter-1 font-size-normal">client</span>
                                </div>
                               
                            </div>

                            <div class="js-slide">
                                
                                <div class="d-flex justify-content-center mb-6">
                                    <div class="position-relative">
                                        <img class="img-fluid mx-auto" src="../../assets/img/137x137/img2.jpg" alt="Image-Descrition"></img>
                                        <div class="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                                            <figure id="quote12" class="svg-preloader">
                                                <img class="js-svg-injector" src="../../assets/svg/illustrations/quote2.svg" alt="SVG" data-parent="#quote12"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <p class="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">This is the 3rd time I’ve used Travelo website and telling you the truth their services are always realiable and it only takes few minutes to plan and finalize</p>
                                    <h6 class="font-size-17 font-weight-bold text-gray-6 mb-0">Augusta Silva</h6>
                                    <span class="text-blue-lighter-1 font-size-normal">client</span>
                                </div>
                               
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
            





            <div class="recent-article-block recent-article-v1">
                <div class="container space-1 mt-3 mb-lg-4">
                    <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-5">
                        <h2 class="section-title text-black font-size-30 font-weight-bold mb-0">Recent Articles</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="mb-4 mb-lg-0 text-md-center text-lg-left">
                                <a class="d-block mb-3" href="../blog/blog-single.html">
                                    <img class="img-fluid rounded-xs w-100" src="../../assets/img/410x300/img1.jpg" alt="Image-Description"></img>
                                </a>
                                <h6 class="text-gray-6 font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1">
                                    <a href="../blog/blog-single.html">How to travel with paper map</a>
                                </h6>
                                <a class="text-gray-1" href="../blog/blog-single.html">
                                    <span>June 6, 2019</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="mb-4 mb-lg-0 text-md-center text-lg-left">
                                <a class="d-block mb-3" href="../blog/blog-single.html">
                                    <img class="img-fluid rounded-xs w-100" src="../../assets/img/410x300/img2.jpg" alt="Image-Description"></img>
                                </a>
                                <h6 class="text-gray-6 font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1">
                                    <a href="../blog/blog-single.html">Change your place and get fresh air</a>
                                </h6>
                                <a class="text-gray-1" href="../blog/blog-single.html">
                                    <span>June 6, 2019</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="mb-0 text-md-center text-lg-left">
                                <a class="d-block mb-3" href="../blog/blog-single.html">
                                    <img class="img-fluid rounded-xs w-100" src="../../assets/img/410x300/img3.jpg" alt="Image-Description"></img>
                                </a>
                                <h6 class="text-gray-6 font-size-17 pt-xl-1 font-weight-bold font-weight-bold mb-1">
                                    <a href="../blog/blog-single.html">Pityful a rethoric question ran</a>
                                </h6>
                                <a class="text-gray-1" href="../blog/blog-single.html">
                                    <span>June 6, 2019</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
  </div>
);

};

export default Home;
