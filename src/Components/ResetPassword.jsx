
import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import TextField from './TextField';



export default function ResetPassword() {
    const [password, setPassword] = useState()
    const {token} = useParams()


    const handleresetpassword = (e) => {
        e.preventDefault()
        console.log(password)
        axios.post(`http://localhost:7000/api/resetpassword/${token}`, {password})
        .then(res => {
            if(res.data.Status === "Success") {
               alert("password changed")
            }
        }).catch(err => console.log(err))
    }


  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <form onSubmit={handleresetpassword}>
            <TextField
            label="enter your password"
            type="password"
            id="password"
            placeholder="Password"
            onchange={(e) => setPassword(e.target.value)}
            />
          <div className="flex items-center mt-4">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-700 transform bg-blue-500 rounded-md hover:bg-black focus:outline-none" type="submit">
             Change password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}