import Button from "../Button";
import React, {useState,} from "react";

type CounterPropsType = {
    maxValue: number
    // resetCallBack:(isReset:boolean)=>void
    setReset: React.Dispatch<React.SetStateAction<boolean>>;
}
const CounterBlock = ({maxValue, setReset}: CounterPropsType) => {
    const [count, setCount] = useState(0)


    const resetButtonHandler = () => {
        setCount(0)
        setReset(true) // меняем на тру при клике (сброшено) это значение нужно передать наверх
    }


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
                        callBack={resetButtonHandler}
                        title={'reset'}/>
            </div>

        </div>
    )

}
export default CounterBlock
