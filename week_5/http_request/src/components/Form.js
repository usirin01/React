import React from 'react'

const Form = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e) => {
        e.preventDefault();

        const personInfo = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
        };
        saveform(personInfo);
    }
    return (
        <React.Fragment>
            <div className="col m-4 ">
                <div className="p-5  border bg-light">
                    <h3 className="p-6">Add Person </h3>
                    <div className="row">
                        <form type='submit'>
                            <input className="form-control m-1" placeholder="First name" type="text" value={firstname}
                                onChange={(e) => setFirstname(e.target.value)} />
                            <input className="form-control m-1" placeholder="Last name" type="text" value={lastname}
                                onChange={(e) => setLastname(e.target.value)} />
                            <input className="form-control m-1" placeholder="email" type="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <input className="form-control m-1" placeholder="password" type="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </form>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className="btn btn-primary" type="button" onClick={handleClick} >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Form