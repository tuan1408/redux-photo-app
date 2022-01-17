import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Header.scss";

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              href="https://www.youtube.com/channel/UCG2ovypNCpVOTFeY1YCocmQ"
              target="_blank"
              rel="noopener noreferrer"
              className="header__link header__title"
            >
              Easy Frontend
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__link--active" : "header__link"
              }
              to="photos/"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
