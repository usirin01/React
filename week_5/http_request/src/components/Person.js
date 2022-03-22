import React from 'react'

const Person = ({ addperson }) => {
    const newform = addperson.map((person, index) => (
        <tr key={index}>
            <th scope="row">1</th>
            <td>{person.firstname}</td>
            <td>{person.lastname}</td>
            <td>{person.email}</td>
            <td>{person.password}</td>
        </tr>
))
return (
        <table>
            <tbody>{newform}</tbody>
        </table>
    )
}

export default Person
