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

    setInterval(() => {
        const time = new Date();
        setFirstLocalTime(time.toLocaleString("tr-TR"));
        setSecondLocalTime(time.toLocaleString("de-DE"));
        setThirdLocalTime(time.toLocaleString("en-US"));
    }, 1000);

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