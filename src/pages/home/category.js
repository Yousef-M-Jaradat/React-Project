import React from 'react';
import { useNavigate } from 'react-router-dom';
import Yacht from '../products/yacht'; // Import the Yacht component

function Category() {
  const navigate = useNavigate();

  const id1 = 1;
  const id2 = 2;
  const id3 = 3;
  const id4 = 4;

  const handleButtonClick = (id) => {
    // Use the navigate function to go to the Yacht component with the specified id
    navigate(`/yacht/${id}`);
  };
  

  return (
    <div className="destination-block destination-v5 border-bottom border-color-8">
      <div className="container space-1">
        <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mt-3">
          <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">Popular Destination</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-3 mb-3 mb-md-4 pb-1">
            <div className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2" style={{ backgroundImage: 'url(../../assets/img/300x350/img6.jpg)' }}>
              <header className="w-100 d-flex justify-content-between mb-3">
                <div>
                  <div className="pb-3 text-lh-1">
                    <a href="../others/destination.html" className="text-white font-weight-bold font-size-21">Turkey</a>
                  </div>
                  <div className="d-inline-flex px-3 py-1 rounded-pill bg-white">
                  <button className="font-size-14" onClick={() => handleButtonClick(id1)}  >88 Yacht</button>
                  </div>
                </div>
              </header>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 mb-3 mb-md-4 pb-1">
            <div className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2" style={{ backgroundImage: 'url(../../assets/img/300x350/img5.jpg)' }}>
              <header className="w-100 d-flex justify-content-between mb-3">
                <div>
                  <div className="pb-3 text-lh-1">
                    <a href="../others/destination.html" className="text-white font-weight-bold font-size-21">Norway</a>
                  </div>
                  <div className="d-inline-flex px-3 py-1 rounded-pill bg-white">
                  <button className="font-size-14" onClick={() => handleButtonClick(id2)} >88 Yacht</button>
                  </div>
                </div>
              </header>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 mb-3 mb-md-4 pb-1">
            <div className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2" style={{ backgroundImage: 'url(../../assets/img/300x350/img1.jpg)' }}>
              <header className="w-100 d-flex justify-content-between mb-3">
                <div>
                  <div className="pb-3 text-lh-1">
                    <a href="../others/destination.html" className="text-white font-weight-bold font-size-21">United States</a>
                  </div>
                  <div className="d-inline-flex px-3 py-1 rounded-pill bg-white">
                  <button className="font-size-14" onClick={() => handleButtonClick(id3)} >88 Yacht</button>
                  </div>
                </div>
              </header>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 mb-3 mb-md-4 pb-1">
            <div className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2" style={{ backgroundImage: 'url(../../assets/img/300x350/img3.jpg)' }}>
              <header className="w-100 d-flex justify-content-between mb-3">
                <div>
                  <div className="pb-3 text-lh-1">
                    <a href="../others/destination.html" className="text-white font-weight-bold font-size-21">Ukraine</a>
                  </div>
                  <div className="d-inline-flex px-3 py-1 rounded-pill bg-white">
                  <button className="font-size-14" onClick={() => handleButtonClick(id4)}  >88 Yacht</button>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
