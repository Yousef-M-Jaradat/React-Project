import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Category() {
  const navigate = useNavigate();
  const [yachtCounts, setYachtCounts] = useState({});
  const categoryIds = [1, 2, 3, 4];

  // Define image URLs, destination names, and corresponding images for each category
  const categoryData = {
    1: { name: 'Aqaba', image: 'url(https://traveler.marriott.com/wp-content/uploads/2023/03/aqaba-jordan-1288858945.jpg)' },
    2: { name: 'Dubai', image: 'url(https://media.istockphoto.com/id/960934310/photo/aerial-view-of-dubai-coast-line-on-a-beautiful-sunny-day.jpg?s=612x612&w=0&k=20&c=5ISmWR-l6ir5yIzk9a5_1NCHH4Mg_tGFY2jbD7d-kTA=)' },
    3: { name: 'Antalya', image: 'url(https://media.istockphoto.com/id/1161769559/photo/panoramic-bird-view-of-antalya-and-mediterranean-seacoast-and-beach-with-a-paraglider-antalya.jpg?s=612x612&w=0&k=20&c=BtpqGt8GwIu66v49mKIkh17yTd3FPyAOmPORB-L6zt0=)' },
    4: { name: 'Miami', image: 'url(https://www.worldatlas.com/upload/df/29/12/shutterstock-490898872.jpg)' },
  };

  const handleButtonClick = (id) => {
    navigate(`/yachts/${id}`);
  };

  useEffect(() => {
    axios
      .get('https://651db05044e393af2d5a346e.mockapi.io/yachts')
      .then((response) => {
        const data = response.data;
        const counts = {};

        categoryIds.forEach((categoryId) => {
          const yachtsRelatedToCategory = data.filter((yacht) => yacht.category_id === categoryId);
          counts[categoryId] = yachtsRelatedToCategory.length;
        });

        setYachtCounts(counts);
      });
  }, [categoryIds]);

  return (
    <div className="destination-block destination-v5 border-bottom border-color-8">
      <div className="container space-1">
        <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mt-3">
          <h2 className="section-title text-black font-size-30 font-weight-bold mb-0">Popular Destination</h2>
        </div>
        <div className="row">
          {categoryIds.map((categoryId) => (
            <div className="col-md-6 col-xl-3 mb-3 mb-md-4 pb-1" key={categoryId}>
              <div
                className="min-height-350 bg-img-hero rounded-border p-5 gradient-overlay-half-bg-gradient transition-3d-hover shadow-hover-2"
                onClick={() => handleButtonClick(categoryId)}
                style={{ backgroundImage: categoryData[categoryId].image }}
              >
                <header className="w-100 d-flex justify-content-between mb-3">
                  <div>
                    <div className="pb-3 text-lh-1">
                      <a
                        className="text-white font-weight-bold font-size-21"
                        onClick={() => handleButtonClick(categoryId)}
                      >
                        {categoryData[categoryId].name}
                      </a>
                    </div>
                    <div className="d-inline-flex px-3 py-1 rounded-pill bg-white">
                      <button
                        className="font-size-15"
                        style={{ border: 'none', backgroundColor: 'white' }}
                        onClick={() => handleButtonClick(categoryId)}
                      >
                        {yachtCounts[categoryId]} Yachts
                      </button>
                    </div>
                  </div>
                </header>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
