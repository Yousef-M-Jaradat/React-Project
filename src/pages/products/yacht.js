// Import necessary dependencies
import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import { useParams } from 'react-router-dom';

// Define the Yacht component
function Yacht() {
  // Access the 'id' parameter from the URL
  const { id } = useParams();
  return (
    <div>
      {/* You can use the 'id' from the URL in your Yacht component */}
      <p> { id }</p>
      {/* ... (other code) */}
    </div>
  );
}

// Export the Yacht component
export default Yacht;