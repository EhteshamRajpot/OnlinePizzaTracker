import React, { useState } from 'react'
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartAction';
export const Pizzas = ({ pizzaData }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizzaData, quantity, varient));
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log()
  return (
    <>
      {/* <h1>{pizzaData.name}</h1> */}
      <Card style={{ width: "18rem", marginTop: "50px" }}>
        <Card.Img
          varient="top"
          src={pizzaData.image}
          style={{ cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizzaData?.name}</Card.Title>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients</h6>
                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizzaData?.varients.map((varient) => (
                    <option>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Price : {pizzaData?.prices[0][varient] * quantity}</Col>
            <Col md={6}>
              <Button 
              onClick={addToCartHandler}
              variant="primary"
              >Add to Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* <Modal/> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Img 
             varient="top"
             src={pizza.image} /> */}
          <Modal.Title>{pizzaData?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              varient="top"
              src={pizzaData?.image}
              style={{ cursor: "pointer", marginBottom: "20px" }}
              onClick={handleShow}
            />
          </div>
          <div>
            <h5>Description</h5>
            <h6>{pizzaData?.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
