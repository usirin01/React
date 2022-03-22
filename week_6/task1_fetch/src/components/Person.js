import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Person = ({ addperson }) => {
  const newform = addperson.map((person, index) => (
    <tr key={index}>
      <th scope="row">1</th>
      <td>{person.firstname}</td>
      <td>{person.lastname}</td>
      <td>{person.email}</td>
      <td>{person.password}</td>
      <td>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-danger" type="button">
            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
          </button>
        </div>
      </td>
    </tr>
  ))
  
  return (
    <React.Fragment>
      <div className="col m-4 ">
        <div className="p-3 border bg-light">
          <h3>Person List</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">password</th>
                <th scope="col">Confirm</th>
              </tr>
            </thead>
            <tbody>{newform}</tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Person