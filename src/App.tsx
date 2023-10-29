import React, {useState} from 'react';

import './App.css';
import Button from "./components/Button";
import SettingBlock from "./components/SettingBlock";
import CounterBlock from "./components/CounterBlock/Counter";

function App() {
    const [count, setCount] = useState(0)
    const [maxValue, setMaxValue] = useState(5);
    const [isFocus, setIsFocus] = useState(false);
    const [inCorrectValue, setInCorrectValue] = useState(false);

    const settingCallBack = (value: boolean) => {
        setInCorrectValue(value)
    }

    const callbackStartValue = (value: string) => {
        // временные функции кколлбэки пока не решил что с ними делать
    }
    const callbackMaxValue = (value: string) => {
        // временные функции кколлбэки пока не решил что с ними делать
    }


    return (
        <div className="App">
            <div className="wrapper">
                <SettingBlock callbackMaxValue={callbackMaxValue} callbackStartValue={callbackStartValue}
                              inCorrectValue={inCorrectValue} settingCallBack={settingCallBack} maxValue={maxValue}
                              setMaxValue={setMaxValue} count={count} setCount={setCount} setIsFocus={setIsFocus}/>
                <CounterBlock maxValue={maxValue} count={count} setCount={setCount} isFocus={isFocus}
                              inCorrectValue={inCorrectValue}/>
            </div>

        </div>
    );
}

export default App;
