import { useState } from "react";

const Authenticate = ({token}) => {
  const API_URL = 'https://fsa-jwt-practice.herokuapp.com/authenticate'

  const [message, setMessage] = useState(``);

  const click = async (event) => {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const json = await response.json();
    setMessage(json.message);
  }

  return(
    <>
    <h2>Authenticate</h2>
    <button onClick={click}>Authenticate with token</button>
    {message ? message : `Click here to authenticate`}
    </>
  )
};

export default Authenticate