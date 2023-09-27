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

    return (
        <div className="App">
            <SettingBlock
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                handleMaxValue={handleMaxValue} reset={reset}/>
            <CounterBlock
                          maxValue={maxValue}
                          setReset={setReset}/>
        </div>
    );
}

export default App;
