import React, {ChangeEvent, useState} from "react";
import Button from "../Button";

type SettingPropsType = {
    maxValue: number
    setMaxValue: React.Dispatch<React.SetStateAction<number>>

    reset: boolean
}
const SettingBlock = ({reset, maxValue, setMaxValue}: SettingPropsType) => {

    const [disabled, setDisabled] = useState(false)
    const setButtonHandler = (maxValue: number) => {
        setDisabled(true)
    }

    React.useEffect(() => {
        setDisabled(reset ? false : true);
    }, [reset]);


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value)) // приводим к числу значение из инпута
    }

    return (

        <div className="counter">
            <div className="counter__value">
                <div className="setting-inputs">
                    <label>max value<input value={maxValue} type="number" onChange={onChangeMaxValueHandler}/></label>
                    <label>start value<input type="number" onChange={() => {
                    }}/></label>
                </div>
            </div>

            <div className="counter__buttons">

                <Button title={'set'} callBack={() => setButtonHandler(maxValue)}
                        className={disabled ? 'btn-disabled' : 'btn'} disabled={disabled}/>

            </div>


        </div>
    )
}

export default SettingBlock
