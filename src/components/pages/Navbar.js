import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/actions/userAction";
// import NavLogo from '../images/navLogo.jpg'
// import barLogo from '../images/barLogo.jpg'
export const NavBar = () => {
  const dispatch = useDispatch()
  const cartState = useSelector((state) => state.cartReducer); 
  const userState = useSelector(state => state.loginUserReducer)
  const {currentUser} = userState
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        style={{ marginTop: "120px" }}
      >
        <Container>
          <Navbar.Brand>
            <Image
              src={"../images/barLogo.jpg"}
              alt="logo"
              style={{ height: "100px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <>
                  <LinkContainer to="/">
                    <Nav.Link>{currentUser.name}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/">
                    <NavDropdown id="basic-nav-dropdown">
                      <LinkContainer to="/orders">
                        <NavDropdown.Item>orders</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(logOutUser());
                        }}
                      >
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </LinkContainer>
                  <LinkContainer to="/cartScreen">
                    <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

