import React, { useState, Fragment, useEffect } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Link, useHistory } from 'react-router-dom'
import { Fab } from '@material-ui/core'
import { getToken, clearToken, setToken } from '../api/index'
import Login from './Login'

function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken())

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://i.imgur.com/vrQimP1.png"
          alt="logo"
        />
      </Link>
      <div className="header-search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="headerNav">
        {isLoggedIn ? (
          <Link to="/" className="header-link">
            <span
              onClick={() => {
                clearToken()
                setIsLoggedIn()
              }}
              className="headerOpt-line2"
            >
              Logout
            </span>
          </Link>
        ) : (
          <Link to="/login" className="header-link">
            <span className="headerOpt-line2">SignIn/Sign Up</span>
          </Link>
        )}
      </div>
      <div className="headermessages">
        <Link to="/posts" className="header-link">
          <span> Posts</span>
        </Link>
        <Link to="/createNewmessage" className="header-link">
          <span>Create New Message</span>
        </Link>
      </div>
      <div className="header-messages">
        <Link to="/message" className="header-link">
          <span>Messages</span>
        </Link>
      </div>
    </nav>
  )
}

export default Header
