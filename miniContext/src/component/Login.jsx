import { useState,useContext } from "react"
import React from 'react'
import UserContext from "../context/UserContext"


function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const {setUser} =useContext(UserContext);
const handleSubmit= (e)=>{
    e.preventDefault()
  setUser({username, password})


}

  return (
    <div>
        <h2>Login</h2>
        <input value={username} onChange={(e)=> setUsername(e.target.value)} type="text"  placeholder="username" /> {"   "}
        <input value={password} onChange={(e)=> setPassword(e.target.value)}  type="text"  placeholder="password"  />
        <button className="bg-black text-gray-200 rounded-lg px-4 py-2" onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login