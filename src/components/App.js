import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Posts from './Posts'
import Message from './Message'
import CreateNewMessage from './CreateNewMessage'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="posts">
            <Posts />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/createNewmessage">
            <CreateNewMessage />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
