import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function NavBar({ user, logoutHandler }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          {user.status === "logged" ? user.data.name : "Guest"}
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </Nav>
        <Nav>
          {user.status !== "logged" ? (
            <>
              <NavLink to="/auth/signin" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/auth/signup" className="nav-link">
                Sign Up
              </NavLink>
            </>
          ) : (
            <>
              <span className="nav-link">|</span>
              <span className="nav-link">
                <Button
                  onClick={logoutHandler}
                  variant="outline-danger"
                  size="sm"
                >
                  Logout
                </Button>
              </span>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
