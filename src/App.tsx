import React, {useState} from 'react';

import './App.css';
import Button from "./components/Button";
import SettingBlock from "./components/SettingBlock";
import CounterBlock from "./components/CounterBlock/Counter";

function App() {
    const [maxValue, setMaxValue] = useState(5); // Создаем состояние value
    const [reset, setReset] = useState(false);
    const handleMaxValue = (value: number) => {
        setMaxValue(value)
        setReset(false)
    }

    console.log(reset)
    // const handleReset = (resetValue: boolean) => {
    //     console.log(resetValue)
    //     setReset(true)
    // }

    return (
        <div className="App">
            <SettingBlock
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                setCallBack={(value) => handleMaxValue(value)} reset={reset}/>
            <CounterBlock
                          maxValue={maxValue}
                          setReset={setReset}/>
        </div>
    );
}

export default App;
