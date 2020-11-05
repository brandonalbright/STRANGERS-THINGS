import React from 'react'
import './Header.css'
import { Button, TextField } from '@material-ui/core/'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <img src="https://i.imgur.com/vrQimP1.png" alt="logo" />
      <form className="header-input" noValidate autoComplete="off">
        <TextField id="outlined-basic" variant="outlined" />
      </form>
      <Button>Search</Button>
    </div>
  )
}

export default Header
