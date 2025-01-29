
import { memo, useState } from 'react'
import './App.css'

function App() {
  const [title ,setTitle] = useState("my name is Vaibhav")

  function updateTitle(){
    setTitle(`my name is ` + Math.random())
  }

  return (
    <>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />
      <Header title="vaibhav 2" />
      <Header title="vaibhav 3" />
      <Header title="vaibhav 4" />
      <Header title="vaibhav 4" />
      <Header title="vaibhav 4" />
      <Header title="vaibhav 4" />
      <Header title="vaibhav 4" />
    </>
  )
}

const Header = memo(function Header({title}) {
  return <div>
    {title}
  </div>
})


export default App
