import React from "react";
import { useState } from "react";
import axios from "axios";
import TextField from "./TextField";


export default function Form() {

    const [email, setEmail] = useState('');

    function handleforgotpassword(event) {
        event.preventDefault();
        console.log(email)
        axios.post("http://localhost:7000/api/forgotpassword", {email})
        .then((res) => {
          if(res.data.Status === "Success"){
            alert("password reset link send to your email")
          }else if(res.data.Status === "User not existed"){
            alert(res.data.Status)
          }       
        }
        )
            .catch((err) => {
                console.log(err)
            });
    }


  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <form onSubmit={handleforgotpassword}>
            <TextField
            label="enter your email"
            type="email"
            id="email"
            placeholder="Email"
            onchange={(e) => setEmail(e.target.value)}
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