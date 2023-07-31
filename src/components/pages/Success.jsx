import React from 'react'
import { Alert } from 'react-bootstrap'
export const Success = ({success}) => {
  return (
	<div>
		<Alert variant="success">{success}</Alert>
	</div>
  )
}
