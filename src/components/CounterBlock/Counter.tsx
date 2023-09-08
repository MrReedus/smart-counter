import Button from "../Button";
import React, {useState,useEffect} from "react";

type CounterPropsType = {
    maxValue: number
}
const CounterBlock = ({maxValue}: CounterPropsType) => {
    const [count, setCount] = useState(0)




    return (
        <div className="counter">
            <div className="counter__value">
                <h1 style={count < maxValue ? {color: '#3fb1ce'} : {color: 'red'}}>{count}</h1>
            </div>

            <div className="counter__buttons">
                <Button className={count === maxValue ? 'btn-disabled' : 'btn'}
                        callBack={() => setCount(count + 1)}
                        title={'inc'}
                        disabled={maxValue === count}/>
                <Button className={'btn'}
                        callBack={() => setCount(0)}
                        title={'reset'}/>
            </div>

        </div>
    )

}
export default CounterBlock
