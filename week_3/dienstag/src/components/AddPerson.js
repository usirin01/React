import React from 'react'

const AddPerson = ({addPerson}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        //console.log("handle click");
        const newPerson = {
            firstName: firstName,
            lastName: lastName,
        };
        //console.log(newPerson);
        addPerson(newPerson);

        
    };

    return (
        <React.Fragment>

            <div>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <button type="submit" onClick={handleClick}>Save</button>
            </div>

            <br />
            <br />
        </React.Fragment>

    )
}

export default AddPerson; 
