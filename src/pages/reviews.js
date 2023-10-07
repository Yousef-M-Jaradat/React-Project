import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Reviews() {
  let { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://651db05044e393af2d5a346e.mockapi.io/review")
      .then((response) => {
        const filteredReviews = response.data.filter(
          (review) => review.yacht_id === id
        );
        setReviews(filteredReviews);
        console.log(reviews);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
}

export default Reviews;
