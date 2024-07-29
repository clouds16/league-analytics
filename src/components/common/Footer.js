// src/components/common/Footer.js

import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = ({ copyrightYear, companyName, links }) => {
  return (
    <footer className="bg-light py-4 mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <span className="text-muted">
              © {copyrightYear} {companyName}. All rights reserved.
            </span>
          </Col>
          <Col md={6}>
            <nav className="d-flex justify-content-center justify-content-md-end">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-muted text-decoration-none ms-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  copyrightYear: PropTypes.number.isRequired,
  companyName: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
