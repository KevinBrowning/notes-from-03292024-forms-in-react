import { useState } from "react";

const Authenticate = ({ token, setToken }) => {
  const API_URL = 'https://fsa-jwt-practice.herokuapp.com/authenticate'

  const [message, setMessage] = useState(``);

  const click = async (event) => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      const json = await response.json();
      setMessage(json.message);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <section>
      <h2>Authenticate</h2>
      <button onClick={click}>Authenticate token</button>
      {message ? message : `Click here to authenticate`}
      </section>
    </>
  )
};

export default Authenticate