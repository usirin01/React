import React from 'react'
import { Col ,DropdownButton , Dropdown } from 'react-bootstrap'

const Button = () => {

    
  const oneClick = (e) => {
    e.preventDefault();
  }

  return (
      <React.Fragment>
          <Col>
            <DropdownButton id = "special-btn" type = "submit" onClick={oneClick} >
                <Dropdown.Item href="#/action-1">London</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Zürich</Dropdown.Item>
                <Dropdown.Item href="#/action-3">New York</Dropdown.Item>
            </DropdownButton>
          </Col>
      </React.Fragment>
  );
};
export default Button;