import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import FirstCity from "./components/FirstCity";
import SecondCity from "./components/SecondCity";
import ThirdCity from "./components/ThirdCity";
import Button from "./components/Button";

const App = () => {
    const [firstlocaltime, setFirstLocalTime] = useState('');
    const [secondlocaltime, setSecondLocalTime] = useState('');
    const [thirdlocaltime, setThirdLocalTime] = useState('');

    setInterval((offsetUTC) => {
        // create new instance of Date
        const current_date = new Date();

        // now you need to get UTC time in msec
        const utc_time = current_date.getTime() + (current_date.getTimezoneOffset() * 60000);
 
        // create instance of several cities
        const new_date_instance = new Date(utc_time); //+ (3600000*offset));


        setFirstLocalTime(new_date_instance.toLocaleString('London', '+1'));
        setSecondLocalTime(new_date_instance.toLocaleString('Zürich', '+0'));
        setThirdLocalTime(new_date_instance.toLocaleString('New York', '+6'));
    }, );

    return (
        <React.Fragment>
            <Row>
                <FirstCity firstlocaltime={firstlocaltime} />
                <SecondCity secondlocaltime={secondlocaltime} />
                <ThirdCity thirdlocaltime={thirdlocaltime} />
                <Button />
            </Row>
        </React.Fragment>
    );
};

export default App