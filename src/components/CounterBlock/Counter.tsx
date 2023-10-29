import Button from "../Button";
import React, {Dispatch, SetStateAction, useState} from "react";

type CounterPropsType = {
    maxValue: number
    count: number
    setCount: Dispatch<SetStateAction<number>>
    isFocus: boolean
    inCorrectValue: boolean
//     // resetCallBack:(isReset:boolean)=>void
//     setReset: React.Dispatch<React.SetStateAction<boolean>>;
}


const CounterBlock = ({maxValue, count, setCount, isFocus, inCorrectValue}: CounterPropsType) => {

    let error = 'incorrect value'

    const increment = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }



    return (
        <div className="counter">
            <div className="counter__value">
                {/*{isFocus && <h3 style={{color: '#3fb1ce'}}>Enter values and press 'set'</h3>}*/}
                {inCorrectValue && !isFocus && (
                    <h3 style={{color: 'red'}}>{error}</h3>
                )}

                {!inCorrectValue && !isFocus && <h1 style={count < maxValue ? {color: '#3fb1ce'} : {color: 'red'}}>{count}</h1>}

                {isFocus && <h3 style={{color: '#3fb1ce'}}>Enter values and press 'set'</h3>}


            </div>

            <div className="counter__buttons">
                <Button className={'btn'}
                        callBack={increment}
                        title={'inc'}
                        disabled={count === maxValue || isFocus ? true : false}/>
                <Button className={'btn'}
                        callBack={resetCount}
                        title={'reset'}
                        disabled={isFocus ? true : false}
                />
            </div>

        </div>
    )

}
export default CounterBlock
