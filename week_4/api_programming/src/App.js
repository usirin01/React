import {useState, useEffect } from 'react'

function App() {

const [apiList, setApiList] = useState([]);

useEffect (() => {
  async function getData() {
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
    setApiList(data);
  }
  getData();
},[]);

const url = "https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=97e97a059caa4862b96ba8009259d0cb&include=minutely"



  return (
    <div className="App">
            {apiList.map((item) => <h2>{item.data}</h2>)}
    </div>
  );
}

export default App;
