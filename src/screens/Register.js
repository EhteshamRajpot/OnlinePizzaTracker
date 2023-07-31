import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux'
import {registerUser } from '../components/redux/actions/userAction';
import { Loader } from '../components/pages/Loader';
import { Success } from '../components/pages/Success';
import { Error } from '../components/pages/Error';

export const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmedPassword] = useState("");

  const registerState = useSelector(state => state.registerUserReducer)
  const {error, success, loading} = registerState

  const dispatch = useDispatch()

	const registerHandler = () => {
		if(password !== confirmPassword){
			alert("Password does not match")
		}
		else{
			const user = {name, email, password, confirmPassword};
			dispatch(registerUser(user))
		}
	}
  return (
    <div>
      <Container>
        {loading && <Loader align="center" className="mt-5" />}
        {success && (
          <Success success="User Register Successfully" className="mt-5" />
        )}
        {error && <Error error="something went wrong" />}
        <Form>
          <h1 className="mt-5" align="center">
            Please Sign Up
          </h1>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirme Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirme Password"
              value={confirmPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={registerHandler}>
            Sign Up
          </Button>
        </Form>
      </Container>
    </div>
  );
}
