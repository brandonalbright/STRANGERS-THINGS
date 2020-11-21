import React, { useState, Fragment, useEffect } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Link, useHistory } from 'react-router-dom'

function Header(props) {
  const {
    isLoggedIn,
    setIsLoggedIn,
    clearToken,
    postList,
    setPostList,
    searchTerm,
    setSearchTerm,
    isRecent,
    setIsRecent,
  } = props

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
        <label className="header-checkbox">
          <input
            type="checkbox"
            checked={isRecent}
            onChange={() => setIsRecent(!isRecent)}
          />
          Recent Posts Only
        </label>
        <input
          type="text"
          className="header_searchInput"
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="filter posts"
        />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="headerNav">
        {isLoggedIn ? (
          <Link to="/posts" className="header-link">
            <span
              onClick={() => {
                clearToken()
                setIsLoggedIn(false)
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
        {isLoggedIn ? (
          <Link to="/createNewPost" className="header-link">
            <span>Create New Post</span>
          </Link>
        ) : null}
      </div>
      {isLoggedIn ? (
        <div className="header-messages">
          <Link to="/message" className="header-link">
            <span>Messages</span>
          </Link>
          <Link to="/myposts" className="header-link">
            <span>My Posts</span>
          </Link>
        </div>
      ) : null}
    </nav>
  )
}

export default Header
