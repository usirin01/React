
import { useState, useEffect } from 'react';
import Form from './components/Form';
import Person from './components/Person';

function App() {

  const [addperson, setAddperson] = useState([]);

  const saveform = (person) => {
    setAddperson([...addperson,person]);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3000/employee')
      const incomingdata = await response.json()
    };
  getData()
  }, [])

  return (
    <div className="App">
      <div className="container px-4">
        <div className="row gx-5">
          <Form saveform = {saveform}/>
          <Person addperson = {addperson}/>  
        </div>
      </div>
      
    </div>
  );
}

export default App;
