// src/JakesPage.js
import React from "react";
import { Link } from "react-router-dom";

function JakesPage() {
  return (
    <div>
      <h2>Jake's Page</h2>
      <p>This is the content of Jake's page.</p>
      <Link to="/">
        <button>Go Back to Home</button>
      </Link>
    </div>
  );
}

export default JakesPage;
