import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todo from './Todo.jsx'
import Cardwrapper from './Cardwrapper.jsx'
import Useeffect from './Useeffect.jsx'
import Usememo from './Usememo.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <hr />
    <Todo />
    <hr />
    <Cardwrapper />
    <hr />
    <Useeffect />
    <hr />
    <Usememo />
  </>
  // <StrictMode>
  // </StrictMode>,
)
