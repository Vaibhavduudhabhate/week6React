import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useTodos(){
  const [todos ,setTodos] = useState([])
  
  useEffect(()=>{
      axios.get("https://ecommerceappserver-nz53.onrender.com/api/product/get-product")
      .then((response)=>{
          setTodos(response.data.products)
      })
  },[])

  return todos;
}

const Usecallback = () => {
  const todos = useTodos();
  return (
    <div>
      {todos.length && todos.map(todo => <Product key={todo._id} name={todo.name} description={todo.description} />)}
    </div>
  )
}

function Product({name ,description}) {
    return <>
        <h1>{name}</h1>
        <p>{description}</p>
    </>    
}

export default Usecallback
