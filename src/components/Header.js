import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'
import { Fab } from '@material-ui/core'
import { getToken } from '../api/index'

function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken())

  return (
    <nav className="header">
      <Link>
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
        <Link to="./" className="header-link">
          {isLoggedIn ? (
            <span
              onClick={() => {
                clearToken()
                setIsLoggedIn(false)
              }}
              className="headerOpt-line2"
            >
              'Log Out'
            </span>
          ) : (
            <span className="headerOpt-line2">'Sign In/Sign Up'</span>
          )}
        </Link>
      </div>
      <div className="headermessages">
        <Link className="header-link">
          <span> Posts</span>
          <Fab className="header-button" color="" aria-label="add">
            +
          </Fab>
        </Link>
      </div>
      <div className="header-messages">
        <Link className="header-link">
          <span>Messages</span>
        </Link>
      </div>
    </nav>
  )
}

export default Header
