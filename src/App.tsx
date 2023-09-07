import React, {useState} from 'react';

import './App.css';
import Button from "./components/Button";

function App() {

   const [count, setCount] = useState(0)



  return (


    <div className="App">
<h1>{count}</h1>
        <Button callBack={() => setCount(count + 1)} title={'inc'}/>
        <Button callBack={() => setCount(0)} title={'reset'}/>

        {/*<button onClick={() => setCount(count + 1)}>inc</button>*/}
        {/*<button onClick={() => setCount(0)}>Reset</button>*/}
    </div>
  );
}

export default App;
