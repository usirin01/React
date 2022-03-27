import {useState, useEffect } from 'react'

function url(){
  return "https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=97e97a059caa4862b96ba8009259d0cb&include=minutely"
}

function App() {

const [apiList, setApiList] = useState([]);

useEffect (() => {
  getApiList();
},[]);

const getApiList = async () => {
  const response = await fetch(url)
  const data = await response.json();
  console.log(data);
}

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
