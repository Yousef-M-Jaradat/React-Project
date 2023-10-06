
import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

// Define the Yacht component
function Yacht() {
  
  const { id } = useParams();
 
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [selectedBeds, setSelectedBeds] = useState("");
  const [selectedSpeed, setselectedSpeed] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;


  const navigate = useNavigate();

  const id1 = 1;
  const id2 = 2;
  const id3 = 3;
  const id4 = 4;

  const handleButtonClick = (id) => {
    navigate(`/yachts/${id}`);
  };
 
useEffect(() => {
  axios
    .get(`https://651db05044e393af2d5a346e.mockapi.io/yachts`)
    .then((response) => {
      const filteredData = response.data.filter((yacht) => {
        return yacht.category_id === parseInt(id) &&
          yacht.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setData(filteredData);
    });
}, [id, searchQuery]);

const handleSearchInputChange = (event) => {
  setSearchQuery(event.target.value);
};

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const offset = currentPage * itemsPerPage;
  const currentData = data.slice(offset, offset + itemsPerPage);

  
  let filteredData = currentData.filter((yacht) => {
    const price = parseFloat(yacht.price);
    const min = minPrice !== "" ? parseFloat(minPrice) : 0;
    const max = maxPrice !== "" ? parseFloat(maxPrice) : Infinity;
    return price >= min && price <= max;
  });

    if (selectedBeds !== "") {
    
      filteredData = filteredData.filter((yacht) => yacht.beds === selectedBeds);
      
  };

  if (selectedSpeed !== "") {
    
    filteredData = filteredData.filter((yacht) => yacht.speed === selectedSpeed);
    
};

  return (
    <div className='mt-10'>
      <main id="content" role="main">
        <div class="container pt-5 pt-xl-8">
          <div class="row mb-5 mb-md-8 mt-xl-1 pb-md-1">
            <div class="col-lg-4 col-xl-3 order-lg-1 width-md-50">
              <div class="navbar-expand-lg navbar-expand-lg-collapse-block">
                <button
                  class="btn d-lg-none mb-5 p-0 collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#sidebar"
                  aria-controls="sidebar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="far fa-caret-square-down text-primary font-size-20 card-btn-arrow ml-0"></i>
                  <span class="text-primary ml-2">Sidebar</span>
                </button>
                <div id="sidebar" class="collapse navbar-collapse">
                  <div class="mb-6 w-100">
                    <div class="pb-4 mb-2">
                      <div class="sidebar border border-color-1 rounded-xs">
                        <div class="p-4 mx-1 mb-1">
                          <span class="d-block text-gray-1  font-weight-normal mb-0 text-left">
                            Destination
                          </span>
                          <div class="mb-4">
                            <div class="input-group border-bottom border-width-2 border-color-1">
                              <i class="flaticon-pin-1 d-flex align-items-center mr-2 text-primary font-weight-semi-bold font-size-22"></i>
                              <input
                                type="text"
                                class="form-control font-weight-bold font-size-16 shadow-none hero-form font-weight-bold border-0 p-0"
                                placeholder="Where are you going?"
                                aria-label="Keyword or title"
                                aria-describedby="keywordInputAddon"
                              ></input>
                            </div>
                          </div>

                          <span class="d-block text-gray-1 text-left font-weight-normal mb-0">
                            From - To
                          </span>
                          <div class="border-bottom border-width-2 border-color-1 mb-4">
                            <div
                              id="datepickerWrapperFromOne"
                              class="u-datepicker input-group flex-nowrap"
                            >
                              <div class="input-group-prepend">
                                <span class="d-flex align-items-center mr-2 font-size-21">
                                  <i class="flaticon-calendar text-primary font-weight-semi-bold"></i>
                                </span>
                              </div>
                              <input
                                class="js-range-datepicker font-size-16 ml-1 shadow-none font-weight-bold form-control hero-form bg-transparent border-0 flatpickr-input p-0"
                                type="date"
                                data-rp-wrapper="#datepickerWrapperFromOne"
                                data-rp-type="range"
                                data-rp-date-format="M d / Y"
                                data-rp-default-date='["Jul 7 / 2020", "Aug 25 / 2020"]'
                              ></input>
                            </div>
                          </div>

                          <div class="col dropdown-custom px-0 mb-5">
                            <span class="d-block text-gray-1 text-left font-weight-normal mb-2">
                              Trip Type
                            </span>
                            <div class="flex-horizontal-center border-bottom border-width-2 border-color-1 pb-2">
                              <i class="flaticon-sailboat d-flex align-items-center mr-2 font-size-24 text-primary"></i>
                              <select
                                class="js-select selectpicker dropdown-select bootstrap-select__custom-nav"
                                data-style="btn-sm mt-1 py-0 px-0  text-black font-size-16 font-weight-semi-bold d-flex align-items-center"
                              >
                                <option value="one" selected>
                                  Sailboat
                                </option>
                                <option value="two">Dinghy Boats</option>
                                <option value="three">Deck Boats</option>
                                <option value="four">Bowrider Boats</option>
                              </select>
                            </div>
                          </div>

                          <div className="search-container">
  <input
    type="text"
    placeholder="Search by name..."
    value={searchQuery}
    onChange={handleSearchInputChange}
    className="search-input"
  />
  <i className="fa fa-search search-icon"></i>
</div>
                        </div>
                      </div>
                    </div>
                  

                    <div className="sidenav border border-color-8 rounded-xs">
                      <div
                        id="shopCartAccordion"
                        className="accordion rounded shadow-none"
                      >
                        <div className="border-0">
                        <div className="pb-4 mb-2">
                           <span class="font-weight-bold font-size-19 text-dark mb-3 mt-4 mx-2">
                                      Filters
                                    </span>
  <span className="d-block text-gray-1 text-left font-weight-normal mb-0 mt-3 mx-2">
    Price Range ($)
  </span>
  <div className="border-bottom border-width-2 border-color-1 mx-2 " >
    <div className="input-group">
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="form-control"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="form-control"
      />
    </div>
  </div>
</div>

<label className=" text-gray-1 text-left font-weight-normal mb-0 p-2" >Number of beds:</label> 
      <select className=" w-50 mb-3 "  onChange={(e) =>  setSelectedBeds(e.target.value)} value={selectedBeds}>
        <option value="">All</option>
        <option value="3">3 beds</option>
        <option value="4">4 beds</option>
        <option value="5">5 beds</option>
        <option value="6">6 beds</option>
        <option value="7">7 beds</option>
        <option value="8">8 beds</option>
        <option value="9">9 beds</option>
        <option value="10">10 beds</option>
      </select>
    
      <div>
       <label className=" text-gray-1 text-left font-weight-normal mb-0 p-2"  >Speed:</label>
      <select className=" w-75 mb-4" onChange={(e) =>  setselectedSpeed(e.target.value)} value={selectedSpeed}>
        <option value="">All</option>
        <option value="120">120 </option>
        <option value="130">130 </option>
        <option value="140">140 </option>
   
      </select>
      </div>
                        </div>
                      </div>

                      <div
                        id="cityCategoryAccordion"
                        class="accordion rounded-0 shadow-none border-top"
                      >
                        <div class="border-0">
                          <div
                            class="card-collapse"
                            id="cityCategoryHeadingOne"
                          >
                            <h3 class="mb-0">
                              <button
                                type="button"
                                class="btn btn-link btn-block card-btn py-2 px-5 text-lh-3 collapsed"
                                data-toggle="collapse"
                                data-target="#cityCategoryOne"
                                aria-expanded="false"
                                aria-controls="cityCategoryOne"
                              >
                                <span class="row align-items-center">
                                  <span class="col-9">
                                    <span class="font-weight-bold font-size-19 text-dark mb-3">
                                      Categories
                                    </span>
                                  </span>
                                  <span class="col-3 text-right">
                                    <span class="card-btn-arrow">
                                      <span class="fas fa-chevron-down small"></span>
                                    </span>
                                  </span>
                                </span>
                              </button>
                            </h3>
                          </div>
                          <div
  id="cityCategoryOne"
  class="collapse show"
  aria-labelledby="cityCategoryHeadingOne"
  data-parent="#cityCategoryAccordion"
>
  <div class="card-body pt-0 mt-1 px-5 pb-4">
    <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="brandamsterdam"
          name="cityRadio"
          onClick={() => handleButtonClick(id1)}
        ></input>
        <label class="custom-control-label" for="brandamsterdam">
          Aqaba
        </label>
      </div>
    </div>
    <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="brandrotterdam"
          name="cityRadio"
          onClick={() => handleButtonClick(id2)}
        ></input>
        <label class="custom-control-label" for="brandrotterdam">
        Abu Dhabi
        </label>
      </div>
    </div>
    <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="brandvalkenburg"
          name="cityRadio"
          onClick={() => handleButtonClick(id3)}
        ></input>
        <label class="custom-control-label" for="brandvalkenburg">
          Miami
        </label>
      </div>
    </div>
    <div class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-3">
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="brandvalkenburg2"
          name="cityRadio"
          onClick={() => handleButtonClick(id4)}
        ></input>
        <label class="custom-control-label" for="brandvalkenburg2">
          Antalya
        </label>
      </div>
    </div>
  </div>
</div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-xl-9 order-md-1 order-lg-2">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="font-size-21 font-weight-bold mb-0 text-lh-1">
                  1,984 results found.
                </h3>
                <ul
                  class="nav tab-nav-shop flex-nowrap"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link font-size-22 p-0"
                      id="pills-three-example1-tab"
                      data-toggle="pill"
                      href="#pills-three-example1"
                      role="tab"
                      aria-controls="pills-three-example1"
                      aria-selected="true"
                    >
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        <i class="fa fa-list"></i>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link font-size-22 p-0 ml-2 active"
                      id="pills-one-example1-tab"
                      data-toggle="pill"
                      href="#pills-one-example1"
                      role="tab"
                      aria-controls="pills-one-example1"
                      aria-selected="false"
                    >
                      <div class="d-md-flex justify-content-md-center align-items-md-center">
                        <i class="fa fa-th"></i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="u-slick__tab">
                <div class="mb-5">
                  <ul
                    class="nav flex-nowrap border border-radius-3 tab-nav align-items-center py-2 px-0"
                    role="tablist"
                  >
                    <li class="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1">
                      <a
                        href="#"
                        class="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15 "
                      >
                        Recommended
                      </a>
                    </li>
                    <li class="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                      <select
                        class="js-select selectpicker dropdown-select bootstrap-select__custom-nav w-auto"
                        data-style="btn-sm py-1 px-4 px-wd-5 font-weight-normal font-size-15  text-gray-1 d-flex align-items-center"
                      >
                        <option value="one" selected>
                          Price
                        </option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                        <option value="four">Four</option>
                      </select>
                    </li>
                    <li class="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                      <select
                        class="js-select selectpicker dropdown-select bootstrap-select__custom-nav w-auto"
                        data-style="btn-sm py-1 px-4 px-wd-5 font-weight-normal font-size-15  text-gray-1 d-flex align-items-center"
                      >
                        <option value="one" selected>
                          Stars
                        </option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                        <option value="four">Four</option>
                      </select>
                    </li>
                    <li class="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                      <a
                        href="#"
                        class="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15 "
                      >
                        Guest Rating
                      </a>
                    </li>
                    <li class="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                      <a
                        href="#"
                        class="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15 "
                      >
                        Distance
                      </a>
                    </li>
                    <li class="nav-item d-flex align-items-center flex-shrink-0 flex-xl-shrink-1 border-left">
                      <a
                        href="#"
                        class="nav-link font-weight-normal text-gray-1 text-lh-1dot6 py-1 px-4 px-wd-5 font-weight-normal font-size-15 "
                      >
                        Top Reviewed
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="tab-content" id="pills-tabContent">
                  <div
                    id="pills-three-example1"
                    role="tabpanel"
                    aria-labelledby="pills-three-example1-tab"
                    data-target-group="groups"
                  >
                    <ul className="d-block list-unstyled products-group prodcut-list-view">
        {/* {filteredYachts.map((yacht) => ( */}
                      {filteredData.map((yacht) => (
                        <div>
                          <li
                            key={yacht.id}
                            className="card mb-5 overflow-hidden"
                          >
                            <div className="product-item__outer w-100">
                              <div className="row">
                                <div className="col-md-5 col-xl-4">
                                  <div className="product-item__header">
                                    <div className="position-relative">
                                      <div
                                        className="js-slide bg-img-hero min-height-300 "
                                        style={{
                                          backgroundImage: `url(${yacht.image1})`,
                                          width: "340px",
                                          height: "280px",
                                          backgroundSize: "100% 100%",
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-7 col-xl-5 flex-horizontal-center">
                                  <div className="w-100 position-relative m-4 ms-auto">
                                    <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-icon rounded-circle"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title=""
                                        data-original-title="Save for later"
                                      >
                                        <span className="flaticon-heart-1 font-size-20"></span>
                                      </button>
                                    </div>
                                    <a href="../yacht/yacht-single-v1.html">
                                      <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">
                                     {yacht.name}
                                      </span>
                                    </a>
                                    <div className="card-body p-0">
                                      <a
                                        href="../yacht/yacht-single-v1.html"
                                        className="d-block mb-1"
                                      >
                                        <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                                          <i className="icon flaticon-placeholder mr-2 font-size-20"></i>{" "}
                                          {yacht.location}
                                        </div>
                                      </a>
                                      <div className="mb-3">
                                        <div className="d-inline-flex align-items-center font-size-14 text-lh-1 text-primary">
                                          <div className="green-lighter mr-2">
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                            <small className="fas fa-star"></small>
                                          </div>
                                          <span className="text-secondary font-size-14 mt-1">
                                            48 Reviews
                                          </span>
                                        </div>
                                      </div>
                                      <div className="d-flex">
                                        <div className="mr-5">
                                          <ul className="list-unstyled mb-0">
                                            <li className="media mb-2 text-gray-1 align-items-center">
                                              <small className="mr-3">
                                                <small className="flaticon-ruler font-size-16"></small>
                                              </small>
                                              <div className="media-body font-size-1">
                                                {yacht.size}
                                              </div>
                                            </li>
                                            <li className="media mb-2 text-gray-1 align-items-center">
                                              <small className="mr-3">
                                                <small className="flaticon-user font-size-16"></small>
                                              </small>
                                              <div className="media-body font-size-1">
                                                {yacht.person}
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="ml-1">
                                          <ul className="list-unstyled mb-0">
                                            <li className="media mb-2 text-gray-1 align-items-center">
                                              <small className="mr-3">
                                                <small className="flaticon-download-speed font-size-16"></small>
                                              </small>
                                              <div className="media-body font-size-1">
                                                {yacht.speed}
                                              </div>
                                            </li>
                                            <li className="media mb-2 text-gray-1 align-items-center">
                                              <small className="mr-3">
                                                <small className="flaticon-bed-1 font-size-16"></small>
                                              </small>
                                              <div className="media-body font-size-1">
                                                {yacht.beds}
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col col-xl-3 align-self-center py-4 py-xl-0 border-top border-xl-top-0">
                                  <div className="border-xl-left border-color-7 py-5">
                                    <div className="ml-md-4 ml-xl-0">
                                      <div className="text-center text-md-left text-xl-center d-flex flex-column mb-2 pb-1 ml-md-3 ml-xl-0">
                                        <div className="mb-0">
                                          <span className="font-weight-bold font-size-22">
                                          {parseFloat(yacht.price).toFixed(2)}
                                          </span>
                                          <span className="mr-1 font-size-14 text-gray-1">
                                            / week
                                          </span>
                                        </div>
                                      </div>
                                      <div className="d-flex justify-content-center justify-content-md-start justify-content-xl-center">
                                        <a
                                        href={`/products/${yacht.id}`}
                                          className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2"
                                        >
                                          View Detail
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </div>
                      ))}

</ul>
                        <div className="pagination-container">
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>

               
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="text-center text-md-left font-size-14 mb-3 text-lh-1">Showing 1–15</div> */}
        {/* <nav aria-label="Page navigation">
                                    <ul class="list-pagination-1 pagination border border-color-4 rounded-sm overflow-auto overflow-xl-visible justify-content-md-center align-items-center py-2 mb-0">
                                        <li class="page-item">
                                            <a class="page-link border-right rounded-0 text-gray-5" href="#" aria-label="Previous">
                                                <i class="flaticon-left-direction-arrow font-size-10 font-weight-bold"></i>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link font-size-14" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link font-size-14 active" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link font-size-14" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link font-size-14" href="#">4</a></li>
                                        <li class="page-item"><a class="page-link font-size-14" href="#">5</a></li>
                                        <li class="page-item disabled"><a class="page-link font-size-14" href="#">...</a></li>
                                        <li class="page-item"><a class="page-link font-size-14" href="#">66</a></li>
                                        <li class="page-item"><a class="page-link font-size-14" href="#">67</a></li>
                                        <li class="page-item">
                                            <a class="page-link border-left rounded-0 text-gray-5" href="#" aria-label="Next">
                                                <i class="flaticon-right-thin-chevron font-size-10 font-weight-bold"></i>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav> */}
      </main>
    </div>
  );
}

export default Yacht;
