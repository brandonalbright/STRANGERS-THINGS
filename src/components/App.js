import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Posts from './Posts'
import Message from './Message'

import { getToken, clearToken } from '../api/index'
import { hitAPI, auth } from '../api/index'
import Home from './Home'
import CreateNewPost from './CreateNewPost'
import CreateNewMessage from './CreateNewMessage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken())
  const [postList, setPostList] = useState([])
  const [editPost, setEditPost] = useState(null)
  function addNewPost(newPost) {
    return setPostList([newPost, ...postList])
  }

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
          <Route path="/posts">
            <Header />
            <Posts
              postList={postList}
              setPostList={setPostList}
              isLoggedIn={isLoggedIn}
            />
          </Route>
          <Route path="/message">
            <Header />
            <CreateNewMessage postList={postList} setPostList={setPostList} />

            <Message />
          </Route>
          <Route path="/createNewmessage">
            <Header />
            <CreateNewPost addNewPost={addNewPost} />
          </Route>
          <Route path="/">
            <Header isLoggedIn={isLoggedIn} />
            <Posts postList={postList} setPostList={setPostList} />
          </Route>
          {/* have a modal here which is visible when... editPost is not null */}
        </Switch>
      </div>
    </Router>
  )
}

export default App
