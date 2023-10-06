  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import { useParams } from "react-router-dom";

  import { useNavigate } from "react-router-dom";
  import Swal from "sweetalert2";

  function SingleProduct() {
    let { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      id: "",
      name: "",
      category_id: "",
      location: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      description: "",
      price: "",
      speed: "",
      size: "",
      person: "",
      beds: "",
      fuelCapacity: "",
    });
    const [bookingData, setBookingData] = useState({});
    const [related, setRelatedData] = useState({});

    useEffect(() => {
      // Fetch data from the API when the component mounts
      const fetchEventData = async () => {
        try {
          const response = await axios.get(
            `          https://651db05044e393af2d5a346e.mockapi.io/yachts/${id}`
          );
          if (response.status === 200) {
            setFormData(response.data);
            setRelatedData(response.data);

            
              // setRelatedData(filteredData);
              console.log(related);
          } else {
            // Handle error if needed
          }
        } catch (error) {
          // Handle error if needed
        }
      };
      //  setBookingData((prevData) => ({
      //    ...prevData,
      //    date: "" // Update with your default date value
      //  }));

      // Call the function to fetch event data
      fetchEventData();
    }, []);

    // const handleDateChange = (e) => {
    //   const { value } = e.target;
    //   setBookingData((prevData) => ({
    //     ...prevData,
    //     date: value,
    //   }));
    // };

    const handlePost = (e) => {
      e.preventDefault();

      const startDate = new Date(bookingData.startDate);
      const endDate = new Date(bookingData.endDate);
      const nights = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
      const userData = localStorage.getItem("user");
      const user = JSON.parse(userData);
      if (localStorage.getItem("user")) {
        axios
          .post("https://651a606d340309952f0d2d8f.mockapi.io/booking", {
            ...bookingData,
            totalPrice: formData.price * nights,
            yachtId: id,
            nights: nights,
            userId:user.user_id,
          })
          .then((response) => {
            setBookingData({
              userId: "",
              productId: "",
              date: "",
              totalPrice: "",
              nights: "",
            });

            Swal.fire({
              icon: "success",
              title: "Data saved!",
              text: "You will be redirected to /booking.",
            }).then(() => {
              navigate("/booking");
            });
          })
          .catch((error) => {
            // Handle error if needed
          });
      } else {
        // User is logged in, add data to the cart and navigate to "/login"
        const cartData = {
          yachtId: id,
          startDate: startDate,
          endDate: endDate,
          nights: nights,
          totalPrice: formData.price * nights,
        };

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        existingCart.push(cartData);

        localStorage.setItem("cart", JSON.stringify(existingCart));
        console.log(cartData);
        console.log(formData.startDate);
        Swal.fire({
          icon: "success",
          title: "Item added to cart!",
          text: "You will be redirected to /login.",
        }).then(() => {
          navigate("/login");
        });
      }
    };
    return (
      <main id="content">
        <div class="container">
          <nav class="py-3" aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-no-gutter mb-0 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <a href="#">All yachts</a>
              </li>
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <a href="#">Yachts</a>
              </li>
              <li
                class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active"
                aria-current="page"
              >
                Park Avenue Baker Street London
              </li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Breadcrumb --> */}
        <div class="mb-8">
          {/* <!-- Images Carousel --> */}
          <div
            class="js-slick-carousel u-slick u-slick__img-overlay"
            data-arrows-classes="d-none d-md-inline-block u-slick__arrow-classic u-slick__arrow-centered--y rounded-circle"
            data-arrow-left-classes="flaticon-back u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left ml-md-4 ml-xl-8"
            data-arrow-right-classes="flaticon-next u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right mr-md-4 mr-xl-8"
            data-infinite="true"
            data-slides-show="1"
            data-slides-scroll="1"
            data-center-mode="true"
            data-pagi-classes="d-md-none text-center u-slick__pagination mt-5 mb-0"
            data-responsive='[{
                          "breakpoint": 1480,
                          "settings": {
                              "centerPadding": "300px"
                          }
                      }, {
                          "breakpoint": 1199,
                          "settings": {
                              "centerPadding": "200px"
                          }
                      }, {
                          "breakpoint": 992,
                          "settings": {
                              "centerPadding": "120px"
                          }
                      }, {
                          "breakpoint": 554,
                          "settings": {
                              "centerPadding": "20px"
                          }
                      }]'
          >
            {" "}
            <div
              className="js-slide bg-img-hero min-height-550"
              style={{
                backgroundImage: `url(${formData.image1})`,
                width: "100%",
                backgroundAttachment: "cover",
                backgroundSize: "cover",
                backgroundPosition: "center", // Center the image horizontally and vertically
              }}
            ></div>
            <div
              className="js-slide bg-img-hero min-height-550"
              style={{
                backgroundImage: `url(${formData.image2})`,
                width: "100%",
                backgroundAttachment: "cover",
                backgroundSize: "cover",
                backgroundPosition: "center", // Center the image horizontally and vertically
              }}
            ></div>
            <div
              className="js-slide bg-img-hero min-height-550"
              style={{
                backgroundImage: `url(${formData.image3})`,
                width: "100%",
                backgroundAttachment: "cover",
                backgroundSize: "cover",
                backgroundPosition: "center", // Center the image horizontally and vertically
              }}
            ></div>
            <div
              className="js-slide bg-img-hero min-height-550"
              style={{
                backgroundImage: `url(${formData.image4})`,
                width: "100%",
                backgroundAttachment: "cover",
                backgroundSize: "cover",
                backgroundPosition: "center", // Center the image horizontally and vertically
              }}
            ></div>
          </div>
          {/* <!-- End Images Carousel --> */}
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-xl-9">
              <div class="d-block d-md-flex flex-center-between align-items-start mb-3">
                <div class="mb-3">
                  <div class="d-block d-md-flex flex-horizontal-center mb-2 mb-md-0">
                    <h4 class="font-size-23 font-weight-bold mb-1 mr-3 pr-1">
                      {formData.name}
                    </h4>
                    <div class="d-inline-flex align-items-center font-size-13 text-lh-1">
                      <div class="green-lighter mr-2 letter-spacing-2">
                        <small class="fas fa-star"></small>
                        <small class="fas fa-star"></small>
                        <small class="fas fa-star"></small>
                        <small class="fas fa-star"></small>
                        <small class="fas fa-star"></small>
                      </div>
                      <span class="text-secondary font-size-14 mt-1">
                        18 Reviews
                      </span>
                    </div>
                  </div>
                  <div class="d-block d-md-flex flex-horizontal-center font-size-14 text-gray-1">
                    <i class="icon flaticon-placeholder mr-2 font-size-20">
                      {formData.location}
                    </i>

                    <a href="#" class="ml-1 d-block d-md-inline">
                      - View on map
                    </a>
                  </div>
                </div>
                <ul class="list-group list-group-borderless list-group-horizontal custom-social-share">
                  <li class="list-group-item px-1">
                    <a
                      href="#"
                      class="height-45 width-45 border rounded border-width-2 flex-content-center"
                    >
                      <i class="flaticon-like font-size-18 text-dark"></i>
                    </a>
                  </li>
                  <li class="list-group-item px-1">
                    <a
                      href="#"
                      class="height-45 width-45 border rounded border-width-2 flex-content-center"
                    >
                      <i class="flaticon-share font-size-18 text-dark"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="py-4 border-top border-bottom mb-4">
                <ul class="list-group list-group-borderless list-group-horizontal flex-center-between text-center mx-md-4 flex-wrap">
                  <li class="list-group-item text-lh-sm ">
                    <i class="flaticon-ruler text-primary font-size-40 mb-1 d-block"></i>
                    <div class="text-gray-1">{formData.size} M</div>
                  </li>
                  <li class="list-group-item text-lh-sm ">
                    <i class="flaticon-download-speed text-primary font-size-40 mb-1 d-block"></i>
                    <div class="text-gray-1">{formData.speed} KMPH </div>
                  </li>
                  <li class="list-group-item text-lh-sm ">
                    <i class="flaticon-user-2 text-primary font-size-40 mb-1 d-block"></i>
                    <div class="text-gray-1">{formData.person} People</div>
                  </li>
                  <li class="list-group-item text-lh-sm ">
                    <i class="flaticon-bed-1 text-primary font-size-40 mb-1 d-block"></i>
                    <div class="text-gray-1">{formData.beds} Beds</div>
                  </li>
                </ul>
              </div>
              <div class="border-bottom position-relative">
                <h5 class="font-size-21 font-weight-bold text-dark"></h5>
                <p>{formData.description}</p>
                <div class="collapse" id="collapseLinkExample">
                  <p>
                    Once inside the historic palace located on the Right Bank of
                    the Seine, see unmissable and iconic sights such as the Mona
                    Lisa and Venus de Milo. Discover masterpieces of the
                    Renaissance and ancient Egyptian relics, along with paintings
                    from the 13th to 20th centuries, prints from the Royal
                    Collection, and much more.
                  </p>
                </div>

                <a
                  class="link-collapse link-collapse-custom gradient-overlay-half mb-5 d-inline-block border-bottom border-primary"
                  data-toggle="collapse"
                  href="#collapseLinkExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseLinkExample"
                >
                  <span class="link-collapse__default font-size-14">
                    View More{" "}
                    <i class="flaticon-down-chevron font-size-10 ml-1"></i>
                  </span>
                  <span class="link-collapse__active font-size-14">
                    View Less <i class="flaticon-arrow font-size-10 ml-1"></i>
                  </span>
                </a>
              </div>
              <div class="border-bottom py-4">
                <h5 class="font-size-21 font-weight-bold text-dark mb-4">
                  Amenities
                </h5>
                <ul class="list-group list-group-borderless list-group-horizontal list-group-flush no-gutters row">
                  <li class="col-md-4 mb-3 list-group-item">
                    <i class="flaticon-wifi-signal mr-3 text-primary font-size-24"></i>
                    Wifi
                  </li>
                  <li class="col-md-4 mb-3 list-group-item">
                    <i class="flaticon-alarm mr-3 text-primary font-size-24"></i>
                    Wake-up call
                  </li>
                  <li class="col-md-4 mb-3 list-group-item">
                    <i class="flaticon-bathrobe mr-3 text-primary font-size-24"></i>
                    Bathrobes
                  </li>
                  <li class="col-md-4 mb-3 list-group-item">
                    <i class="flaticon-weightlifting mr-3 text-primary font-size-24"></i>
                    Fitness center
                  </li>
                  <li class="col-md-4 mb-3 list-group-item">
                    <i class="flaticon-phone-call mr-3 text-primary font-size-24"></i>
                    Telephone
                  </li>
                  <li class="col-md-4 mb-3 list-group-item">
                    <i class="flaticon-folded-towel mr-3 text-primary font-size-24"></i>
                    Dry cleaning
                  </li>
                  <li class="col-md-4 mb-3 list-group-item">
                    <i class="flaticon-wine-glass mr-3 text-primary font-size-24"></i>
                    Beverages
                  </li>
                  <li class="col-md-4 mb-3 list-group-item">
                    <i class="flaticon-hair-dryer mr-3 text-primary font-size-24"></i>
                    Hair dryer
                  </li>
                  <li class="col-md-4 mb-3 list-group-item">
                    <i class="flaticon-desk-chair mr-3 text-primary font-size-24"></i>
                    High chair
                  </li>
                  <li class="col-md-4 mb-3 list-group-item">
                    <i class="flaticon-hamburger mr-3 text-primary font-size-24"></i>
                    Kitchen
                  </li>
                  <li class="col-md-4 mb-3 list-group-item">
                    <i class="flaticon-air-conditioner mr-3 text-primary font-size-24"></i>
                    Air Conditioning
                  </li>
                  <li class="col-md-4 mb-3 list-group-item">
                    <i class="flaticon-slippers mr-3 text-primary font-size-24"></i>
                    Slippers
                  </li>
                </ul>
              </div>
              <div class="border-bottom py-4">
                <h5 class="font-size-21 font-weight-bold text-dark mb-4">
                  Specifications
                </h5>
                <ul class="list-group list-group-borderless list-group-horizontal list-group-flush no-gutters row">
                  <li class="col-md-4 mb-5 list-group-item py-0">
                    <div class="font-weight-bold text-dark">Make</div>
                    <span class="text-gray-1">Sailing Yacht</span>
                  </li>
                  <li class="col-md-4 mb-5 list-group-item py-0">
                    <div class="font-weight-bold text-dark">Engine Model</div>
                    <span class="text-gray-1">C32A</span>
                  </li>
                  <li class="col-md-4 mb-5 list-group-item py-0">
                    <div class="font-weight-bold text-dark">Length</div>
                    <span class="text-gray-1">{formData.size}</span>
                  </li>
                  <li class="col-md-4 mb-5 list-group-item py-0">
                    <div class="font-weight-bold text-dark">Gross Weight</div>
                    <span class="text-gray-1">278,000 lb</span>
                  </li>
                  <li class="col-md-4 mb-5 list-group-item py-0">
                    <div class="font-weight-bold text-dark">Hull Material</div>
                    <span class="text-gray-1">Fiberglass</span>
                  </li>
                  <li class="col-md-4 mb-5 list-group-item py-0">
                    <div class="font-weight-bold text-dark">Draft</div>
                    <span class="text-gray-1">5.92 ft</span>
                  </li>
                  <li class="col-md-4 mb-5 list-group-item py-0">
                    <div class="font-weight-bold text-dark">Fuel Capacity</div>
                    <span class="text-gray-1">{formData.fuelCapacity}</span>
                  </li>
                  <li class="col-md-4 mb-5 list-group-item py-0">
                    <div class="font-weight-bold text-dark">Fuel Type</div>
                    <span class="text-gray-1">Diesel</span>
                  </li>
                  <li class="col-md-4 mb-5 list-group-item py-0">
                    <div class="font-weight-bold text-dark">Manufacturer</div>
                    <span class="text-gray-1">Caterpillar</span>
                  </li>
                  <li class="col-md-4 mb-5 list-group-item py-0">
                    <div class="font-weight-bold text-dark">Passengers </div>
                    <span class="text-gray-1">{formData.person} </span>
                  </li>
                  <li class="col-md-4 mb-5 list-group-item py-0">
                    <div class="font-weight-bold text-dark">Max Speed</div>
                    <span class="text-gray-1">{formData.speed} KMPH</span>
                  </li>
                </ul>
              </div>
              <div class="border-bottom py-4">
                <h5 class="font-size-21 font-weight-bold text-dark mb-4">
                  Location
                </h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7772.225184901051!2d80.28441927545006!3d13.092050163095971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d13.098645!2d80.2916092!4m5!1s0x3a526f5213f46501%3A0x56d2a4b14dba42f2!2sMadras%20High%20Court%2C%20High%20Ct%20Rd%2C%20Parry&#39;s%20Corner%2C%20George%20Town%2C%20Chennai%2C%20Tamil%20Nadu%20600108!3m2!1d13.0867057!2d80.28774949999999!5e0!3m2!1sen!2sin!4v1580358870925!5m2!1sen!2sin"
                  width="100%"
                  height="480"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen=""
                ></iframe>
              </div>
              <div class="border-bottom py-4">
                <h5 class="font-size-21 font-weight-bold text-dark mb-4">
                  Average Reviews
                </h5>
                <div class="row">
                  <div class="col-md-4 mb-4 mb-md-0">
                    <div class="border rounded flex-content-center py-5 border-width-2">
                      <div class="text-center">
                        <h2 class="font-size-50 font-weight-bold text-primary mb-0 text-lh-sm">
                          4.2<span class="font-size-20">/5</span>
                        </h2>
                        <div class="font-size-25 text-dark mb-3">Very Good</div>
                        <div class="text-gray-1">From 40 reviews</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <h6 class="font-weight-normal text-gray-1 mb-1">
                          Cleanliness
                        </h6>
                        <div class="flex-horizontal-center mr-6">
                          <div
                            class="progress bg-gray-33 rounded-pill w-100"
                            style={{ height: "7px" }}
                          >
                            <div
                              class="progress-bar rounded-pill"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="ml-3 text-primary font-weight-bold">
                            4.8
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <h6 class="font-weight-normal text-gray-1 mb-1">
                          Facilities
                        </h6>
                        <div class="flex-horizontal-center mr-6">
                          <div
                            class="progress bg-gray-33 rounded-pill w-100"
                            style={{ height: "7px;" }}
                          >
                            <div
                              class="progress-bar rounded-pill"
                              role="progressbar"
                              style={{ width: "40%" }}
                              aria-valuenow="40"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="ml-3 text-primary font-weight-bold">
                            1.4
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <h6 class="font-weight-normal text-gray-1 mb-1">
                          Value for money
                        </h6>
                        <div class="flex-horizontal-center mr-6">
                          <div
                            class="progress bg-gray-33 rounded-pill w-100"
                            style={{ height: "7px" }}
                          >
                            <div
                              class="progress-bar rounded-pill"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="ml-3 text-primary font-weight-bold">
                            3.2
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <h6 class="font-weight-normal text-gray-1 mb-1">
                          Service
                        </h6>
                        <div class="flex-horizontal-center mr-6">
                          <div
                            class="progress bg-gray-33 rounded-pill w-100"
                            style={{ height: "7px" }}
                          >
                            <div
                              class="progress-bar rounded-pill"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="ml-3 text-primary font-weight-bold">
                            5.0
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <h6 class="font-weight-normal text-gray-1 mb-1">
                          Location
                        </h6>
                        <div class="flex-horizontal-center mr-6">
                          <div
                            class="progress bg-gray-33 rounded-pill w-100"
                            style={{ height: "7px" }}
                          >
                            <div
                              class="progress-bar rounded-pill"
                              role="progressbar"
                              style={{ width: "86%" }}
                              aria-valuenow="86"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <div class="ml-3 text-primary font-weight-bold">
                            4.8
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-bottom py-4">
                <h5 class="font-size-21 font-weight-bold text-dark mb-8">
                  Showing 16 verified guest comments
                </h5>
                <div class="media flex-column flex-md-row align-items-center align-items-md-start mb-4">
                  <div class="mr-md-5">
                    <a class="d-block" href="#">
                      <img
                        class="img-fluid mb-3 mb-md-0 rounded-circle"
                        src="../../assets/img/85x85/img1.jpg"
                        alt="Image-Description"
                      />
                    </a>
                  </div>
                  <div class="media-body text-center text-md-left">
                    <div class="mb-4">
                      <h6 class="font-weight-bold text-gray-3">
                        <a href="#">Helena</a>
                      </h6>
                      <div class="font-weight-normal font-size-14 text-gray-9 mb-2">
                        April 25, 2019 at 10:46 am
                      </div>
                      <div class="d-flex align-items-center flex-column flex-md-row mb-2">
                        <button
                          type="button"
                          class="btn btn-xs btn-primary rounded-xs font-size-14 py-1 px-2 mr-2 mb-2 mb-md-0"
                        >
                          4.6 /5{" "}
                        </button>
                        <span class="font-weight-bold font-italic text-gray-3">
                          The worst hotel ever ”
                        </span>
                      </div>
                      <p class="text-lh-1dot6 mb-0 pr-lg-5">
                        Morbi velit eros, sagittis in facilisis non, rhoncus et
                        erat. Nam posuere ultricies tortor imperdiet vitae.
                        Curabitur lacinia neque non metus
                      </p>
                    </div>
                    <div class="review">
                      <div class="row no-gutters justify-content-between align-items-center border border-color-8 border-width-2 rounded-xs p-3 px-md-3 py-md-2 pr-xl-5">
                        <div class="col">
                          <div class="font-weight-normal font-size-14 text-gray-1 mx-lg-1 my-lg-1 mb-3 mb-md-0">
                            Was This Review...?
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-7 col-xl-4">
                          <div class="d-flex justify-content-between my-lg-1">
                            <a class="text-indigo-light" href="#">
                              <i class="flaticon-like-1 font-size-15 mr-1"></i>
                              <span class="font-size-14 font-weight-normal">
                                Like
                              </span>
                            </a>
                            <a class="text-gray-7" href="#">
                              <i class="flaticon-dislike font-size-15 mr-1"></i>
                              <span class="font-size-14 font-weight-normal">
                                Dislike
                              </span>
                            </a>
                            <a class="text-red-light-2" href="#">
                              <i class="flaticon-like font-size-15 mr-1"></i>
                              <span class="font-size-14 font-weight-normal">
                                Love
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="media flex-column flex-md-row align-items-center align-items-md-start mb-0">
                  <div class="mr-md-5">
                    <a class="d-block" href="#">
                      <img
                        class="img-fluid mb-3 mb-md-0 rounded-circle"
                        src="../../assets/img/85x85/img2.jpg"
                        alt="Image-Description"
                      />
                    </a>
                  </div>
                  <div class="media-body text-center text-md-left">
                    <div class="mb-4">
                      <h6 class="font-weight-bold text-gray-3">
                        <a href="#">Ashleigh</a>
                      </h6>
                      <div class="font-weight-normal font-size-14 text-gray-9 mb-2">
                        April 25, 2019 at 10:46 am
                      </div>
                      <div class="d-flex align-items-center flex-column flex-md-row mb-2">
                        <button
                          type="button"
                          class="btn btn-xs btn-primary rounded-xs font-size-14 py-1 px-2 mr-2 mb-2 mb-md-0"
                        >
                          4.6 /5{" "}
                        </button>
                        <span class="font-weight-bold font-italic text-gray-3">
                          Was too noisy and not suitable for business meetings.”
                        </span>
                      </div>
                      <p class="text-lh-1dot6 pr-lg-5 mb-0">
                        Morbi velit eros, sagittis in facilisis non, rhoncus et
                        erat. Nam posuere ultricies tortor imperdiet vitae.
                        Curabitur lacinia neque non metus
                      </p>
                    </div>
                    <div class="review">
                      <div class="row no-gutters justify-content-between align-items-center border border-color-8 border-width-2 rounded-xs p-3 px-md-3 py-md-2 pr-xl-5">
                        <div class="col">
                          <div class="font-weight-normal font-size-14 text-gray-1 mx-lg-1 my-lg-1 mb-3 mb-md-0">
                            Was This Review...?
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-7 col-xl-4">
                          <div class="d-flex justify-content-between my-lg-1">
                            <a class="text-indigo-light" href="#">
                              <i class="flaticon-like-1 font-size-15 mr-1"></i>
                              <span class="font-size-14 font-weight-normal">
                                Like
                              </span>
                            </a>
                            <a class="text-gray-7" href="#">
                              <i class="flaticon-dislike font-size-15 mr-1"></i>
                              <span class="font-size-14 font-weight-normal">
                                Dislike
                              </span>
                            </a>
                            <a class="text-red-light-2" href="#">
                              <i class="flaticon-like font-size-15 mr-1"></i>
                              <span class="font-size-14 font-weight-normal">
                                Love
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-4">
                <h5 class="font-size-21 font-weight-bold text-dark mb-6">
                  Write a Review
                </h5>
                <div class="row">
                  <div class="col-md-4 mb-6">
                    <h6 class="font-weight-bold text-dark mb-1">Cleanliness</h6>
                    <span class="text-primary font-size-20 letter-spacing-3">
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile text-muted"></small>
                      <small class="far fa-smile text-muted"></small>
                    </span>
                  </div>
                  <div class="col-md-4 mb-6">
                    <h6 class="font-weight-bold text-dark mb-1">Facilities</h6>
                    <span class="text-primary font-size-20 letter-spacing-3">
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile text-muted"></small>
                      <small class="far fa-smile text-muted"></small>
                    </span>
                  </div>
                  <div class="col-md-4 mb-6">
                    <h6 class="font-weight-bold text-dark mb-1">
                      Value for money
                    </h6>
                    <span class="text-primary font-size-20 letter-spacing-3">
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile"></small>
                    </span>
                  </div>
                  <div class="col-md-4 mb-6">
                    <h6 class="font-weight-bold text-dark mb-1">Service</h6>
                    <span class="text-primary font-size-20 letter-spacing-3">
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile text-muted"></small>
                      <small class="far fa-smile text-muted"></small>
                    </span>
                  </div>
                  <div class="col-md-4 mb-6">
                    <h6 class="font-weight-bold text-dark mb-1">Location</h6>
                    <span class="text-primary font-size-20 letter-spacing-3">
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile"></small>
                      <small class="far fa-smile text-muted"></small>
                      <small class="far fa-smile text-muted"></small>
                    </span>
                  </div>
                </div>
                <form class="js-validate" novalidate="novalidate">
                  <div class="row mb-5 mb-lg-0">
                    {/* <!-- Input --> */}
                    <div class="col-sm-6 mb-5">
                      <div class="js-form-message">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          placeholder="Name"
                          aria-label="Jack Wayley"
                          required=""
                          data-error-class="u-has-error"
                          data-msg="Please enter your name."
                          data-success-class="u-has-success"
                        />
                      </div>
                    </div>
                    {/* <!-- End Input -->

                                      <!-- Input --> */}
                    <div class="col-sm-6 mb-5">
                      <div class="js-form-message">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          placeholder="Email"
                          aria-label="jackwayley@gmail.com"
                          required=""
                          data-msg="Please enter a valid email address."
                          data-error-class="u-has-error"
                          data-success-class="u-has-success"
                        />
                      </div>
                    </div>
                    {/* <!-- End Input --> */}
                    <div class="col-sm-12 mb-5">
                      <div class="js-form-message">
                        <div class="input-group">
                          <textarea
                            class="form-control"
                            rows="6"
                            cols="77"
                            name="text"
                            placeholder="Comment"
                            aria-label="Hi there, I would like to ..."
                            required=""
                            data-msg="Please enter a reason."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Input --> */}
                    <div class="col d-flex justify-content-center justify-content-lg-start">
                      <button
                        type="submit"
                        class="btn rounded-xs bg-blue-dark-1 text-white p-2 height-51 width-190 transition-3d-hover"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3">
              <div class="mb-4">
                <div class="border border-color-7 rounded mb-5">
                  <div class="border-bottom">
                    <div class="p-4">
                      <span class="font-size-24 text-gray-6 font-weight-bold ml-1">
                        {formData.price}€
                      </span>
                      <span class="font-size-14"> Per Day</span>
                    </div>
                  </div>

                  <div class="p-4 m-1">
                    {/* <!-- End Input -->
                                      <!-- Input --> */}
                    <span class="d-block text-gray-1 font-weight-normal mb-0 text-left">
                      From - To
                    </span>
                    <div class="mb-4">
                      <div class="border-bottom border-width-2 border-color-1">
                        <div
                          id="datepickerWrapperPick"
                          class="u-datepicker input-group"
                        >
                          <div class="input-group-prepend">
                            <span class="d-flex align-items-center mr-2 font-size-21">
                              <i class="flaticon-calendar text-primary font-weight-semi-bold"></i>
                            </span>
                          </div>
                          <input
                            type="date"
                            id="dateInput"
                            name="dateInput"
                            min="today"
                            max="2030-12-31"
                            required
                            value={bookingData.startDate}
                            onChange={(e) =>
                              setBookingData({
                                ...bookingData,
                                startDate: e.target.value,
                              })
                            }
                          />
                          <input
                            type="date"
                            id="dateInput"
                            name="dateInput"
                            min="today"
                            max="2030-12-31"
                            required
                            value={bookingData.endDate}
                            onChange={(e) =>
                              setBookingData({
                                ...bookingData,
                                endDate: e.target.value,
                              })
                            }
                          />
                          {/* <button onClick={handlePost}>Save Date</button> */}
                        </div>
                        {/* <!-- End Datepicker --> */}
                      </div>
                    </div>
                    {/* <!-- End Input --> */}
                    <div class="text-center">
                      <a
                        href="../yacht/yacht-booking.html"
                        onClick={handlePost}
                        class="btn btn-primary d-flex align-items-center justify-content-center height-60 w-100 mb-xl-0 mb-lg-1 transition-3d-hover font-weight-bold"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
                <div class="border border-color-7 rounded p-4 mb-5">
                  <h6 class="font-size-17 font-weight-bold text-gray-3 mx-1 mb-3 pb-1">
                    Why Book With Us?
                  </h6>
                  <div class="d-flex align-items-center mb-3">
                    <i class="flaticon-star font-size-25 text-primary mr-3 pr-1"></i>
                    <h6 class="mb-0 font-size-14 text-gray-1">
                      <a href="#">No-hassle best price guarantee</a>
                    </h6>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <i class="flaticon-support font-size-25 text-primary mr-3 pr-1"></i>
                    <h6 class="mb-0 font-size-14 text-gray-1">
                      <a href="#">Customer care available 24/7</a>
                    </h6>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <i class="flaticon-favorites-button font-size-25 text-primary mr-3 pr-1"></i>
                    <h6 class="mb-0 font-size-14 text-gray-1">
                      <a href="#">Hand-picked Tours &amp; Activities</a>
                    </h6>
                  </div>
                  <div class="d-flex align-items-center mb-0">
                    <i class="flaticon-airplane font-size-25 text-primary mr-3 pr-1"></i>
                    <h6 class="mb-0 font-size-14 text-gray-1">
                      <a href="#">Free Travel Insureance</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Product Cards carousel --> */}
          <div class="product-card-carousel-block product-card-carousel-v6">
            <div class="space-1">
              <div class="w-md-80 w-lg-50 text-center mx-md-auto">
                <h2 class="section-title text-black font-size-30 font-weight-bold mb-0">
                  You might also like...
                </h2>
              </div>
              <div
                class="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-3"
                data-slides-show="4"
                data-slides-scroll="1"
                data-arrows-classes="d-none d-xl-inline-block u-slick__arrow-classic v1 u-slick__arrow-classic--v1 u-slick__arrow-centered--y rounded-circle"
                data-arrow-left-classes="fas fa-chevron-left u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left"
                data-arrow-right-classes="fas fa-chevron-right u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right"
                data-pagi-classes="text-center d-xl-none u-slick__pagination mt-4"
                data-responsive='[{
                                  "breakpoint": 1025,
                                  "settings": {
                                      "slidesToShow": 3
                                  }
                              }, {
                                  "breakpoint": 992,
                                  "settings": {
                                      "slidesToShow": 2
                                  }
                              }, {
                                  "breakpoint": 768,
                                  "settings": {
                                      "slidesToShow": 1
                                  }
                              }, {
                                  "breakpoint": 554,
                                  "settings": {
                                      "slidesToShow": 1
                                  }
                              }]'
              >
                <div class="js-slide mt-5">
                  <div class="card transition-3d-hover shadow-hover-2 w-100 h-100">
                    <div class="position-relative">
                      <a
                        href="../yacht/yacht-single-v1.html"
                        class="d-block gradient-overlay-half-bg-gradient-v5"
                      >
                        <img
                          class="card-img-top"
                          src="../../assets/img/300x230/img21.jpg"
                          alt="Image Description"
                        />
                      </a>
                      <div class="position-absolute top-0 right-0 pt-3 pr-3">
                        <button
                          type="button"
                          class="btn btn-sm btn-icon text-white rounded-circle"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Save for later"
                        >
                          <span class="flaticon-heart-1 font-size-20"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <a href="../yacht/yacht-single-v1.html">
                            <span class="text-white font-weight-bold font-size-17">
                              Aquavita
                            </span>
                          </a>
                          <div class="text-white my-2">
                            <span class="mr-1 font-size-14">From</span>
                            <span class="font-weight-bold font-size-19">
                              £350.00
                            </span>
                            <span class="font-size-14"> / week</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 pt-3 pb-2 border-bottom">
                      <a href="../yacht/yacht-single-v1.html" class="d-block">
                        <div class="d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-placeholder mr-2 font-size-20"></i>{" "}
                          Greater London, United Kingdom
                        </div>
                      </a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-14 text-lh-1 text-primary">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">
                            18 Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3">
                      <div class="row">
                        <div class="col-6">
                          <ul class="list-unstyled mb-0">
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-ruler font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">30.53M</div>
                            </li>
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-user font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">3</div>
                            </li>
                          </ul>
                        </div>
                        <div class="col-6">
                          <ul class="list-unstyled mb-0">
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-download-speed font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">
                                {formData.distance}
                              </div>
                            </li>
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-bed-1 font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">5</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="js-slide mt-5">
                  <div class="card transition-3d-hover shadow-hover-2 w-100 h-100">
                    <div class="position-relative">
                      <a
                        href="../yacht/yacht-single-v1.html"
                        class="d-block gradient-overlay-half-bg-gradient-v5"
                      >
                        <img
                          class="card-img-top"
                          src="../../assets/img/300x230/img22.jpg"
                          alt="Image Description"
                        />
                      </a>
                      <div class="position-absolute top-0 right-0 pt-3 pr-3">
                        <button
                          type="button"
                          class="btn btn-sm btn-icon text-white rounded-circle"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Save for later"
                        >
                          <span class="flaticon-heart-1 font-size-20"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <a href="../yacht/yacht-single-v1.html">
                            <span class="text-white font-weight-bold font-size-17">
                              Anna Maria
                            </span>
                          </a>
                          <div class="text-white my-2">
                            <span class="mr-1 font-size-14">From</span>
                            <span class="font-weight-bold font-size-19">
                              {formData.price}
                            </span>
                            <span class="font-size-14"> / week</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 pt-3 pb-2 border-bottom">
                      <a href="../yacht/yacht-single-v1.html" class="d-block">
                        <div class="d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-placeholder mr-2 font-size-20"></i>{" "}
                          Greater London, United Kingdom
                        </div>
                      </a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-14 text-lh-1 text-primary">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">
                            48 Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3">
                      <div class="row">
                        <div class="col-6">
                          <ul class="list-unstyled mb-0">
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-ruler font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">30.53M</div>
                            </li>
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-user font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">3</div>
                            </li>
                          </ul>
                        </div>
                        <div class="col-6">
                          <ul class="list-unstyled mb-0">
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-download-speed font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">
                                {formData.distance}
                              </div>
                            </li>
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-bed-1 font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">5</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="js-slide mt-5">
                  <div class="card transition-3d-hover shadow-hover-2 w-100 h-100">
                    <div class="position-relative">
                      <a
                        href="../yacht/yacht-single-v2.html"
                        class="d-block gradient-overlay-half-bg-gradient-v5"
                      >
                        <img
                          class="card-img-top"
                          src="../../assets/img/300x230/img23.jpg"
                          alt="Image Description"
                        />
                      </a>
                      <div class="position-absolute top-0 right-0 pt-3 pr-3">
                        <button
                          type="button"
                          class="btn btn-sm btn-icon text-white rounded-circle"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Save for later"
                        >
                          <span class="flaticon-heart-1 font-size-20"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <a href="../yacht/yacht-single-v2.html">
                            <span class="text-white font-weight-bold font-size-17">
                              Blue Moon Cruising
                            </span>
                          </a>
                          <div class="text-white my-2">
                            <span class="mr-1 font-size-14">From</span>
                            <span class="font-weight-bold font-size-19">
                              £350.00
                            </span>
                            <span class="font-size-14"> / week</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 pt-3 pb-2 border-bottom">
                      <a href="../yacht/yacht-single-v2.html" class="d-block">
                        <div class="d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-placeholder mr-2 font-size-20"></i>{" "}
                          Greater London, United Kingdom
                        </div>
                      </a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-14 text-lh-1 text-primary">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">
                            48 Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3">
                      <div class="row">
                        <div class="col-6">
                          <ul class="list-unstyled mb-0">
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-ruler font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">30.53M</div>
                            </li>
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-user font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">3</div>
                            </li>
                          </ul>
                        </div>
                        <div class="col-6">
                          <ul class="list-unstyled mb-0">
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-download-speed font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">
                                {formData.distance}
                              </div>
                            </li>
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-bed-1 font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">5</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="js-slide mt-5">
                  <div class="card transition-3d-hover shadow-hover-2 w-100 h-100">
                    <div class="position-relative">
                      <a
                        href="../yacht/yacht-single-v2.html"
                        class="d-block gradient-overlay-half-bg-gradient-v5"
                      >
                        <img
                          class="card-img-top"
                          src="../../assets/img/300x230/img24.jpg"
                          alt="Image Description"
                        />
                      </a>
                      <div class="position-absolute top-0 right-0 pt-3 pr-3">
                        <button
                          type="button"
                          class="btn btn-sm btn-icon text-white rounded-circle"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Save for later"
                        >
                          <span class="flaticon-heart-1 font-size-20"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <a href="../yacht/yacht-single-v2.html">
                            <span class="text-white font-weight-bold font-size-17">
                              Alexanrda
                            </span>
                          </a>
                          <div class="text-white my-2">
                            <span class="mr-1 font-size-14">From</span>
                            <span class="font-weight-bold font-size-19">
                              £350.00
                            </span>
                            <span class="font-size-14"> / week</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 pt-3 pb-2 border-bottom">
                      <a href="../yacht/yacht-single-v2.html" class="d-block">
                        <div class="d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-placeholder mr-2 font-size-20"></i>{" "}
                          Greater London, United Kingdom
                        </div>
                      </a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-14 text-lh-1 text-primary">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">
                            48 Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3">
                      <div class="row">
                        <div class="col-6">
                          <ul class="list-unstyled mb-0">
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-ruler font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">30.53M</div>
                            </li>
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-user font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">3</div>
                            </li>
                          </ul>
                        </div>
                        <div class="col-6">
                          <ul class="list-unstyled mb-0">
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-download-speed font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">
                                {formData.distance}
                              </div>
                            </li>
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-bed-1 font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">5</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="js-slide mt-5">
                  <div class="card transition-3d-hover shadow-hover-2 w-100 h-100">
                    <div class="position-relative">
                      <a
                        href="../yacht/yacht-single-v1.html"
                        class="d-block gradient-overlay-half-bg-gradient-v5"
                      >
                        <img
                          class="card-img-top"
                          src="../../assets/img/300x230/img21.jpg"
                          alt="Image Description"
                        />
                      </a>
                      <div class="position-absolute top-0 right-0 pt-3 pr-3">
                        <button
                          type="button"
                          class="btn btn-sm btn-icon text-white rounded-circle"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Save for later"
                        >
                          <span class="flaticon-heart-1 font-size-20"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <a href="../yacht/yacht-single-v1.html">
                            <span class="text-white font-weight-bold font-size-17">
                              Aquavita
                            </span>
                          </a>
                          <div class="text-white my-2">
                            <span class="mr-1 font-size-14">From</span>
                            <span class="font-weight-bold font-size-19">
                              £350.00
                            </span>
                            <span class="font-size-14"> / week</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 pt-3 pb-2 border-bottom">
                      <a href="../yacht/yacht-single-v1.html" class="d-block">
                        <div class="d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-placeholder mr-2 font-size-20"></i>{" "}
                          Greater London, United Kingdom
                        </div>
                      </a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-14 text-lh-1 text-primary">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">
                            18 Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3">
                      <div class="row">
                        <div class="col-6">
                          <ul class="list-unstyled mb-0">
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-ruler font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">30.53M</div>
                            </li>
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-user font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">3</div>
                            </li>
                          </ul>
                        </div>
                        <div class="col-6">
                          <ul class="list-unstyled mb-0">
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-download-speed font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">
                                {formData.distance}
                              </div>
                            </li>
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-bed-1 font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">5</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="js-slide mt-5">
                  <div class="card transition-3d-hover shadow-hover-2 w-100 h-100">
                    <div class="position-relative">
                      <a
                        href="../yacht/yacht-single-v1.html"
                        class="d-block gradient-overlay-half-bg-gradient-v5"
                      >
                        <img
                          class="card-img-top"
                          src="../../assets/img/300x230/img22.jpg"
                          alt="Image Description"
                        />
                      </a>
                      <div class="position-absolute top-0 right-0 pt-3 pr-3">
                        <button
                          type="button"
                          class="btn btn-sm btn-icon text-white rounded-circle"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Save for later"
                        >
                          <span class="flaticon-heart-1 font-size-20"></span>
                        </button>
                      </div>
                      <div class="position-absolute bottom-0 left-0 right-0">
                        <div class="px-3 pb-2">
                          <a href="../yacht/yacht-single-v1.html">
                            <span class="text-white font-weight-bold font-size-17">
                              Anna Maria
                            </span>
                          </a>
                          <div class="text-white my-2">
                            <span class="mr-1 font-size-14">From</span>
                            <span class="font-weight-bold font-size-19">
                              £350.00
                            </span>
                            <span class="font-size-14"> / week</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-4 pt-3 pb-2 border-bottom">
                      <a href="../yacht/yacht-single-v1.html" class="d-block">
                        <div class="d-flex align-items-center font-size-14 text-gray-1">
                          <i class="icon flaticon-placeholder mr-2 font-size-20"></i>{" "}
                          Greater London, United Kingdom
                        </div>
                      </a>
                      <div class="my-2">
                        <div class="d-inline-flex align-items-center font-size-14 text-lh-1 text-primary">
                          <div class="green-lighter mr-2">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                          </div>
                          <span class="text-secondary font-size-14 mt-1">
                            18 Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3">
                      <div class="row">
                        <div class="col-6">
                          <ul class="list-unstyled mb-0">
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-ruler font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">30.53M</div>
                            </li>
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-user font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">3</div>
                            </li>
                          </ul>
                        </div>
                        <div class="col-6">
                          <ul class="list-unstyled mb-0">
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-download-speed font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">
                                {formData.distance}
                              </div>
                            </li>
                            <li class="media mb-2 text-gray-1 align-items-center">
                              <small class="mr-3">
                                <small class="flaticon-bed-1 font-size-16"></small>
                              </small>
                              <div class="media-body font-size-1">5</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  export default SingleProduct;
