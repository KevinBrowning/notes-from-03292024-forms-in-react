import { useState } from "react";

const API_URL = `https://fsa-jwt-practice.herokuapp.com/signup`;


const GetToken = ({token, setToken}) => {

  const submitted = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: "some-username",
            password: "super-secret-999"
          })
        });
      const json = await response.json();
      console.log(json);
      setToken(json.token);
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <h2>Here's your token</h2>
      <form onSubmit={submitted}>
        <input type="submit" value={"Get Token"}/><br />
        <label>Token:</label><br />
        <textarea value={token} cols="60" rows="5" onChange={(event) => {
          setToken(event.target.value)}}></textarea>
      </form>
    </>
  )
};

export default GetToken 