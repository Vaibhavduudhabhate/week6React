import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [todos ,setTodos] = useState([])

    useEffect(()=>{
        axios.get("https://ecommerceappserver-nz53.onrender.com/api/product/get-product")
        .then((response)=>{
            setTodos(response.data.products)
        })
    },[])
  return (
    <div>
      {todos.map(todo => <Product key={todo._id} name={todo.name} description={todo.description} />)}
    </div>
  )
}

function Product({name ,description}) {
    return <>
        <h1>{name}</h1>
        <p>{description}</p>
    </>    
}

export default Useeffect
