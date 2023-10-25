import React, {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import Button from "../Button";

type SettingPropsType = {
    count: number
    maxValue: number
    setMaxValue: Dispatch<React.SetStateAction<number>>
    setCount: Dispatch<SetStateAction<number>>
    setIsFocus:  Dispatch<SetStateAction<boolean>>
    settingCallBack:(value: boolean)=> void
//     handleMaxValue: (value: number) => void
//     reset: boolean
}
const SettingBlock = ({maxValue, setMaxValue, setCount, setIsFocus, count, settingCallBack}: SettingPropsType) => {


    // const [disabled, setDisabled] = useState(false)
    // const setButtonHandler = (maxValue: number) => {
    //     setDisabled(true)
    //     handleMaxValue(maxValue)
    // }
    //
    // React.useEffect(() => {
    //     setDisabled(reset ? false : true);
    // }, [reset]);
    //

    const [initialStartValue, setInitialStartValue] = useState(0)
    const [initialMaxValue, setInitialMaxValue] = useState(0)
    const [disabled, setDisabled] = useState(false)


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
       let value = Number(e.currentTarget.value)
        setInitialMaxValue(value)

        if (value < 0) {
            settingCallBack(true);
            setIsFocus(false);
            setDisabled(true);
        } else {
            settingCallBack(false);
            setIsFocus(true);
            setDisabled(false)
        }
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        setInitialStartValue(value)
        if (value < 0) {
            settingCallBack(true);
            setIsFocus(false)
            setDisabled(true)
        } else {
            settingCallBack(false);
            setIsFocus(true)
            setDisabled(false)
        }

    }

    const setterSetValues = () => {
        setMaxValue(initialMaxValue)
        setCount(initialStartValue)
    }

const inputError = {
    border: '2px solid red',
}
    return (

        <div className="counter">
            <div className="counter__value">
                <div className="setting-inputs">
                    <label>max value
                        <input style={ initialMaxValue < 0 ? inputError : {}}
                            type="number"

                               onChange={onChangeMaxValue}
                               onFocus={() => setIsFocus(true)}
                               onBlur={() => setIsFocus(false)}

                        /></label>
                    <label>start value
                        <input style={ initialStartValue < 0 ? inputError : {}}
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
