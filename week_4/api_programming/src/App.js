import {useState, useEffect } from 'react'

function App() {

const [apiList, setApiList] = useState([]);

useEffect (() => {
  getApiList();
},[]);

const url = "https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=97e97a059caa4862b96ba8009259d0cb&include=minutely"

const getApiList = async () => {
  const response = await fetch(url)
  const data = await response.json();
  console.log(data);
  setApiList(data);
}

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
