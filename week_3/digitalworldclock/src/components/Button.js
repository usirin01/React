import React from 'react'
import { Col ,DropdownButton , Dropdown } from 'react-bootstrap'

const Buttons = (props) => {

    
  const oneClick = (e) => {
    e.preventDefault();
  }

  return (
      <React.Fragment>
          <Col>
            <DropdownButton id = "special-btn" type = "submit" onClick={oneClick} >
                <Dropdown.Item href="#/action-1">First City</Dropdown.Item>
                <Dropdown.Item href="#/action-2">SEcond City</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Third City</Dropdown.Item>
            </DropdownButton>
          </Col>
      </React.Fragment>
  );
};
export default Buttons;