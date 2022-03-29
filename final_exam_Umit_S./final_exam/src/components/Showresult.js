import React from 'react'

const Showresult =({zugList}) => {

    // const zugListTable = zugList.map((zug, index) => (
    //     <tr key={index}>
    //         <th></th>
    //         <td>{zug.id}</td>
    //         <td>{zug.name}</td>
    //         <td>{zug.departure}</td>
    //         <td>{zug.arrival}</td>
    //     </tr>    

    // ))

  return (
    <React.Fragment>
    <div class="col">ZUG LIST</div>
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>From To</th>
                <th>Zug Date</th>
                <th>Zug Time</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</React.Fragment >
  )
}

export default Showresult