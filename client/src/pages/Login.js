import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    props.history.push("/home");
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log("login", response);
      localStorage.setItem("id", response.data[0].id);
      localStorage.setItem("email", response.data[0].email);
      localStorage.setItem("isAdmin", response.data[0].isAdmin);
      localStorage.setItem("username", response.data[0].username);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].email);
      }
    });
  }, []);

  return (
    <div>
      {/* <h1>{loginStatus}</h1> */}
      <form className="form">
        <div>
          <h1>Login Vichesa React</h1>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <label />
          <button className="primary" onClick={login}>
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            Dont have account? <Link to="/registration">Register</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
