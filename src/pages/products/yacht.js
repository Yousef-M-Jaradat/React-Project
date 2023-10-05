
import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';


// Define the Yacht component
function Yacht() {
  
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    axios
      .get(`https://651db05044e393af2d5a346e.mockapi.io/yachts`)
      .then((response) => {
        const filteredData = response.data.filter((yacht) => yacht.category_id === parseInt(id));
        setData(filteredData);
      })
  }, [id]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const offset = currentPage * itemsPerPage;
  const currentData = data.slice(offset, offset + itemsPerPage);

  return (
    <div>
        
        {currentData.map((yacht) => ( 
            <div>
 <li key={yacht.id} className="card mb-5 overflow-hidden">
                                            <div className="product-item__outer w-100">
      
  

                                                <div className="row">
                                                    <div className="col-md-5 col-xl-4">
                                                        <div className="product-item__header">
                                                            <div className="position-relative">
                                                            <div
              className="js-slide bg-img-hero min-height-300"
              style={{
                backgroundImage: `url(${yacht.image1})`,
              
              }}
            ></div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 col-xl-5 flex-horizontal-center">
                                                        <div className="w-100 position-relative m-4 m-md-0">
                                                            <div className="position-absolute top-0 right-0 pr-md-3 d-none d-md-block">
                                                                <button type="button" className="btn btn-sm btn-icon rounded-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Save for later">
                                                                    <span className="flaticon-heart-1 font-size-20"></span>
                                                                </button>
                                                            </div>
                                                            <a href="../yacht/yacht-single-v1.html">
                                                                <span className="font-weight-bold font-size-17 text-dark d-flex mb-1">{yacht.name}</span>
                                                            </a>
                                                            <div className="card-body p-0">
                                                                <a href="../yacht/yacht-single-v1.html" className="d-block mb-1">
                                                                    <div className="d-flex flex-wrap flex-xl-nowrap align-items-center font-size-14 text-gray-1">
                                                                        <i className="icon flaticon-placeholder mr-2 font-size-20"></i> Greater London, United Kingdom
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
                                                                        <span className="text-secondary font-size-14 mt-1">48 Reviews</span>
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
                                                                        <span className="font-weight-bold font-size-22">{yacht.price}</span>
                                                                        <span className="mr-1 font-size-14 text-gray-1">/ week</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-center justify-content-md-start justify-content-xl-center">
                                                                    <a href="../yacht/yacht-single-v1.html" className="btn btn-outline-primary d-flex align-items-center justify-content-center font-weight-bold min-height-50 border-radius-3 border-width-2 px-2 px-5 py-2">View Detail</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

            </div>
      
      
        ))}
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
  );
}


export default Yacht;