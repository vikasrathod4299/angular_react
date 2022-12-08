import React, { useState } from 'react'

const Calc = (props) => {
    let [result,setResult] = useState(0)
    const handleCalc = (e)=>{
        e.preventDefault();
        switch (props.opr){
            case '*':
                setResult(parseInt(props.num1)*parseInt(props.num2))
                break;
            case '+':
                setResult(parseInt(props.num1)+parseInt(props.num2))
                break;
            case '-':
                setResult(parseInt(props.num1)-parseInt(props.num2))
                break;
            case '/':
                setResult(parseInt(props.num1)/parseInt(props.num2))
                break;
        }
    }
    return (
        <div>
            <button onClick={handleCalc}>Calculate</button>
            <h1>{result}</h1>
        </div>
    )
}

export default Calc