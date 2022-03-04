import React from 'react'
import { Col } from 'react-bootstrap'

const ThirdCity = (props) => {
  return (
    <React.Fragment>
      <Col>New York {props.thirdlocaltime}</Col>
    </React.Fragment>
  )
}

export default ThirdCity;