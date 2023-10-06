import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Profile() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [userBookings, setUserBookings] = useState([]);
  const [isNameModified, setIsNameModified] = useState(false);
  const [isEmailModified, setIsEmailModified] = useState(false);

  // Get user data
  useEffect(() => {
    let id = 7;
    axios
      .get(`https://64db17df593f57e435b06a91.mockapi.io/AHMED/${id}`)
      .then((res) => {
        const { firstName, lastName, email } = res.data;
        setUserData({ firstName, lastName, email });
      })
      .catch((err) => {
        console.log("ERROR GETTING USER DATA:", err);
      });
  }, []);

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setIsNameModified(true);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setUserData({ ...userData, email: value });
    setIsEmailModified(true);
  };

  // Update user info
  const handleSubmitName = (e) => {
    e.preventDefault();
    setIsNameModified(false);
    updateUserProfile();
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setIsEmailModified(false);
    checkEmailExists();
  };

  const updateUserProfile = () => {
    let id = 7;
    axios
      .put(`https://64db17df593f57e435b06a91.mockapi.io/AHMED/${id}`, userData)
      .then(() => {
        Swal.fire('Updated', 'Your profile is updated', 'success');
      })
      .catch((err) => {
        console.log("ERROR UPDATING PROFILE:", err);
      });
  };

  const checkEmailExists = () => {
    axios
      .get(`https://64db17df593f57e435b06a91.mockapi.io/AHMED`)
      .then((res) => {
        const exists = res.data.some((item) => item.email === userData.email);
        if (exists) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email already exists',
          });
        } else {
          updateUserProfile();
        }
      })
      .catch((err) => {
        console.log("ERROR CHECKING EMAIL EXISTENCE:", err);
      });
  };

  // Get user's bookings
  useEffect(() => {
    let id = 7;
    axios
      .get(`https://651a606d340309952f0d2d8f.mockapi.io/booking`)
      .then((res) => {
        let BookingData = res.data.filter((item) => item.userId == id);
        setUserBookings(BookingData);
      })
      .catch((err) => {
        console.log("ERROR GETTING USER BOOKINGS:", err);
      });
  }, []);


  const activeChangeEmail = () => {
    let emailInput = document.getElementById('emailInput');
    if(emailInput.hasAttribute('readonly')) {
      emailInput.removeAttribute('readonly')
    }
    else {
      emailInput.setAttribute('readonly', true)
    }
  }

  return (
    <div
      style={{
        marginTop: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="Profile"
              />
              <span className="font-weight-bold">{userData.firstName} {userData.lastName}</span>
              <span className="text-black-50">{userData.email}</span>
            </div>
          </div>
          <div className="col-md-9 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <form onSubmit={handleSubmitName}>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="First name"
                      value={userData.firstName}
                      onChange={handleNameChange}
                    />
                    <br />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder="Last name"
                      value={userData.lastName}
                      onChange={handleNameChange}
                    />
                  </div>
                </div>
                {isNameModified && (
                  <>
                    <button className="btn btn-primary profile-button mb-3" type="submit">
                      Save Name
                    </button>
                  </>
                )}
                <br />
              </form>
              <form onSubmit={handleSubmitEmail}>
                <label className="labels">Email</label>
                  <div className="inpt d-flex align-items-center">
                  <input readOnly
                  type="email"
                  className="form-control w-50"
                  id='emailInput'
                  name="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={handleEmailChange}
                />
                <a onClick={activeChangeEmail} className='cursor-pointer ml-2'>change</a>
                  </div>
                {isEmailModified && (
                  <button className="btn btn-primary profile-button mt-3" type="submit">
                    Save Email
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bookings">
        <h1 className='text-center'>Bookings</h1>
        {userBookings.length === 0 ? (
          <h5 className="text-center">No bookings</h5>
        ) : (
          <div className="booking">
            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th className="border">Start Date</th>
                  <th className="border">End Date</th>
                  <th className="border">Nights</th>
                  <th className="border">Price</th>
                </tr>
              </thead>
              <tbody>
                {userBookings.map((booking) => (
                  <tr key={booking.id} className="border">
                    <td className="border">{booking.startDate}</td>
                    <td className="border">{booking.endDate}</td>
                    <td className="border">{booking.nights}</td>
                    <td className="border">${booking.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
