import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import {addToCart, deleteFromCart} from "../components/redux/actions/cartAction"
import { CheckOut } from "../components/checkOut/CheckOut";
export const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch()
  const subTotal = cartItems.reduce((total, item) => {
    return total + item.prices[0][item.varients] * item.quantity;
  }, 0);

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h4>
                      {item.name} -- [{item.varients}]
                    </h4>
                    <h6>
                      {""}
                      {/* {console.log(
                        item.prices[0][item.varients] * item.quantity
                      )} */}
                      {/* {console.log(item.prices[0][item.varients])} */}
                      Size : {item.varients}<br/>
                      Price : {item.prices[0][item.varients]} X {item.quantity}{" "}={" "}
                      {item.prices[0][item.varients] * item.quantity}
                    </h6>
                    <h6>
                      Quantity : &nbsp;
                      <FaMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varients)
                          );
                        }}
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      <FaPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varients)
                          );
                        }}
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "80px", height: "80px" }}
                    />{" "}
                    &nbsp;&nbsp;&nbsp;
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                  </Col>
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
            <h4>Sub Total</h4>
            <h4>RS: {subTotal} /-</h4>
            <CheckOut subTotal={subTotal} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

