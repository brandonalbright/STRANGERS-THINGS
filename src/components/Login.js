import React, { useState } from 'react'
import loginUser from "../api/index";

import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login-siginbutton">Sign In</button>
          <h5>Have Account? Sign In!</h5>
        </form>

        <button className="login-createbutton">Create your account</button>
        <h5>Don't have account? Sign Up!</h5>
      </div>
    </div>
  )
}

export default Login
