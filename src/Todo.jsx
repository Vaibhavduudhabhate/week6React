
import { memo, useState } from 'react'
import './App.css'
let counter = 4;
function Todo() {
    const [todo ,setTodos] = useState([{
        id:1,
        title:"vaibhav",
        description:"dummy description"
    },{
        id:2,
        title:"vaibhav",
        description:"dummy description"
    },{
        id:3,
        title:"vaibhav",
        description:"dummy description"
    }])

    function addTodo(){
        setTodos([...todo,{
            id:counter++,
            title: Math.random(),
            description: Math.random()
        }])
    }
  return (
    <>
    <button onClick={addTodo}>Add Todo</button>
      {todo.map(todos => <Todocomp key={todos.id} title={todos.title} description={todos.description}></Todocomp>)}
    </>
  )
}

function Todocomp({title ,description}) {
  return <div>
    <h1>
        {title}
    </h1>
    <h5>
        {description}
    </h5>
  </div>
}


export default Todo
