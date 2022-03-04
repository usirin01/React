import React from 'react'
import { Col } from 'react-bootstrap'

const SecondCity = (props) => {
  return (
    <React.Fragment>
      <Col>Zürich {props.secondlocaltime}</Col>
    </React.Fragment>
  )
}

export default SecondCity;