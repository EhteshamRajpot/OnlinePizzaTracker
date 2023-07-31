import React from 'react'
import { Spinner } from "react-bootstrap";
export const Loader = () => {
  return (
    <div>
      <Spinner animation="border" variant="info" style={{width: "100px", height: "100px"}}/>
    </div>
  );
}
