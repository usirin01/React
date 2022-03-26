import React from 'react'
import { useState } from 'react';

function MapAdd() {
    //Also we can use "const data = []" variable type!
    const [personList, setpersonList] = useState([
      {
        firstNames: "A",
        lastNames: "1",
      },
      {
        firstNames: "A",
        lastNames: "2",
      },
      {
        firstNames: "A",
        lastNames: "3",
      },
    ]);
    
    return (
    <div className="App">
        {personList.map((person, index) => (
        <MapAdd firstName={person.firstNames} lastName={person.lastNames} key={index}/>
        //<MapAdd {...person} />
        //<MapAdd {person={person} />
        ))}
    </div>
    );
  }

  export default MapAdd()