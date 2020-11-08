import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Posts from './Posts'
import Message from './Message'
import CreateNewMessage from './CreateNewMessage'
import { getToken, clearToken } from '../api/index'
import { hitAPI, auth } from '../api/index'
import Home from './Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken())
  const [postList, setPostList] = useState([])

  useEffect(() => {
    hitAPI('GET', '/posts')
      .then((data) => {
        const { posts } = data
        setPostList(posts)
      })
      .catch(console.error)
  }, [isLoggedIn])

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path="posts">
            <Header />
            <Posts postList={postList} setPostList={setPostList} />
          </Route>
          <Route path="/message">
            <Header />
            <Message />
          </Route>
          <Route path="/createNewmessage">
            <Header />
            <CreateNewMessage />
          </Route>
          <Route path="/">
            <Header isLoggedIn={isLoggedIn} />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
