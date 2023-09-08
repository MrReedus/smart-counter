import React, {useState} from 'react';

import './App.css';
import Button from "./components/Button";
import SettingBlock from "./components/SettingBlock";
import CounterBlock from "./components/CounterBlock/Counter";

function App() {
    const [maxValue, setMaxValue] = useState(5); // Создаем состояние value
    const handleMaxValue  = (value:number) => {
        setMaxValue(value)
    }

    return (
        <div className="App">
            <SettingBlock setCallBack={(value) => handleMaxValue(value)}/>
            <CounterBlock maxValue={maxValue}/>
        </div>
    );
}

    export default App;
