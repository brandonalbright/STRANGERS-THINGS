import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Posts from './Posts'
import Message from './Message'
import CreateNewMessage from './CreateNewPost'
import { getToken, clearToken } from '../api/index'
import { hitAPI, auth } from '../api/index'
import Home from './Home'
import CreateNewPost from './CreateNewPost'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken())
  const [postList, setPostList] = useState([])
  const addNewPost = (newPost) => setPostList([newPost, ...postList])

  useEffect(() => {
    hitAPI('GET', '/posts')
      .then((data) => {
        const { posts } = data
        setPostList(posts)
        console.log(posts)
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
          <Route path="/posts">
            <Header />
            <Posts postList={postList} setPostList={setPostList} />
            {isLoggedIn ? <CreateNewPost addNewPost={addNewPost} /> : null}
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
