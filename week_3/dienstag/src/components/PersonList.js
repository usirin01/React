import React from 'react'

const PersonList = (props) => {

    //console.log("Prop ile gelen data", props.propsPersonList);
    //const PersonList = props.propsPersonList;
    const personListTable = personList.map((person, index) => (
        <tr key={index}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <button>Delete</button>
        </tr>


    ))
    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {personListTable}
                </tbody>
            </table>
        </React.Fragment>

    )
}

export default PersonList;
