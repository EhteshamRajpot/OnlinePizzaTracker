import React from 'react'
import {Alert} from 'react-bootstrap'
export const Error = ({error}) => {
  return (
	<div>
		<Alert variant="danger">{error}</Alert>
	</div>
  )
}
