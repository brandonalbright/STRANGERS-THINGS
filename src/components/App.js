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
  const [editPost, setEditPost] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [isRecent, setIsRecent] = useState(false)

  function addNewPost(newPost) {
    return setPostList([...postList, newPost])
  }

  function filteredPosts() {
    const postsFilteredBySearchTerm = postList.filter((post) => {
      return post.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const recentPosts = postsFilteredBySearchTerm.filter((post) => {
      if (!isRecent) {
        return true;
      }

      const postTime = Date.parse(post.createdAt); 
      const nowTime = Date.now();
      const THREE_HOURS = 1000 * 60 * 60 * 3;

      return postTime + THREE_HOURS >= nowTime; 
    });

    return recentPosts.reverse();
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
              <div className="filter-options" >
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="filter posts" />
                <label>
                  <input type="checkbox" checked={isRecent} onChange={() => setIsRecent (!isRecent)} />
                  Recent Posts Only
                </label>
              </div>
            <Posts 
              postList={filteredPosts()} 
              setPostList={setPostList}
              isLoggedIn={isLoggedIn} 
              />
          </Route>
          <Route path="/message">
            <Header 
              isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn} 
              clearToken={clearToken}/>
            <CreateNewMessage />
            <Header />
            <CreateNewMessage postList={postList} setPostList={setPostList} />
            <Message />
          </Route>
          <Route path="/myposts">
            <Header 
              isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn} 
              clearToken={clearToken}/>
               <div className="filter-options" >
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="filter my posts" />
                <label>
                  <input type="checkbox" checked={isRecent} onChange={() => setIsRecent (!isRecent)} />
                  Recent Posts Only
                </label>
              </div>
            <MyPosts postList={filteredPosts()}  isLoggedIn={isLoggedIn}/>
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
        </Switch>
      </div>
    </Router>
  )
}
export default App
