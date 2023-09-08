import React, {useState} from 'react';

import './App.css';
import Button from "./components/Button";
import SettingBlock from "./components/SettingBlock";
import CounterBlock from "./components/CounterBlock/Counter";

function App() {



    return (
        <div className="App">
            <SettingBlock/>
            <CounterBlock/>
        </div>
    );
}

    export default App;
