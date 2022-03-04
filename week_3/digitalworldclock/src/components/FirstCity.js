import React from 'react'
import { Col } from 'react-bootstrap'

const FirstCity = (props) => {
  return (
    <React.Fragment>
      <Col>FirstCity {props.firstlocaltime}</Col>
    </React.Fragment>
  )
}

export default FirstCity;