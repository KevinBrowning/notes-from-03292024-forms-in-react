import { useState } from "react";

const API_URL = 'https://fsa-jwt-practice.herokuapp.com/signup';

const SignUpForm = ({token, setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    try{
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      const json = await response.json();
      setToken(json.token);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <h2>Sign Up!</h2>
      <form onSubmit={submit}>
        <label>
          Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm