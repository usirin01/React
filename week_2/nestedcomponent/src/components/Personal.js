import React from 'react'
import PersonalData from "../foreigners.json"
const Personal = () => {

    return PersonalData.map((person) => {

        return (

            <div key={person.id} >

                <div className="row">

                    <div className="col-3">

                        <div className="bg-danger">Person</div>

                        <div className="card" style={{ width: "18rem" }}>
                            <img src={person.avatar} className="card-img-top"
                                alt="..." />
                            <div className="card-body">
                                <p className="card-text">Firstname: {person.first_name} </p>
                                <p className="card-text">Lastname: {person.last_name}</p>
                                <p className="card-text">Adress: {person.address}</p>
                                <p className="card-text">Salary: {person.salary}</p>
                                <p className="card-text">Gender: {person.gender}</p>
                                <p className="card-text">E-mail: {person.email}</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-9">

                        <div className="row">
                        <div className="bg-danger">Children</div>
                            {person.children.map((child, index) =>

                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src="https://robohash.org/inventoredolorumest.png?size=250x250&set=set1"
                                            className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">Firstname: {child.firstName} </p>
                                            <p className="card-text">Gender: {child.gender}</p>
                                            <p className="card-text">Birthday: {child.birthday}</p>
                                        </div>
                                    </div>
                            )}


                        </div>

                        <div className="row">
                            <div classNameName="bg-danger">Friend</div>
                            <div classNameName="card" style={{ width: "18rem" }}>
                                <img src="https://robohash.org/inventoredolorumest.png?size=250x250&set=set1"
                                    classNameName="card-img-top" alt="..." />
                                <div classNameName="card-body">
                                    <p classNameName="card-text">Firstname: </p>
                                    <p classNameName="card-text">Gender: </p>
                                    <p classNameName="card-text">Birthday: </p>
                                    <p classNameName="card-text">Phone: </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    })


}
export default Personal