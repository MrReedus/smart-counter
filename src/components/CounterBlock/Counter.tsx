import Button from "../Button";
import React, {Dispatch, SetStateAction, useState} from "react";

 type CounterPropsType = {
     maxValue: number
     count: number
     setCount: Dispatch<SetStateAction<number>>
     isFocus: boolean
//     // resetCallBack:(isReset:boolean)=>void
//     setReset: React.Dispatch<React.SetStateAction<boolean>>;
 }




const CounterBlock = ({ maxValue, count, setCount, isFocus} : CounterPropsType) => {



    const increment = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    console.log(count)
    return (
        <div className="counter">
            <div className="counter__value">
                {isFocus ?
                    <h3 style={{color: '#3fb1ce'}}>Enter values and press 'set'</h3> :
                    <h1  style={count < maxValue ? {color: '#3fb1ce'} : {color: 'red'}}>{count < 0 ? <p
                        style={{color: 'red',
                            fontSize: '12px'
                        }}>error mesage</p>: count}</h1>}

            </div>

            <div className="counter__buttons">
                <Button className={count === maxValue ? 'btn-disabled' : 'btn'}
                        callBack={increment}
                        title={'inc'}
                        disabled={count === maxValue ? true : false}/>
                <Button className={'btn'}
                        callBack={resetCount}
                        title={'reset'}/>
            </div>

        </div>
    )

}
export default CounterBlock
