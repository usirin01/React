import React from 'react'

const Save = ({ personlist }) => {

    const personlistTable = personlist.map((person, index) => (
        <tr key={index}>
            <th scope="row">1</th>
            <td>{person.username}</td>
            <td>{person.email}</td>
            <td>{person.password}</td>
            <td>{person.confirm}</td>

            <button type="submit"></button>
        </tr>

    ))

    return (
        <React.Fragment>
            <div class="col">SAVED LIST</div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">password</th>
                    </tr>
                </thead>
                <tbody>
                    {personlistTable}
                </tbody>
            </table>
        </React.Fragment >
    )
}

export default Save