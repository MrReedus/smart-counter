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
const SettingBlock = ({maxValue, setMaxValue, setCount, setIsFocus}: SettingPropsType) => {


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

    const [initialStartValue, setInitialStartValue] = useState('')
    const [initialMaxValue, setInitialMaxValue] = useState('')


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInitialMaxValue(e.currentTarget.value)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInitialStartValue(e.currentTarget.value)
    }

    const setterSetValues = () => {
        setMaxValue(Number(initialMaxValue))
        setCount(Number(initialStartValue))
    }


    return (

        <div className="counter">
            <div className="counter__value">
                <div className="setting-inputs">
                    <label>max value
                        <input type="number"
                               onChange={onChangeMaxValue}
                               onFocus={() => setIsFocus(true)}
                               onBlur={() => setIsFocus(false)}

                        /></label>
                    <label>start value
                        <input type="number"
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
