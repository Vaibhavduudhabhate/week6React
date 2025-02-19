import React, { useEffect, useMemo, useState } from 'react'

export default function Usememo2() {
    const [exchangeData ,setExchangeData] = useState({});
    const [exchangeData2 ,setExchangeData2] = useState({});
    const [bankData ,setBankData] = useState({});

    useEffect(()=>{
        setExchangeData({
            returns:100
        })
    },[])
    useEffect(()=>{
        setExchangeData2({
            returns:100
        })
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            setBankData({
                income:100
            })
        },5000)
    },[])

    const cryptoReturns = useMemo(()=>{
        console.log("Hiiii There")
        return exchangeData.returns + exchangeData2.returns;
    },[exchangeData ,exchangeData2])

    const income = (cryptoReturns + bankData.income) * 0.3
  return (
    <>
        hiii There ,your income is {income}
    </>
  )
}
