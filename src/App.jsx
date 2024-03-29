import { useState } from 'react'
import './App.css'
import SignUpForm from './SignUp'
import Authenticate from './Authenticate'

function App() {
  const [token, setToken] = useState("Click Button to get token");

  return (
    <>
    <h1>Create a token!</h1>
    <SignUpForm token={token} setToken={setToken}/>
    <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App
