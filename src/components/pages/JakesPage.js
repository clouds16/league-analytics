import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import useLolData from "../../hooks/useLolData";
import ChampionCard from "../compareChamp/ChampionCard.js";

function JakesPage() {
  const navigate = useNavigate();
  const [aatroxLevel, setAatroxLevel] = useState(1);
  const [akaliLevel, setAkaliLevel] = useState(1);
  const {
    data: aatroxData,
    loading: aatroxLoading,
    error: aatroxError,
  } = useLolData("Aatrox");
  const {
    data: akaliData,
    loading: akaliLoading,
    error: akaliError,
  } = useLolData("Akali");

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Featured Champions</h2>
      <Row>
        <Col md={6}>
          {aatroxLoading ? (
            <div>Loading...</div>
          ) : aatroxError ? (
            <div>Error: {aatroxError}</div>
          ) : (
            <ChampionCard
              champion={aatroxData}
              level={aatroxLevel}
              setLevel={setAatroxLevel}
              otherChampion={akaliData}
              otherLevel={akaliLevel}
              isAatrox={true}
            />
          )}
        </Col>
        <Col md={6}>
          {akaliLoading ? (
            <div>Loading...</div>
          ) : akaliError ? (
            <div>Error: {akaliError}</div>
          ) : (
            <ChampionCard
              champion={akaliData}
              level={akaliLevel}
              setLevel={setAkaliLevel}
              otherChampion={aatroxData}
              otherLevel={aatroxLevel}
              isAatrox={false}
            />
          )}
        </Col>
      </Row>
      <Button variant="primary" onClick={handleGoBack} className="mt-3">
        Go Back to Home
      </Button>
    </Container>
  );
}

export default JakesPage;
