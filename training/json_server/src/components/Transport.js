import React, { useEffect, useState } from 'react'

const Transport = () => {

  const [zugTime, setZugTime] = useState({})

  useEffect(() => {
    loadData()
  },[])

  const loadData = async () => {
    const url = 'http://transport.opendata.ch/v1/locations?query=Basel'
    const response = await fetch(url)
    const data = await response.json()
    setZugTime(data)
    console.log(data)
  }
  return (
    <div>
      {!zugTime && zugTime.map((item, index) => <div key={index}>{item.stations}</div>)}
    </div>
  )
}

export default Transport