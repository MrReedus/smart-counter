import React from "react";
import Button from "../Button";


const SettingBlock = ({}) => {
    return (

        <div className="counter">
            <div className="counter__value">
                <div className="setting-inputs">
                    <label>max value<input type="number"/></label>
                    <label>start value<input type="number"/></label>
                </div>
            </div>

            <div className="counter__buttons">

                <Button title={'set'} callBack={() => {
                }}/>
            </div>


        </div>
    )
}

export default SettingBlock
