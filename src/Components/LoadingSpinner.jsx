import React from "react";
import "../Styles/LoadingSpinner.css"; // You need to create a corresponding CSS file for styling

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingSpinner;