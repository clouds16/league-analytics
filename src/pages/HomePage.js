// src/components/pages/HomePage.js

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../utils/logo.svg"
import Layout from '../components/layout'

function HomePage() {
  const navigate = useNavigate();

  const handleGoToJakesPage = () => {
    navigate("/jake");
  };

  const getFreeRotationChamps = useMemo(async () => {
    const url = 'https://developer.riotgames.com/apis#account-v1/lol/platform/v3/champion-rotations'

    try {
      const champs = await fetch('')
    } catch (e) {
      console.error(e)
    }
  })
  useEffect(() => {

  })

  return (
    <>
      <Layout>
        <Container fluid className="p-0">
          <Row className="justify-content-center align-items-center min-vh-100 bg-light">
            <Col xs={12} md={8} lg={6} className="text-center">
              <img
                src={logo}
                className="img-fluid mb-4"
                alt="logo"s
                style={{ maxWidth: "200px" }}
              />
              <h1 className="mb-4">Welcome to League Analytics</h1>
              <p className="mb-4">
                Edit <code>src/components/pages/HomePage.js</code> and save to
                reload.
              </p>
              <a
                className="btn btn-link mb-4"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <div>
                <Button variant="primary" onClick={handleGoToJakesPage}>
                  Go to Jake's Page
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

      </Layout>
    </>
  );
}

export default HomePage;
