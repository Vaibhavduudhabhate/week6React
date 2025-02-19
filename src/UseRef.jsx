import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [incomTax ,setIncometax] = useState(2000);
    const divRef = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            console.log(divRef.current)
            divRef.current.innerHTML = 100;
        },5000)
    },[])
  return (
    <div>
        Hiii, there <div ref={divRef}>{incomTax}</div>
    </div>
  )
}
