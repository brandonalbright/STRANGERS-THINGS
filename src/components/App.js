import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Posts from './Posts'
import Message from './Message'
import MyPosts from './MyPosts'

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
            <Header 
              isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn} 
              clearToken={clearToken}/>
            <Posts 
              postList={postList} 
              setPostList={setPostList}
              isLoggedIn={isLoggedIn} 
              />
          </Route>
          <Route path="/message">
<<<<<<< HEAD
            <Header 
              isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn} 
              clearToken={clearToken}/>
            <CreateNewMessage />
=======
            <Header />
            <CreateNewMessage postList={postList} setPostList={setPostList} />

>>>>>>> 11559beb29eb203675147c72a0d7c9e3209f1f6b
            <Message />
          </Route>
          <Route path="/myposts">
            <Header 
              isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn} 
              clearToken={clearToken}/>
            <MyPosts postList={postList}  isLoggedIn={isLoggedIn}/>
          </Route>
          <Route path="/createNewmessage">
            <Header 
              isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn} 
              clearToken={clearToken}/>
            <CreateNewPost addNewPost={addNewPost} />
          </Route>
          <Route path="/">
            <Header 
              isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn} 
              clearToken={clearToken} />
            <Home />
          </Route>
          {/* have a modal here which is visible when... editPost is not null */}
          <Modal open={editPost}>
            <EditForm
              post={editPost}
              onSuccess={() => {
                // find the editPost index in postList....
                // copy the postList, update that entry with the new data...
                // call setPostList with the copy
              }}
            />
          </Modal>
        </Switch>
      </div>
    </Router>
  )
}

export default App
