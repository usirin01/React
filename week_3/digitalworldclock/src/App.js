import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import FirstCity from "./components/FirstCity";
import SecondCity from "./components/SecondCity";
import ThirdCity from "./components/ThirdCity";

const App = () => {
    const [firstlocaltime, setFirstLocalTime] = useState('');
    const [secondlocaltime, setSecondLocalTime] = useState('');
    const [thirdlocaltime, setThirdLocalTime] = useState('');

    setInterval(() => {
        const time = new Date();
        setFirstLocalTime(time.toLocaleString(""));
        setSecondLocalTime(time.toLocaleString(""));
        setThirdLocalTime(time.toLocaleString(""));
    }, 1000);

    return (
        <React.Fragment>
            <Row>
                <FirstCity firstlocaltime={firstlocaltime} />
                <SecondCity secondlocaltime={secondlocaltime} />
                <ThirdCity thirdlocaltime={thirdlocaltime} />
            </Row>
        </React.Fragment>
    );
};

export default App