import React, {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import Button from "../Button";

type SettingPropsType = {
    count: number
    maxValue: number
    setMaxValue: Dispatch<React.SetStateAction<number>>
    setCount: Dispatch<SetStateAction<number>>
    setIsFocus:  Dispatch<SetStateAction<boolean>>
//     handleMaxValue: (value: number) => void
//     reset: boolean
}
const SettingBlock = ({maxValue, setMaxValue, setCount, setIsFocus, count}: SettingPropsType) => {


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


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInitialMaxValue(Number(e.currentTarget.value))
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInitialStartValue(Number(e.currentTarget.value))
    }

    const setterSetValues = () => {
        setMaxValue(initialMaxValue)
        setCount(initialStartValue)
    }


    return (

        <div className="counter">
            <div className="counter__value">
                <div className="setting-inputs">
                    <label>max value
                        <input style={ initialMaxValue < 0 ? {border: '2px solid red'} : {border: 'none'}}
                            type="number"
                               onChange={onChangeMaxValue}
                               onFocus={() => setIsFocus(true)}
                               onBlur={() => setIsFocus(false)}

                        /></label>
                    <label>start value
                        <input style={ initialStartValue < 0 ? {border: '2px solid red'} : {border: 'none'}}
                            type="number"
                               onChange={onChangeStartValue}
                               onFocus={() => setIsFocus(true)}
                               onBlur={() => setIsFocus(false)}/>
                    </label>
                </div>
            </div>

            <div className="counter__buttons">

                <Button title={'set'} callBack={setterSetValues}
                        className={'' ? 'btn-disabled' : 'btn'} disabled={false}/>

            </div>


        </div>
    )
}

export default SettingBlock
