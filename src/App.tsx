import React, {useState} from 'react';

import './App.css';
import Button from "./components/Button";
import SettingBlock from "./components/SettingBlock";
import CounterBlock from "./components/CounterBlock/Counter";

function App() {
    const [count, setCount] = useState(0)
     const [maxValue, setMaxValue] = useState(5);
    const [isFocus, setIsFocus] = useState(false)
     // Создаем состояние value
    // const [reset, setReset] = useState(false);
    // const handleMaxValue = (value: number) => {
    //     setMaxValue(value)
    //     setReset(false)
    // }
    console.log(isFocus)
    return (
        <div className="App">
            <SettingBlock maxValue={maxValue} setMaxValue={setMaxValue} count={count} setCount={setCount} setIsFocus={setIsFocus}/>



            <CounterBlock maxValue={maxValue} count={count} setCount={setCount} isFocus={isFocus}/>
        </div>
    );
}

export default App;
