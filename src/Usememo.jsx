import React, { useEffect, useMemo, useState } from 'react'

export default function Usememo() {
    const [counter ,setCounter] = useState(0)
    const [inputValue ,setInputValue] = useState(1)
    // const [count , setCount] = useState(0);
    let count = useMemo(()=>{
        let finalCount = 0;
        for (let i = 1; i <= inputValue; i++) {
            finalCount += i            
        }
        return finalCount;
    },[inputValue])

    // useEffect(()=>{
    //     let finalCount = 0;
    //     for (let i = 1; i <= inputValue; i++) {
    //         finalCount += i            
    //     }
    //     setCount(finalCount);
    // },[inputValue])
  return (
    <div>
        <input type="" onChange={(e)=>{
            setInputValue(e.target.value);

        }} placeholder='find sum of 1 to n' />
        <br />
        Sum for 1 to {inputValue} is {count}
        <br />
        <button onClick={()=>{
            setCounter(counter + 1)
        }}>counter ({counter})</button>
    </div>
  )
}
