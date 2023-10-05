
import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Define the Yacht component
function Filter() {
  
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://651db05044e393af2d5a346e.mockapi.io/yachts')
      .then((response) => {
        const filteredData = response.data.filter((yacht) => yacht.category_id === id);
        setData(filteredData);
      })
  }, [id]);

  return (
    <div>
      <p> { id }</p>

      
      <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade" id="pills-three-example1" role="tabpanel" aria-labelledby="pills-three-example1-tab" data-target-group="groups">
                                    <ul class="d-block list-unstyled products-group prodcut-list-view">
      {data.map((yacht) => ( 
      
                                    <li key={yacht.id} class="card mb-5 overflow-hidden">
                                            <div class="product-item__outer w-100">
                                                <div class="row">
                                                    <div class="col-md-5 col-xl-4">
                                                        <div class="product-item__header">
                                                            <div class="position-relative">
                                                                <div class="js-slick-carousel u-slick u-slick--equal-height"
                                                                    data-slides-show="1"
                                                                    data-slides-scroll="1"
                                                                    data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic v4 u-slick__arrow-classic--v4 u-slick__arrow-centered--y rounded-circle"
                                                                    data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                                                                    data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                                                                    data-pagi-classes="js-pagination text-center u-slick__pagination u-slick__pagination--white position-absolute right-0 bottom-0 left-0 mb-3 mb-0">
                                                                    <div class="js-slide">
                                                                        <a href="../yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5"><img class="img-fluid min-height-230" src="../../assets/img/300x230/img21.jpg"></img></a>
                                                                    </div>
                                                                    <div class="js-slide">
                                                                        <a href="../yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5"><img class="img-fluid min-height-230" src="../../assets/img/300x230/img22.jpg"></img></a>
                                                                    </div>
                                                                    <div class="js-slide">
                                                                        <a href="../yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5"><img class="img-fluid min-height-230" src="../../assets/img/300x230/img23.jpg"></img></a>
                                                                    </div>
                                                                    <div class="js-slide">
                                                                        <a href="../yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5"><img class="img-fluid min-height-230" src="../../assets/img/300x230/img24.jpg"></img></a>
                                                                    </div>
                                                                    <div class="js-slide">
                                                                        <a href="../yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5"><img class="img-fluid min-height-230" src="../../assets/img/300x230/img64.jpg"></img></a>
                                                                    </div>
                                                                    <div class="js-slide">
                                                                        <a href="../yacht/yacht-single-v1.html" class="d-block gradient-overlay-half-bg-gradient-v5"><img class="img-fluid min-height-230" src="../../assets/img/300x230/img65.jpg"></img></a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-7 col-xl-5 flex-horizontal-center">
                                                        <div class="w-100 position-relative m-4 m-md-0">
                                                            <div class="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                                                <button type="button" class="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                                    <span class="flaticon-heart-1 font-size-20"></span>
                                                                </button>
                                                            </div>
                                                            <a href="../yacht/yacht-single-v1.html">
                                                                <span class="font-weight-bold font-size-17 text-dark d-flex mb-1">{yacht.name}</span>
                                                            </a>
                                                            <div class="card-body p-0">
                                                                <a href="../yacht/yacht-single-v1.html" class="d-block mb-1">
                                                                    <div class="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                                                                        <i class="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
                                                                    </div>
                                                                </a>
                                                                <div class="mb-3">
                                                                    <div class="d-inline-flex align-items-center font-size-14 text-lh-1 text-primary">
                                                                        <div class="green-lighter mr-2">
                                                                            <small class="fas fa-star"></small>
                                                                            <small class="fas fa-star"></small>
                                                                            <small class="fas fa-star"></small>
                                                                            <small class="fas fa-star"></small>
                                                                            <small class="fas fa-star"></small>
                                                                        </div>
                                                                        <span class="text-secondary font-size-14 mt-1">48 Reviews</span>
                                                                    </div>
                                                                </div>
                                                                <div class="d-flex">
                                                                    <div class="mr-5">
                                                                        <ul class="list-unstyled mb-0">
                                                                            <li class="media mb-2 text-gray-1 align-items-center">
                                                                                <small class="mr-3">
                                                                                    <small class="flaticon-ruler font-size-16"></small>
                                                                                </small>
                                                                                <div class="media-body font-size-1">
                                                                                {yacht.size}
                                                                                </div>
                                                                            </li>
                                                                            <li class="media mb-2 text-gray-1 align-items-center">
                                                                                <small class="mr-3">
                                                                                    <small class="flaticon-user font-size-16"></small>
                                                                                </small>
                                                                                <div class="media-body font-size-1">
                                                                                {yacht.person}
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="ml-1">
                                                                        <ul class="list-unstyled mb-0">
                                                                            <li class="media mb-2 text-gray-1 align-items-center">
                                                                                <small class="mr-3">
                                                                                    <small class="flaticon-download-speed font-size-16"></small>
                                                                                </small>
                                                                                <div class="media-body font-size-1">
                                                                                {yacht.speed}
                                                                                </div>
                                                                            </li>
                                                                            <li class="media mb-2 text-gray-1 align-items-center">
                                                                                <small class="mr-3">
                                                                                    <small class="flaticon-bed-1 font-size-16"></small>
                                                                                </small>
                                                                                <div class="media-body font-size-1">
                                                                                {yacht.beds}
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                                                        <div class="border-xl-left border-color-7 py-5">
                                                            <div class="ml-md-4 ml-xl-0">
                                                                <div class="text-center text-md-left text-xl-center d-flex flex-column mb-2 pb-1 ml-md-3 ml-xl-0">
                                                                    <div class="mb-0">
                                                                        <span class="font-weight-bold font-size-22">{yacht.price}</span>
                                                                        <span class="mr-1 font-size-14 text-gray-1">/ week</span>
                                                                    </div>
                                                                </div>
                                                                <div class="d-flex justify-content-center justify-content-md-start justify-content-xl-center">
                                                                    <a href="../yacht/yacht-single-v1.html" class="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2">View Detail</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
  

        ))}
        </ul>
      </div>
   </div>
    </div>
  );
}


export default Filter;