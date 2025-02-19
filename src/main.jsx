import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todo from './Todo.jsx'
import Cardwrapper from './Cardwrapper.jsx'
import Useeffect from './Useeffect.jsx'
import Usememo from './Usememo.jsx'
import Memo from './Memo.jsx'
import Usecallback from './Usecallback.jsx'
import Usememo2 from './Usememo2.jsx'
import UseRef from './UseRef.jsx'

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
    <hr />
    <Memo />
    <hr />
    <Usecallback />
    <hr />
    <Usememo2 />
    <hr />
    <UseRef />
  </>
  // <StrictMode>
  // </StrictMode>,
)
