import React from 'react';
import { useState, useEffect } from 'react';

function Person() {
    const [datam, setDatam] = useState({});
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const url = 'http://localhost:3001';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setDatam(data);
    }
    return (
        <div>
            {}
        </div>
    )
}

export default Person;