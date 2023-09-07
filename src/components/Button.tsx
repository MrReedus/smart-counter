
type ButtonPropsType = {
    title: string
    callBack:()=> void
}


const Button = ({title, callBack}: ButtonPropsType)=> {
    return (
        <button onClick={callBack}>{title}</button>
    )
}

export default Button


