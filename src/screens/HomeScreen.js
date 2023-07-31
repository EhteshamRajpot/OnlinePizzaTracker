import {React, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Pizzas } from '../components/pages/Pizzas'
import AllPizza from '../pizza-data'
import {useDispatch, useSelector} from "react-redux"
import { getAllPizzas } from "../components/redux/actions/pizzaActions";
import { Loader } from '../components/pages/Loader'
import { Error } from '../components/pages/Error'
import Filter from "../components/pages/Filter"

export const HomeScreen = () => {
	const dispatch = useDispatch();
	const pizzaState = useSelector((state) => state.getAllPizzaReducer);
	const {loading, pizzas, error} = pizzaState;
  // console.log(pizzas)
	useEffect(() => {
		dispatch(getAllPizzas());
	}, [dispatch]);
  return (
    <>
      <Container>
        {console.log(pizzas)}
        {loading ? (
          <h6 align="center" className='mt-5'>
            <Loader/>
          </h6>
        ) : error ? (
          <Error>Error while fetching pizzas {error}</Error>
        ) : (
          <Row>
            <Filter/>
            {pizzas?.map((pizzaData) => (
              <Col md={4}>
                <Pizzas pizzaData={pizzaData} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}
