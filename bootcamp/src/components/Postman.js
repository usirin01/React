import React from 'react'
import { useState, useEffect } from 'react';

function Postman() {
    const [datam, setDatam] = useState([]);
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const url = 'https://thin-fireant-85.loca.lt/comments';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setDatam(data);
    }
    return (
        <div>
            {datam?.map((item) => <h2>{item.body}</h2>)}
        </div>
    )
}

export default Postman;