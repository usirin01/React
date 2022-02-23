import React from 'react'
import PersonalData from "../foreigners.json"
import Header from './Header'

const Personal = () => {

    return PersonalData.map((person) => {

        return (

            <div key={person.id} >

                <div className="row">

                    <div className="col-3">

                    <Header title = "Person"/>

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
                       
                        <Header title = "Children"/>

                            {person.children.map((child, index) =>

                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={child.avatar}
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
                        <Header title = "Friends"/>
                            {person.friends.map((friends, index) => (  
                            
                            <div className="card" style={{ width: "18rem" }}>
                                <img src= {friends.avatar}
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Firstname: {friends.firstName} </p>
                                    <p className="card-text">Gender: {friends.gender} </p>
                                    <p className="card-text">Birthday: {friends.birthday} </p>
                                    <p className="card-text">Phone: {friends.phone} </p>
                                </div>
                            </div>))}
                          

                        </div>

                    </div>
                </div>

            </div>
        )
    })


}
export default Personal