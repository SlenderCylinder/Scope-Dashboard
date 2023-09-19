import React from "react";
import wfp_logo from "../assets/wfp_logo.png"; // Replace with the actual path to your logo image
import "../Styles/NotFoundPage.css"; // Add CSS for styling

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <img src={wfp_logo} alt="WFP Logo" className="logo" />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFoundPage;
