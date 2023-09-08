
type ButtonPropsType = {
    title: string
    callBack:()=> void
    disabled?: boolean
    className?: string
}


const Button = ({title, callBack, disabled, className}: ButtonPropsType)=> {
    return (
        <button className={className} onClick={callBack} disabled={disabled}>{title}</button>
    )
}

export default Button


