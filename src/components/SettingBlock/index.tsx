import React, {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import Button from "../Button";

type SettingPropsType = {
    count: number
    maxValue: number
    setMaxValue: Dispatch<React.SetStateAction<number>>
    setCount: Dispatch<SetStateAction<number>>
    setIsFocus: Dispatch<SetStateAction<boolean>>
    settingCallBack: (value: boolean) => void
    inCorrectValue: boolean
    callbackStartValue: (value: string) => void
    callbackMaxValue: (value: string) => void

//     handleMaxValue: (value: number) => void
//     reset: boolean
}
const SettingBlock = ({
                          callbackStartValue,
                          callbackMaxValue,
                          maxValue,
                          setMaxValue,
                          setCount,
                          setIsFocus,
                          count,
                          settingCallBack,
                          inCorrectValue
                      }: SettingPropsType) => {

    const [initialStartValue, setInitialStartValue] = useState(0)
    const [initialMaxValue, setInitialMaxValue] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const isCorrectValue = () => {
        settingCallBack(false);
        setIsFocus(true);
        setDisabled(false)
    }
    const isNotcorrectValue = () => {
        settingCallBack(true);
        setIsFocus(false);
        setDisabled(true);
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value);
        setInitialMaxValue(value);
        (value < 0 || value === initialStartValue || value < initialStartValue || initialStartValue < 0) ? isNotcorrectValue() : isCorrectValue();

    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value);
        setInitialStartValue(value);
        (value < 0 || value === initialMaxValue || value > initialMaxValue || initialMaxValue < 0) ? isNotcorrectValue() : isCorrectValue();
    }

    const setterSetValues = () => {
        setMaxValue(initialMaxValue);
        setCount(initialStartValue);
    }

    const inputError = {
        border: '1px solid red',

        opacity: '0.9',
        color: 'red',

    }

    let inCorrectInputMax = initialMaxValue < 0 || initialStartValue >= initialMaxValue || initialMaxValue < 0
    let inCorrectInputStart = initialStartValue < 0 || initialStartValue >= initialMaxValue || initialStartValue < 0

    return (
        <div className="counter">
            <div className="counter__value">
                <div className="setting-inputs">
                    <label>max value
                        <input style={inCorrectInputMax ? inputError : {}}
                               type="number"

                               onChange={onChangeMaxValue}
                               onFocus={() => setIsFocus(true)}
                               onBlur={() => setIsFocus(false)}

                        /></label>
                    <label>start value
                        <input style={inCorrectInputStart ? inputError : {}}
                               type="number"

                               onChange={onChangeStartValue}
                               onFocus={() => setIsFocus(true)}
                               onBlur={() => setIsFocus(false)}/>
                    </label>
                </div>
            </div>

            <div className="counter__buttons">

                <Button title={'set'} callBack={setterSetValues}
                        className={'btn'} disabled={disabled}/>

            </div>


        </div>
    )
}

export default SettingBlock
