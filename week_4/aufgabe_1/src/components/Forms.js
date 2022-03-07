import React, { useState } from 'react'

const Forms = ({addperson}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const handleClick = (e) => {
        e.preventDefault()

        const nameList = {
            username:username,
            email:email,
            password:password,
            confirm:confirm
        }; 

        addperson(nameList);
    };

    return (
        <React.Fragment>
            <div class="col">SIGN UP
                <form>
                    <input type='text' placeholder='Please Enter Username'
                    value={username} onChange={(e) => setUsername(e.target.value)}/> <br></br>
                    <input type='email' placeholder='Please Enter your Email' 
                    value={email} onChange={(e) => setEmail(e.target.value)}/><br></br>
                    <input type='password' placeholder='Please Enter Password' 
                    value={password} onChange={(e) => setPassword(e.target.value)}/><br></br>
                    <input type='password' placeholder='Please Repeat Password' 
                    value={confirm} onChange={(e) => setConfirm(e.target.value)}/>
                </form>
                <button type='submit' onClick={handleClick}></button>
            </div>
        </React.Fragment>
    )
}

export default Forms