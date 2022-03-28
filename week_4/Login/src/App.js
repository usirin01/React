import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Forms from './components/Forms';
import Save from './components/Save';

function App() {

  const [personlist, setPersonlist] = useState([]);
  const addperson = (pNameList) => {
    setPersonlist([...personlist, pNameList])
  };

  return (
    <div className="App-container">
      <Forms addperson ={addperson}/>
      <Save personlist={personlist}/>
    </div>
  );
}

export default App;
