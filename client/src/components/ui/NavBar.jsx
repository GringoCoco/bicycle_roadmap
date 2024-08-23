import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function NavBar({ user, logoutHandler }) {
  return (
    <Navbar bg="success" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <h3>ТВОЙ маршрут🚴</h3>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link text-white">
            Главная страница
          </NavLink>
        </Nav>
        <Nav>
          {user.status !== "logged" ? (
            <>
              <NavLink to="/auth/login" className="nav-link text-white">
                Login
              </NavLink>
              <NavLink to="/auth/signup" className="nav-link text-white">
                Sign Up
              </NavLink>
            </>
          ) : (
            <>
            
              <NavLink to="/user" className="nav-link text-white">
                Кабинет
              </NavLink>
              <span className="nav-link text-white">|</span>

              <Button onClick={logoutHandler} variant="light" size="sm">
                Logout
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
