import React, {useState} from 'react';

import './App.css';
import Button from "./components/Button";
import SettingBlock from "./components/SettingBlock";
import CounterBlock from "./components/CounterBlock/Counter";

function App() {
    const [count, setCount] = useState(0)
    const [maxValue, setMaxValue] = useState(5);
    const [isFocus, setIsFocus] = useState(false);
    const [inCorrectValue,setInCorrectValue] = useState(false);

    const settingCallBack = (value: boolean) => {

    setInCorrectValue(value)

    }
     // Создаем состояние value
    // const [reset, setReset] = useState(false);
    // const handleMaxValue = (value: number) => {
    //     setMaxValue(value)
    //     setReset(false)
    // }

    return (
        <div className="App">
            <div className="wrapper">
                <SettingBlock settingCallBack={settingCallBack} maxValue={maxValue} setMaxValue={setMaxValue} count={count} setCount={setCount} setIsFocus={setIsFocus}/>
                <CounterBlock maxValue={maxValue} count={count} setCount={setCount} isFocus={isFocus} inCorrectValue={inCorrectValue}/>
            </div>

        </div>
    );
}

export default App;
