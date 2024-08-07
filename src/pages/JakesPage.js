import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function JakesPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Jake's Page</h2>
      <p className="mb-4">
        This is the content of Jake's page. Here you can add any specific
        information or components related to Jake's part of the League Analytics
        application.
      </p>
      <Button variant="primary" onClick={handleGoBack}>
        Go Back to Home
      </Button>
    </div>
  );
}

export default JakesPage;
