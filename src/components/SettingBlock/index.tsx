import React, {useState} from "react";
import Button from "../Button";

type SettingPropsType = {
    setCallBack:(value: number) => void
}
const SettingBlock = (props: SettingPropsType) => {

    const [maxValue, setMaxvalue] = useState(0)

    const onChangeMaxValueHandler = (e:any) => {
        setMaxvalue(Number(e.currentTarget.value))
    }

    const onClickSetHandler = () => {

    }

    return (

        <div className="counter">
            <div className="counter__value">
                <div className="setting-inputs">
                    <label>max value<input value = {maxValue} type="number" onChange={onChangeMaxValueHandler}/></label>
                    <label>start value<input type="number" onChange={()=> {}}/></label>
                </div>
            </div>

            <div className="counter__buttons">

                <Button title={'set'} callBack={() => props.setCallBack(maxValue)}
                 className={'btn'}/>
            </div>

добавляет функционал получения максимального значения из компонента настроек и передачи его в компонент счетчика для ограничения
        </div>
    )
}

export default SettingBlock
