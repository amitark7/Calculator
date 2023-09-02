import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const[value,setValue]=useState('');


    const calculateResult=(input)=>{
      let result;

      try{
        const operators=['+','-','*','/','%']
        let operator=null;

        for(let i=0; input.length; i++)
        {
          if(operators.includes(input[i])){
            operator=input[i];
            break;
          }
        }

        if(operator===null){
          setValue(parseFloat(input).toString())
          return;
        }

        const[operand1,operand2]=  input.split
        (operator).map(parseFloat);

        switch(operator)
        {
          case '+':
              result=operand1+operand2;
              break;
          case '-':
              result=operand1-operand2;
              break;
          case '*':
              result=operand1*operand2;
              break;
          case '/':
              result=operand1/operand2;
              break;
          case '%':
              result=(operand1*operand2)/100;
              break;
          default:
            throw new Error('Invallid Operator')
        }
        setValue(result.toString())
      }
      catch(error){
        setValue('Error')
      }
    }

    const handleClickButton=(input)=>{
        if(input==='C' || input==='CE')
        {
          setValue('')
        }
        else if(input==='X')
        {
          setValue(value.slice(0,-1))
        }
        else if(input==='=')
        {
          calculateResult(value)
        }
        else{
          setValue((preValue)=>preValue+input)
        }
    }
  return (
    <div className='calculator'>
      <div className='input_box'>
       <h1 className='input'>{value}</h1>
      </div>
      <div>
        <button onClick={()=>{handleClickButton('%')}}>%</button>
        <button onClick={()=>{handleClickButton('CE')}}>CE</button>
        <button onClick={()=>{handleClickButton('C')}}>C</button>
        <button onClick={()=>{handleClickButton('X')}}>X</button>
      </div>
      <div>
        <button onClick={()=>{handleClickButton('7')}}>7</button>
        <button onClick={()=>{handleClickButton('8')}}>8</button>
        <button onClick={()=>{handleClickButton('9')}}>9</button>
        <button onClick={()=>{handleClickButton('*')}}>*</button>
      </div>
      <div>
        <button onClick={()=>{handleClickButton('4')}}>4</button>
        <button onClick={()=>{handleClickButton('5')}}>5</button>
        <button onClick={()=>{handleClickButton('6')}}>6</button>
        <button onClick={()=>{handleClickButton('-')}}>-</button>
      </div>
      <div>
        <button onClick={()=>{handleClickButton('1')}}>1</button>
        <button onClick={()=>{handleClickButton('2')}}>2</button>
        <button onClick={()=>{handleClickButton('3')}}>3</button>
        <button onClick={()=>{handleClickButton('+')}}>+</button>
      </div>
      <div>
        <button onClick={()=>{handleClickButton('00')}}>00</button>
        <button onClick={()=>{handleClickButton('0')}}>0</button>
        <button onClick={()=>{handleClickButton('.')}}>.</button>
        <button onClick={()=>{handleClickButton('=')}}>=</button>
      </div>
    </div>
  )
}

export default Calculator
