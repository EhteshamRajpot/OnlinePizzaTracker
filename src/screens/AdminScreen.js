import React, { useEffect } from "react";
import { Outlet} from "react-router-dom";
import { Button, Row, Container, ButtonGroup, Col } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";

export const AdminScreen = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);

  // useEffect(() => {
  //   if (!currentUser || !currentUser.isAdmin) {
  //     navigate("/");
  //   }
  // }, [currentUser, navigate]);

  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2 mt-5">
            Admin Panel
          </h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => navigate("/admin/userList")}>
                All Users
              </Button>
              <Button onClick={() => navigate("/admin/pizzaList")}>
                All Pizzas
              </Button>
              <Button onClick={() => navigate("/admin/addNewPizza")}>
                Add New Pizza
              </Button>
              <Button onClick={() => navigate("/admin/orderList")}>
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
