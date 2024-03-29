import { useState } from 'react'
import './App.css'
import GetToken from './GetToken'
import Authenticate from './Authenticate'

function App() {
  const [token, setToken] = useState("Click Button to get token");

  return (
    <>
    <h1>Hello!</h1>
    <GetToken token={token} setToken={setToken}/>
    <Authenticate token={token}/>
    </>
  )
}

export default App
