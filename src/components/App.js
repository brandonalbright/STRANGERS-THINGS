import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Posts from './Posts'
import Message from './Message'
import MyPosts from './MyPosts'
import './Header.css'
import { getToken, clearToken } from '../api/index'
import { hitAPI, auth } from '../api/index'
import Home from './Home'
import CreateNewPost from './CreateNewPost'
import CreateNewMessage from './CreateNewMessage'
import EditPost from './EditPost'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken())
  const [postList, setPostList] = useState([])

  const [searchTerm, setSearchTerm] = useState('')
  const [isRecent, setIsRecent] = useState(false)

  function addNewPost(newPost) {
    return setPostList([...postList, newPost])
  }

  function filteredPosts() {
    const postsFilteredBySearchTerm = postList.filter((post) => {
      return post.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const recentPosts = postsFilteredBySearchTerm.filter((post) => {
      if (!isRecent) {
        return true
      }

      const postTime = Date.parse(post.createdAt)
      const nowTime = Date.now()
      const THREE_HOURS = 1000 * 60 * 60 * 3

      return postTime + THREE_HOURS >= nowTime
    })

    return recentPosts.reverse()
  }

  function updatePost(updatedPost) {
    let index = postList.findIndex((post) => {
      return post._id === updatedPost._id
    })

    if (index > -1) {
      let postListCopy = [...postList]
      postListCopy[index] = updatedPost
      setPostList(postListCopy)
    }
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
              clearToken={clearToken}
              postList={postList}
              setPostList={setPostList}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              isRecent={isRecent}
              setIsRecent={setIsRecent}
            />

            <Posts
              postList={filteredPosts()}
              setPostList={setPostList}
              isLoggedIn={isLoggedIn}
              updatePost={updatePost}
            />
          </Route>
          <Route path="/comment">
            <Header
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              clearToken={clearToken}
              postList={postList}
              setPostList={setPostList}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              isRecent={isRecent}
              setIsRecent={setIsRecent}
            />

            <CreateNewMessage postList={postList} />
          </Route>
          <Route path="/message">
            <Header
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              clearToken={clearToken}
              postList={postList}
              setPostList={setPostList}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              isRecent={isRecent}
              setIsRecent={setIsRecent}
            />
            <Message postList={postList} />
          </Route>
          <Route path="/myposts">
            <Header
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              clearToken={clearToken}
              postList={postList}
              setPostList={setPostList}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              isRecent={isRecent}
              setIsRecent={setIsRecent}
            />

            <MyPosts
              postList={filteredPosts()}
              isLoggedIn={isLoggedIn}
              setPostList={filteredPosts}
            />
          </Route>
          <Route path="/createNewPost">
            <Header
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              clearToken={clearToken}
            />
            <CreateNewPost addNewPost={addNewPost} />
          </Route>
          <Route path="/">
            <Header
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              clearToken={clearToken}
            />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
