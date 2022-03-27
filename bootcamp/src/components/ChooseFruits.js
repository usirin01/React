import React from 'react'
import { useState } from 'react';

function ChooseFruits() {

    const [fruitList, setFruitList] = useState([
        "apple","banana","kiwi","strawberry"
    ]);
    const [chooseFruit, setChooseFruit] = useState([]);

    function handleChange(searchFruit) {
        const filterFruits = fruitList.filter((fruit) => fruit.includes(searchFruit.toLowerCase()));
        setChooseFruit(filterFruits);
    }
    return (
        <div className="CheckList container">
            <input type="search" onChange={(e) => handleChange(e.target.value)}/>
            <p>{chooseFruit.map((fruit) => 
            <div>{fruit}</div>
            )}
            </p>
        </div>
    );
}

export default ChooseFruits;