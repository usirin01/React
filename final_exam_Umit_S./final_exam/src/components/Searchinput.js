import React, { useState } from 'react'

const Searchinput = ({addTravelInfo}) => {

    const[departure, setDeparture] = useState('');
    const[arrival, setArrival] = useState('');
    const[date, setDate] = useState('');
    const[time, setTime] = useState('');
    const handleClick = (e) => {
        e.preventDefault()

        const searchList = {
            departure:departure,
            arrival:arrival,
            date:date,
            time:time,
        };

        addTravelInfo(searchList)

    }

  return (
    <React.Fragment>
        <div class="col">SEARCH ZUG 
            <form>
                <input type='text' placeholder='departure place' value={departure} onChange={(e) => setDeparture(e.target.value)}></input>
                <input type='text' placeholder='arrival place' value={arrival} onChange={(e) => setArrival(e.target.value)}></input>
                <input type='date' placeholder='please choose date' value={date} onChange={(e) => setDate(e.target.value)}></input>
                <input type='time' placeholder='please choose time' value={time} onChange={(e) => setTime(e.target.value)}></input>
            </form>
            <button type='submit' onClick={handleClick}>Search</button>
        </div>
    </React.Fragment>
  )
}

export default Searchinput