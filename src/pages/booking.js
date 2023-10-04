import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Booking() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    country: "",
    city: "",
  });
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    name: "",
    date: "",
    location: "",
  });

  useEffect(() => {
    // Fetch data from one API
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          "https://651a606d340309952f0d2d8f.mockapi.io/category/1" // Replace with the actual API endpoint
        );
        if (response.status === 200) {
          setEventData(response.data);
        } else {
        }
      } catch (error) {}
    };

    // Call the function to fetch event data
    fetchEventData();

    // Cleanup the event listener when the component unmounts
    return () => {
      // Cleanup code here (if needed)
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post data to another API
      const response = await axios.post(
        "https://651a606d340309952f0d2d8f.mockapi.io/users",
        formData
      );
        setFormData({
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
          country: "",
          city: "",
        });

        navigate("/payment");
      
    } catch (error) {
      // Handle POST error
    }
  };

  return (
    <>
      <main id="content" class="bg-gray space-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-xl-9">
              <div class="mb-5 shadow-soft bg-white rounded-sm">
                <div class="py-3 px-4 px-xl-12 border-bottom">
                  <ul class="list-group flex-nowrap overflow-auto overflow-md-visble list-group-horizontal list-group-borderless flex-center-between pt-1">
                    <li class="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
                      <div class="flex-content-center mb-3 width-40 height-40 bg-primary border-width-2 border border-primary text-white mx-auto rounded-circle">
                        1
                      </div>
                      <div class="text-primary">Customer information</div>
                    </li>
                    <li class="list-group-item text-center flex-shrink-0 flex-xl-shrink-1">
                      <div class="flex-content-center mb-3 width-40 height-40 border  border-width-2 border-gray mx-auto rounded-circle">
                        2
                      </div>
                      <div class="text-gray-1">Payment information</div>
                    </li>
                    <li class="list-group-item text-center flex-shrink-0 flex-md-shrink-1">
                      <div class="flex-content-center mb-3 width-40 height-40 border  border-width-2 border-gray mx-auto rounded-circle">
                        3
                      </div>
                      <div class="text-gray-1">Booking is confirmed!</div>
                    </li>
                  </ul>
                </div>
                <div class="pt-4 pb-5 px-5">
                  <h5
                    id="scroll-description"
                    class="font-size-21 font-weight-bold text-dark mb-4"
                  >
                    Let us know who you are
                  </h5>
                  <form class="js-validate" onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-sm-6 mb-4">
                        <div class="js-form-message">
                          <label class="form-label">First Name</label>

                          <input
                            type="text"
                            placeholder="First Name"
                            value={formData.firstname}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                firstname: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div class="col-sm-6 mb-4">
                        <div class="js-form-message">
                          <label class="form-label">Last name</label>

                          <input
                            type="text"
                            placeholder="Last Name"
                            value={formData.lastname}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                lastname: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div class="col-sm-6 mb-4">
                        <div class="js-form-message">
                          <label class="form-label">Email</label>

                          <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div class="col-sm-6 mb-4">
                        <div class="js-form-message">
                          <label class="form-label">Phone</label>

                          <input
                            type="text"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div class="w-100"></div>

                      <div class="col-sm-6 mb-4">
                        <div class="js-form-message">
                          <label class="form-label">Country</label>
                          <input
                            type="text"
                            placeholder="Country"
                            value={formData.country}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                country: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div class="col-sm-6 mb-4">
                        <div class="js-form-message">
                          <label class="form-label">City</label>
                          <input
                            type="text"
                            placeholder="City"
                            value={formData.city}
                            onChange={(e) =>
                              setFormData({ ...formData, city: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div class="w-100"></div>

                      <div class="col">
                        <div class="js-form-message mb-6">
                          {/* <label class="form-label">Special Requirements</label>

                          <div class="input-group">
                            <textarea
                              class="form-control"
                              rows="4"
                              name="text"
                              placeholder=""
                              aria-label=""
                              required
                              data-msg="Please enter a reason."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="w-100"></div>

                      <div class="col-sm-6 mb-10">
                        <div class="js-form-message">
                          <h5
                            id="scroll-description"
                            class="font-size-21 font-weight-bold text-dark mb-2"
                          >
                            Let us know
                          </h5>
                          <p class="font-size-14 gray-1">
                            We'll let the property or host know when to expect
                            you.
                          </p>
                          <select
                            class="form-control js-select selectpicker dropdown-select"
                            required=""
                            data-msg="Please select country."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                            data-style="form-control font-size-16 border-width-2 border-gray font-weight-normal"
                          >
                            <option value="One" selected>
                              I don’t know
                            </option>
                            <option value="Two">I will tell later</option>
                            <option value="Three">I don’t know</option>
                            <option value="Four">I don’t know</option>
                          </select> */}
                        </div>
                      </div>

                      <div class="col-sm-6 align-self-end">
                        <div class="text-right">
                          <button
                            onClick={handleSubmit}
                            type="submit"
                            class="btn btn-primary btn-wide rounded-sm transition-3d-hover font-size-16 font-weight-bold py-3"
                          >
                            NEXT PAGE
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="mb-5 shadow-soft bg-white rounded-sm">
                <div class="py-6 px-5 border-bottom">
                  <div class="flex-horizontal-center">
                    <div class="height-50 width-50 flex-shrink-0 flex-content-center bg-primary rounded-circle">
                      <i class="flaticon-tick text-white font-size-24"></i>
                    </div>
                    <div class="ml-3">
                      <h3 class="font-size-18 font-weight-bold text-dark mb-0 text-lh-sm">
                        Thank You. Your Booking Order is Confirmed Now.
                      </h3>
                      <p class="mb-0">
                        A confirmation email has been sent to your provided
                        email address.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="pt-4 pb-5 px-5 border-bottom">
                  <h5
                    id="scroll-description"
                    class="font-size-21 font-weight-bold text-dark mb-2"
                  >
                    Traveler Information
                  </h5>
                  <ul class="list-unstyled font-size-1 mb-0 font-size-16">
                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">Booking number</span>
                      <span class="text-secondary text-right">5784-BD245</span>
                    </li>

                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">First name</span>
                      <span class="text-secondary text-right">Jessica</span>
                    </li>

                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">Last name</span>
                      <span class="text-secondary text-right">Brown</span>
                    </li>

                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">E-mail address</span>
                      <span class="text-secondary text-right">
                        Info@Jessica.com
                      </span>
                    </li>

                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">
                        Street Address and number
                      </span>
                      <span class="text-secondary text-right">
                        353 Third floor Avenue
                      </span>
                    </li>

                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">Town / City</span>
                      <span class="text-secondary text-right">
                        Paris,France
                      </span>
                    </li>

                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">ZIP code</span>
                      <span class="text-secondary text-right">75800-875</span>
                    </li>

                    <li class="d-flex justify-content-between py-2">
                      <span class="font-weight-medium">Country</span>
                      <span class="text-secondary text-right">
                        United States of america
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="pt-4 pb-5 px-5 border-bottom">
                  <h5
                    id="scroll-description"
                    class="font-size-21 font-weight-bold text-dark mb-3"
                  >
                    Payment
                  </h5>
                  <p class="">
                    Praesent dolor lectus, rutrum sit amet risus vitae,
                    imperdiet cursus neque. Nulla tempor nec lorem eu suscipit.
                    Donec dignissim lectus a nunc molestie consectetur. Nulla eu
                    urna in nisi adipiscing placerat. Nam vel scelerisque magna.
                    Donec justo urna, posuere ut dictum quis.
                  </p>
                  <a href="#" className="text-underline text-primary">
                    Payment is made by Credit Card Via Paypal.
                  </a>
                  yarn add jquery
                </div>
                <div class="pt-4 pb-5 px-5">
                  <h5
                    id="scroll-description"
                    class="font-size-21 font-weight-bold text-dark mb-3"
                  >
                    View Booking Details
                  </h5>
                  <p class="">
                    Praesent dolor lectus, rutrum sit amet risus vitae,
                    imperdiet cursus neque. Nulla tempor nec lorem eu suscipit.
                    Donec dignissim lectus a nunc molestie consectetur. Nulla eu
                    urna in nisi adipiscing placerat. Nam vel scelerisque magna.
                    Donec justo urna, posuere ut dictum quis.
                  </p>

                  <a href="#" class="text-underline text-primary">
                    https://www.mytravel.com/booking-details/?=f4acb19f-9542-4a5c-b8ee
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3">
              <div class="shadow-soft bg-white rounded-sm">
                <div class="pt-5 pb-4 px-5 border-bottom">
                  <a href="#" class="d-block mb-2">
                    {/* <img
  className="img-fluid rounded-sm"
  src={eventData.avatar} // Corrected attribute name from avater to avatar
  alt="Image-Description"
/> */}
                  </a>
                  {eventData.name}
                  <div class="flex-horizontal-center text-gray-1">
                    <i class="icon flaticon-pin-1 mr-2 font-size-15"></i>{" "}
                    {eventData.location}
                  </div>
                </div>
                <div id="basicsAccordion">
                  <div class="card rounded-0 border-top-0 border-left-0 border-right-0">
                    <div
                      class="card-header card-collapse bg-transparent border-0"
                      id="basicsHeadingOne"
                    >
                      <h5 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                          data-toggle="collapse"
                          data-target="#basicsCollapseOne"
                          aria-expanded="true"
                          aria-controls="basicsCollapseOne"
                        >
                          Booking Detail
                          <span class="card-btn-arrow font-size-14 text-dark">
                            <i class="fas fa-chevron-down"></i>
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="basicsCollapseOne"
                      class="collapse show"
                      aria-labelledby="basicsHeadingOne"
                      data-parent="#basicsAccordion"
                    >
                      <div class="card-body px-4 pt-0">
                        <ul className="list-unstyled font-size-1 mb-0 font-size-16">
                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">Date:</span>
                            <span className="text-secondary">
                              {/* <a href="#" className="text-underline">
                                Edit
                              </a> */}
                              {eventData.date}
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">
                              yacht type :{" "}
                            </span>
                            <span className="text-secondary">
                              {eventData.type}
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">From</span>
                            <span className="text-secondary">
                              {eventData.from}:00
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">To</span>
                            <span className="text-secondary">
                              {eventData.to}:00
                            </span>
                          </li>

                          <li className="d-flex justify-content-between py-2">
                            <span className="font-weight-medium">
                              Est. Distance
                            </span>
                            <span className="text-secondary">50 kilometer</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="card rounded-0 border-top-0 border-left-0 border-right-0">
                    <div
                      class="card-header card-collapse bg-transparent border-0"
                      id="basicsHeadingTwo"
                    >
                      <h5 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                          data-toggle="collapse"
                          data-target="#basicsCollapseTwo"
                          aria-expanded="false"
                          aria-controls="basicsCollapseTwo"
                        >
                          Extra
                          <span class="card-btn-arrow font-size-14 text-dark">
                            <i class="fas fa-chevron-down"></i>
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="basicsCollapseTwo"
                      class="collapse"
                      aria-labelledby="basicsHeadingTwo"
                      data-parent="#basicsAccordion"
                    >
                      <div class="card-body px-4 pt-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid.
                      </div>
                    </div>
                  </div>

                  <div class="card rounded-0 border-top-0 border-left-0 border-right-0">
                    <div
                      class="card-header card-collapse bg-transparent border-0"
                      id="basicsHeadingThree"
                    >
                      <h5 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                          data-toggle="collapse"
                          data-target="#basicsCollapseThree"
                          aria-expanded="false"
                          aria-controls="basicsCollapseThree"
                        >
                          Coupon Code
                          <span class="card-btn-arrow font-size-14 text-dark">
                            <i class="fas fa-chevron-down"></i>
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="basicsCollapseThree"
                      class="collapse show"
                      aria-labelledby="basicsHeadingThree"
                      data-parent="#basicsAccordion"
                    >
                      <div class="card-body px-4 pt-0 pb-4">
                        <form class="js-focus-state">
                          <label class="sr-only" for="CouponCodeExample1">
                            Coupon Code
                          </label>
                          <div class="input-group">
                            <input
                              type="number"
                              class="form-control"
                              name="email"
                              id="CouponCodeExample1"
                              placeholder=""
                              aria-label=""
                              aria-describedby="CouponCodeExample2"
                              required
                            />
                            <div class="input-group-append">
                              <button
                                class="btn btn-primary py-2"
                                type="button"
                                id="CouponCodeExample2"
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div class="card rounded-0 border-top-0 border-left-0 border-right-0">
                    <div
                      class="card-header card-collapse bg-transparent border-0"
                      id="basicsHeadingFour"
                    >
                      <h5 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link border-0 btn-block d-flex justify-content-between card-btn py-3 px-4 font-size-17 font-weight-bold text-dark"
                          data-toggle="collapse"
                          data-target="#basicsCollapseFour"
                          aria-expanded="false"
                          aria-controls="basicsCollapseFour"
                        >
                          Payment
                          <span class="card-btn-arrow font-size-14 text-dark">
                            <i class="fas fa-chevron-down"></i>
                          </span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="basicsCollapseFour"
                      class="collapse show"
                      aria-labelledby="basicsHeadingFour"
                      data-parent="#basicsAccordion"
                    >
                      <div class="card-body px-4 pt-0">
                        <ul class="list-unstyled font-size-1 mb-0 font-size-16">
                          <li class="d-flex justify-content-between py-2">
                            <span class="font-weight-medium">Subtotal</span>
                            <span class="text-secondary">
                              JD{eventData.price}
                            </span>
                          </li>

                          <li class="d-flex justify-content-between py-2">
                            <span class="font-weight-medium">Extra Price</span>
                            <span class="text-secondary">JD0,00</span>
                          </li>

                          <li class="d-flex justify-content-between py-2">
                            <span class="font-weight-medium">Tax</span>
                            <span class="text-secondary">0 %</span>
                          </li>

                          <li class="d-flex justify-content-between py-2 font-size-17 font-weight-bold">
                            <span class="font-weight-bold">Pay Amount</span>
                            <span class="">JD{eventData.price}</span>
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
      </main>
    </>
  );
}

export default Booking;
