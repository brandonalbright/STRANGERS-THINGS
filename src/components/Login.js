import React, { useState } from 'react'
import loginUser from '../api/index'

import { Link } from 'react-router-dom'
import { hitApi, auth } from '../api/index'
import './Login.css'
import { getToken, setToken, clearToken } from '../api/index'
import Header from './Header'

function Login(props) {
  const { setIsLoggedIn } = props

  console.log(props)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  return setIsLoggedIn ? (
    <Header />
  ) : (
    <div className="login">
      <div className="login-container">
        <h1>Sign In</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            console.log('FOOOOOORM')
          }}
        >
          <h5>Email</h5>
          {errorMessage ? <h5 className="error">{errorMessage}</h5> : null}
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="username"
          />
          <h5>Password</h5>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="password"
          />
          <button
            className="login-siginbutton"
            onClick={async (event) => {
              try {
                const result = await auth(username, password)
                setIsLoggedIn(true)
              } catch (error) {
                setErrorMessage(error.message)
              }
            }}
          >
            Sign In
          </button>
          <h5>Have Account? Sign In!</h5>
        </form>

        <button
          className="login-createbutton"
          onClick={async (event) => {
            console.log(123455)

            try {
              const result = await auth(username, password, true)
              setIsLoggedIn(true)
            } catch (error) {
              setErrorMessage(error.message)
            }
          }}
        >
          Create your account
        </button>
        <h5>Don't have account? Sign Up!</h5>
      </div>
    </div>
  )
}

export default Login
