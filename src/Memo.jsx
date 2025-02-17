import React, { memo, useCallback, useState } from 'react'

export default function Memo() {
    const [count , setCount ] = useState(0);
    const  inputyFunction =useCallback(()=>{
        console.log("hi there")
    },[])

  return (
    <div>
        <ButtonComponent inputyFunction={inputyFunction}></ButtonComponent>
        <button onClick={()=>{
            setCount(count + 1)
        }}>Click Me {count} </button>
    </div>
  )
}

const ButtonComponent = memo(({inputyFunction})=>{
    console.log("button clicked")

    return <div>
        <button>button clicked</button>
    </div>
})
