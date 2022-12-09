import React from 'react'
import { useState} from "react";

function CreateAccount() {
    const [username, setUserName] = useState("");
    const [password, setPassword] =  useState ("")
    const [message, setMessage] = useState("");

  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("http://127.0.0.1:3000/api/v1/users", {
          method: "POST",
          body: JSON.stringify({
            username: username,
            password: password,
            
          }),
        });
        
        if (res.status === 200) {
          setUserName("");
          setPassword("");
          setMessage("User created successfully");
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <div id="register">
        <div className="Register" style={{textAlign:"center", color:"#5A738E", fontWeight:"bold"}}>
                <h2>Mo-vife</h2>
                <span>Welcome to Mo-Vife!</span>

                <div id="Column" align='center'>
                <form id='register-form' onSubmit={handleSubmit} > 
                    <input 
                        type="text" 
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUserName(e.target.value)}
                        />

                      <input 
                        type="text" 
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        /> 

                    <button className="btn">SignUp</button>

                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default CreateAccount