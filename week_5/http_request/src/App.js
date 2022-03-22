
import { useState } from 'react';
import Form from './components/Form';
import Person from './components/Person';

function App() {

  const [addperson, setAddperson] = useState([]);

  const saveform = (person) => {
    setAddperson([...addpeople,person]);
  };

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
