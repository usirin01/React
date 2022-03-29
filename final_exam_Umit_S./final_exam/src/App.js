import './App.css';
import Transportapi from './components/Transportapi';
import Searchinput from './components/Searchinput';
import Showresult from './components/Showresult';
import React, { useState } from 'react'


function App() {

  // const [addTravelInfo, setAddTravelInfo] = useState([]);
  // const [zugList, setZugList] = useState([]);
  // const addTravelInfo = (pnewList) => {
  //   setZugList([...list,pnewList]);
  // }

  return (
    <div className="App">
      <Transportapi />
      <Searchinput addTravelInfo/>
      <Showresult zugList/>
    </div>
  );
}

export default App;
