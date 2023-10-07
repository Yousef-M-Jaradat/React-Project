import React from 'react'
import img3 from "./boat1.jpg";
import img4 from "./boat1.jpg";
import img5 from "./boat2.jpg";
import img6 from "./boat3.jpg";
import img7 from "./boat4.jpg";


export default function Aboutus() {

const myStyle = {
  backgroundImage: `url(${img3})`,
};
const imagslider1 = {
  backgroundImage: `url(${img4})`,
};
const imagslider2 = {
  backgroundImage: `url(${img5})`,
};
const imagslider3 = {
  backgroundImage: `url(${img6})`,
};
const imagslider4 = {
  backgroundImage: `url(${img7})`,
};
const imagslider5 = {
  backgroundImage: `url(${img6})`,
};
const imagefluid1 = {
  backgroundImage: `url(${img3})`,
};
const imagefluid2 = {
  backgroundImage: `url(${img3})`,
};
const imagefluid3 = {
  backgroundImage: `url(${img3})`,
};
const imagefluid4 = {
  backgroundImage: `url(${img3})`,
};
const imagefluid5 = {
  backgroundImage: `url(${img3})`,
};
const imagefluid6 = {
  backgroundImage: `url(${img3})`,
};
const imagefluid7 = {
  backgroundImage: `url(${img3})`,
};
const imagefluid8 = {
  backgroundImage: `url(${img3})`,
};
const imagefluid9 = {
  backgroundImage: `url(${img3})`,
};
const imagefluid10 = {
  backgroundImage: `url(${img3})`,
};
const imagefluid11 = {
  backgroundImage: `url(${img3})`,
};
  return (
    <div>
      {/* <!-- ========== MAIN CONTENT ========== --> */}
      <main id="content">
        {/* <!-- Hero Section --> */}
        <div className="bg-img-hero text-center mb-1" style={{ backgroundImage: 'linear-gradient(rgba(41,124,187, 0.3), rgba(41,124,187, 0.3)) , url(../../assets/img/1920x600/img1.jpg)' }}>
          <div className="container space-top-xl-3 py-6 py-xl-0">
            <div className="row justify-content-center py-xl-4">
              <div className="py-xl-10 py-5">
                <h1 className="font-size-40 font-size-xs-30 text-white font-weight-bold mb-0">
                  About Us
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-no-gutter justify-content-center mb-0">
                    <li className="breadcrumb-item font-size-14">
                      {" "}
                      <a className="text-white" href="../home/index.html">
                        Home
                      </a>{" "}
                    </li>
                    <li
                      className="breadcrumb-item custom-breadcrumb-item font-size-14 text-white active"
                      aria-current="page"
                    >
                      About
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="slider border-bottom border-color-3">
          <div className="container space-1">
            <div className="w-md-80 w-lg-70 text-center mx-md-auto mb-5 mt-3">
              <h2 className="section-title text-black font-size-xs-28 font-weight-bold mb-0">
                We’re truely dedicated to make your travel experience as much
                simple and fun as possible!
              </h2>
            </div>
            <section className="w-lg-80 mx-auto mb-4">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="font-size-21 font-weight-bold text-center text-md-left ">
                    Our Story
                  </h2>
                  <p className="text-gray-1">
                    Bringing you a modern, comfortable, and connected travel
                    experience is one of our highest priorities and that’s why
                    we continuously try to improve your experience when you book
                    anything with us.
                  </p>
                </div>

                <div className="col-md-6">
                  <h2 className="font-size-21 font-weight-bold text-center text-md-left ">
                    Our mission
                  </h2>
                  <p className="text-gray-1">
                    We really appreciate and welcome any of suggstions you might
                    have for us, so feel free drop us line anytime.Air
                    conditioning, heating, desk, alarm clock, iPod docking
                    station can be found in selected guestrooms.
                  </p>
                </div>
              </div>
            </section>
            <div
              className="js-slick-carousel u-slick pb-2"
              data-arrows-classNamees="d-none d-lg-inline-block u-slick__arrow-classNameic u-slick__arrow-centered--y rounded-circle"
              data-arrow-left-classNamees="flaticon-back u-slick__arrow-classNameic-inner u-slick__arrow-classNameic-inner--left ml-lg-2 ml-xl-9"
              data-arrow-right-classNamees="flaticon-next u-slick__arrow-classNameic-inner u-slick__arrow-classNameic-inner--right mr-lg-2 mr-xl-9"
              data-pagi-classNamees="text-center u-slick__pagination mt-5"
            >
              <div
                className="js-slide bg-img-hero-center rounded-xs"
                style={imagslider1}
              >
                <div className="space-5"></div>
              </div>
              <div
                className="js-slide bg-img-hero-center rounded-xs"
                style={imagslider2}
              >
                <div className="space-5"></div>
              </div>
              <div
                className="js-slide bg-img-hero-center rounded-xs"
                style={imagslider3}
              >
                <div className="space-5"></div>
              </div>
              <div
                className="js-slide bg-img-hero-center rounded-xs"
                style={imagslider4}
              >
                <div className="space-5"></div>
              </div>
              <div
                className="js-slide bg-img-hero-center rounded-xs"
                style={imagslider5}
              >
                <div className="space-5"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Slider --> */}
        {/* <!-- Features Section --> */}
        <div className="container text-center space-1">
          {/* <!-- Title --> */}
          <div className="w-md-80 w-lg-50 text-center mx-md-auto pb-1">
            <h2 className="section-title text-black font-size-30 font-weight-bold">
              Why Choose
            </h2>
          </div>
          {/* <!-- End Title --> */}
          {/* <!-- Features --> */}
          <div className="mb-8">
            <div className="row">
              {/* <!-- Icon Block --> */}
              <div className="col-md-4">
                <i className="flaticon-price text-primary font-size-80 mb-3"></i>
                <h5 className="font-size-17 text-dark font-weight-bold mb-2">
                  <a href="#">Competitive Pricing</a>
                </h5>
                <p className="text-gray-1 px-xl-2 px-uw-7">
                  With 500+ suppliers and the purchasing power of 300 million
                  members, mytravel.com can save you more!
                </p>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="col-md-4">
                <i className="flaticon-medal text-primary font-size-80 mb-3"></i>
                <h5 className="font-size-17 text-dark font-weight-bold mb-2">
                  <a href="#">Award-Winning Service</a>
                </h5>
                <p className="text-gray-1 px-xl-2 px-uw-7">
                  Travel worry-free knowing that we're here if you needus, 24
                  hours a day
                </p>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="col-md-4">
                <i className="flaticon-global-1 text-primary font-size-80 mb-3"></i>
                <h5 className="font-size-17 text-dark font-weight-bold mb-2">
                  <a href="#">Worldwide Coverage</a>
                </h5>
                <p className="text-gray-1 px-xl-2 px-uw-7">
                  Over 1,200,000 hotels in more than 200 countries and regions &
                  flights to over 5,000 cities
                </p>
              </div>
              {/* <!-- End Icon Block --> */}
            </div>
          </div>
          {/* <!-- End Features --> */}
        </div>
        {/* <!-- End Features Section --> */}
        {/* <!--Banner--> */}
        <div
          className="gradient-overlay-half-bg-grayish-blue bg-img-hero space-3 space-top-lg-4 space-bottom-lg-3"
          style={imagefluid1}
        >
          <div className="text-center mt-xl-2">
            <h5 className="text-white font-size-41 font-weight-bold mb-2">
              Travelling Highlights
            </h5>
            <h6 className="text-white font-size-21 font-weight-bold mb-3 mb-lg-5 opacity-7">
              Your New Travelling Idea
            </h6>
            {/* <!-- Fancybox --> */}
            <a
              className="js-fancybox d-inline-block u-media-player"
              href="javascript:;"
              data-src="//vimeo.com/167434033"
              data-speed="700"
              data-animate-in="zoomIn"
              data-animate-out="zoomOut"
              data-caption="MyTravel - Responsive Website Template"
            >
              <span className="u-media-player__icon u-media-player__icon--lg bg-transparent text-white">
                <span className="flaticon-multimedia font-size-60 u-media-player__icon-inner"></span>
              </span>
            </a>
            {/* <!-- End Fancybox --> */}
          </div>
        </div>
        {/* <!--End Banner--> */}
        {/* <!-- Testimonials Section --> */}
        <div className="container">
          <div className="pt-7 pb-8">
            <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5">
              <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">
                Customer Reviews
              </h2>
            </div>
            {/* <!-- Slick Carousel --> */}
            <div
              className="js-slick-carousel u-slick u-slick-zoom u-slick--gutters-3"
              data-infinite="    true"
              data-autoplay="true"
              data-speed="3000"
              data-fade="true"
              data-pagi-classNamees="text-center u-slick__pagination mb-0 mt-4"
              data-responsive='[{
                        "breakpoint": 992,
                           "settings": {
                             "slidesToShow": 1
                           }
                        }]'
            >
              <div className="js-slide">
                {/* <!-- Testimonials --> */}
                <div className="d-flex justify-content-center mb-6">
                  <div className="position-relative">
                    <img
                      className="img-fluid mx-auto"
                      src={imagefluid1}
                      alt="Image-Descrition"
                    />
                    <span className="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                      <figure id="quote7" className="svg-preloader">
                        <img
                          className="js-svg-injector"
                          src={imagefluid2}
                          alt="SVG"
                          data-parent="#quote7"
                        />
                      </figure>
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">
                    This is the 3rd time I’ve used Travelo website and telling
                    you the truth their services are always realiable and it
                    only takes few minutes to plan and finalize
                  </p>
                  <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">
                    Jessica Brown
                  </h6>
                  <span className="text-blue-lighter-1 font-size-normal">
                    client
                  </span>
                </div>
                {/* <!-- End Testimonials --> */}
              </div>

              <div className="js-slide">
                {/* <!-- Testimonials --> */}
                <div className="d-flex justify-content-center mb-6">
                  <div className="position-relative">
                    <img
                      className="img-fluid mx-auto"
                      src={imagefluid3}
                      alt="Image-Descrition"
                    />
                    <div className="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                      <figure id="quote8" className="svg-preloader">
                        <img
                          className="js-svg-injector"
                          src={imagefluid4}
                          alt="SVG"
                          data-parent="#quote8"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">
                    This is the 3rd time I’ve used Travelo website and telling
                    you the truth their services are always realiable and it
                    only takes few minutes to plan and finalize
                  </p>
                  <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">
                    Augusta Silva
                  </h6>
                  <span className="text-blue-lighter-1 font-size-normal">
                    client
                  </span>
                </div>
                {/* <!-- End Testimonials --> */}
              </div>

              <div className="js-slide">
                {/* <!-- Testimonials --> */}
                <div className="d-flex justify-content-center mb-6">
                  <div className="position-relative">
                    <img
                      className="img-fluid mx-auto"
                      src={imagefluid5}
                      alt="Image-Descrition"
                    />
                    <div className="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                      <figure id="quote9" className="svg-preloader">
                        <img
                          className="js-svg-injector"
                          src={imagefluid11}
                          alt="SVG"
                          data-parent="#quote9"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">
                    This is the 3rd time I’ve used Travelo website and telling
                    you the truth their services are always realiable and it
                    only takes few minutes to plan and finalize
                  </p>
                  <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">
                    Ali Tufan
                  </h6>
                  <span className="text-blue-lighter-1 font-size-normal">
                    client
                  </span>
                </div>
                {/* <!-- End Testimonials --> */}
              </div>

              <div className="js-slide">
                {/* <!-- Testimonials --> */}
                <div className="d-flex justify-content-center mb-6">
                  <div className="position-relative">
                    <img
                      className="img-fluid mx-auto"
                      src={imagefluid6}
                      alt="Image-Descrition"
                    />
                    <div className="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                      <figure id="quote10" className="svg-preloader">
                        <img
                          className="js-svg-injector"
                          src={imagefluid7}
                          alt="SVG"
                          data-parent="#quote10"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">
                    This is the 3rd time I’ve used Travelo website and telling
                    you the truth their services are always realiable and it
                    only takes few minutes to plan and finalize
                  </p>
                  <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">
                    Jessica Brown
                  </h6>
                  <span className="text-blue-lighter-1 font-size-normal">
                    client
                  </span>
                </div>
                {/* <!-- End Testimonials --> */}
              </div>

              <div className="js-slide">
                {/* <!-- Testimonials --> */}
                <div className="d-flex justify-content-center mb-6">
                  <div className="position-relative">
                    <img
                      className="img-fluid mx-auto"
                      src={imagefluid8}
                      alt="Image-Descrition"
                    />
                    <div className="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                      <figure id="quote11" className="svg-preloader">
                        <img
                          className="js-svg-injector"
                          src={imagefluid9}
                          alt="SVG"
                          data-parent="#quote11"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">
                    This is the 3rd time I’ve used Travelo website and telling
                    you the truth their services are always realiable and it
                    only takes few minutes to plan and finalize
                  </p>
                  <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">
                    Ali Tufan
                  </h6>
                  <span className="text-blue-lighter-1 font-size-normal">
                    client
                  </span>
                </div>
                {/* <!-- End Testimonials --> */}
              </div>

              <div className="js-slide">
                {/* <!-- Testimonials --> */}
                <div className="d-flex justify-content-center mb-6">
                  <div className="position-relative">
                    <img
                      className="img-fluid mx-auto"
                      src={imagefluid10}
                      alt="Image-Descrition"
                    />
                    <div className="btn-position btn btn-icon btn-dark rounded-circle d-flex align-items-center justify-content-center height-60 width-60">
                      <figure id="quote12" className="svg-preloader">
                        <img
                          className="js-svg-injector"
                          src={imagefluid11}
                          alt="SVG"
                          data-parent="#quote12"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-1 font-italic text-lh-inherit px-xl-20 mx-xl-15 px-xl-20 mx-xl-18">
                    This is the 3rd time I’ve used Travelo website and telling
                    you the truth their services are always realiable and it
                    only takes few minutes to plan and finalize
                  </p>
                  <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">
                    Augusta Silva
                  </h6>
                  <span className="text-blue-lighter-1 font-size-normal">
                    client
                  </span>
                </div>
                {/* <!-- End Testimonials --> */}
              </div>
            </div>
            {/* <!-- End Slick Carousel --> */}
          </div>
        </div>
        {/* <!-- End Testimonials Section --> */}
        {/* <!-- Features Section --> */}
        <div
          className="gradient-overlay-half-bg-blue bg-img-hero"
          style={imagefluid1}
        >
          <div className="container text-center space-1">
            {/* <!-- Features --> */}
            <div className="row">
              {/* <!-- Icon Block --> */}
              <div className="col-md-3">
                <i className="flaticon-node text-white font-size-80 mb-3"></i>
                <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
                  5340
                </h5>
                <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
                  Total Length of Boats Sold Since 2009
                </p>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="col-md-3">
                <i className="flaticon-cardinal-points text-white font-size-80 mb-3"></i>
                <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
                  19
                </h5>
                <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
                  Locations with Easy Access off the Deep Water Channel
                </p>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="col-md-3">
                <i className="flaticon-anchor text-white font-size-80 mb-3"></i>
                <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
                  18000
                </h5>
                <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
                  sq. ft. Showroom loaded with New & Used Boats
                </p>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="col-md-3">
                <i className="flaticon-star text-white font-size-80 mb-3"></i>
                <h5 className="font-size-30 text-white font-weight-bold mb-2 js-counter">
                  30
                </h5>
                <p className="text-white px-xl-2 text-lh-inherit px-uw-3">
                  Number of Licensed Yachting Professionals
                </p>
              </div>
              {/* <!-- End Icon Block --> */}
            </div>
            {/* <!-- End Features --> */}
          </div>
        </div>
        {/* <!-- End Features Section --> */}
        {/* <!-- Team --> */}
        <div className="team border-bottom border-color-3">
          <div className="container space-top-1">
            <div className="w-md-80 w-lg-70 text-center mx-md-auto mb-5 mt-3">
              <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">
                Deticated Team
              </h2>
            </div>
            <div className="row text-center pb-2">
              <div className="col-lg-4  col-md-6 inner-right inner-bottom-sm inner-left">
                <div className="pb-3">
                  <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                    <div className="u-avatar-image-overlay">
                      <ul className="u-avatar-image-social list-unstyled m-0 w-100 h-100">
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src={imagefluid11} alt="Image-Descrition" />
                  </figure>
                </div>
                <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">
                  David Robets
                </h6>
                <span className="text-blue-lighter-1 font-size-normal">
                  Founder & Director
                </span>
              </div>
              <div className="col-lg-4  col-md-6 inner-right inner-bottom-sm inner-left">
                <div className="pb-3">
                  <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                    <div className="u-avatar-image-overlay">
                      <ul className="u-avatar-image-social list-unstyled m-0 w-100 h-100">
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src={imagefluid11} alt="Image-Descrition" />
                  </figure>
                </div>
                <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">
                  Augusta Silva{" "}
                </h6>
                <span className="text-blue-lighter-1 font-size-normal">
                  Chief Operating Officer
                </span>
              </div>
              <div className="col-lg-4  col-md-6 inner-right inner-bottom-sm inner-left">
                <div className="pb-3">
                  <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                    <div className="u-avatar-image-overlay">
                      <ul className="u-avatar-image-social list-unstyled m-0 w-100 h-100">
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src={imagefluid11} alt="Image-Descrition" />
                  </figure>
                </div>
                <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">
                  Bernice Lucas
                </h6>
                <span className="text-blue-lighter-1 font-size-normal">
                  Dairector - Hotels
                </span>
              </div>
              <div className="col-lg-4  col-md-6 inner-right inner-bottom-sm inner-left">
                <div className="pb-3">
                  <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                    <div className="u-avatar-image-overlay">
                      <ul className="u-avatar-image-social list-unstyled m-0 w-100 h-100">
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src={imagefluid7} alt="Image-Descrition" />
                  </figure>
                </div>
                <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">
                  Jessica Brown
                </h6>
                <span className="text-blue-lighter-1 font-size-normal">
                  Chief Executive
                </span>
              </div>
              <div className="col-lg-4  col-md-6 inner-right inner-bottom-sm inner-left">
                <div className="pb-3">
                  <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                    <div className="u-avatar-image-overlay">
                      <ul className="u-avatar-image-social list-unstyled m-0 w-100 h-100">
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src={imagefluid7} alt="Image-Descrition" />
                  </figure>
                </div>
                <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">
                  David Jackson
                </h6>
                <span className="text-blue-lighter-1 font-size-normal">
                  Founder & CEO
                </span>
              </div>
              <div className="col-lg-4  col-md-6 inner-right inner-bottom-sm inner-left">
                <div className="pb-3">
                  <figure className="d-inline-block u-avatar-image rounded-circle overflow-hidden">
                    <div className="u-avatar-image-overlay">
                      <ul className="u-avatar-image-social list-unstyled m-0 w-100 h-100">
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-medium btn-soft-white btn-bg-transparent transition-3d-hover rounded-circle"
                            href="#"
                          >
                            <i className="btn-icon__inner fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src={imagefluid7} alt="Image-Descrition" />
                  </figure>
                </div>
                <h6 className="font-size-17 font-weight-bold text-gray-11 mb-0">
                  Kyle Martin
                </h6>
                <span className="text-blue-lighter-1 font-size-normal">
                  Founder & CEO
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- ========== END MAIN CONTENT ========== --> */}
    </div>
  );
}
