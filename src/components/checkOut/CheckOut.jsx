import React from 'react'
import {Button} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../redux/actions/orderActions'
import {Loader} from "../pages/Loader"
import {Error} from "../pages/Error"
import { Success } from '../pages/Success'
export const CheckOut = ({subTotal}) => {
  const orderState = useSelector((state) => state.orderReducer);
  const {loading, error, success} = orderState
  const dispatch = useDispatch()
	const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal))
		console.log(token)
	}
  return( 
    <>
      {loading && <Loader />}
      {error && <Error error="Something went wrong"/>}
      {success && (<Success success="Order Placed Successfully!"/>)}
      <StripeCheckout
          amount={subTotal * 100}
          shippingAddress
          token={tokenHandler}
          stripeKey="pk_test_51MiU8HIomM3o5fVD6tusYF9GbbD18eBcpJ0PLtj6v04KNFwxWoFKEeOnnaYbOjpcb6Z8UAJFoV6AWnrKWpBeJkVM00l3tPafqz"
          currency='PKR'
      >
          <Button>Pay Now</Button>
        </StripeCheckout>
    </>)}
