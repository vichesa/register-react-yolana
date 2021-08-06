import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Registration(props) {
  const [emailReg, setEmailReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  Axios.defaults.withCredentials = true;

  const register = () => {
    props.history.push("/");
    Axios.post("http://localhost:3001/register", {
      email: emailReg,
      username: usernameReg,
      password: passwordReg,
    }).then(() => {
      console.log("ref");
    });
  };

  return (
    <div>
      <div className="form">
        <h1>Registration</h1>
        <div>
          <label>Username</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </div>
        <div>
          <label />
          <button className="primary" onClick={register}>
            Register
          </button>
        </div>
        <div>
          <div>
            <label />
            Dont have account? <Link to="/">Login</Link>
          </div>
        </div>
      </div>

      {/* <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
      </div> */}
    </div>
  );
}
