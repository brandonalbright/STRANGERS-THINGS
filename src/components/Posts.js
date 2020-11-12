import zIndex from '@material-ui/core/styles/zIndex'
import React, { useState, Fragment } from 'react'
import './Posts.css'
import { Button } from '@material-ui/core'
import { hitAPI } from '../api'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CreateNewPost from './CreateNewPost'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import CreateNewMessage from './CreateNewMessage'
import { green } from '@material-ui/core/colors'

function Posts(props) {
  const { postList, setPostList } = props
  const { isLoggedIn } = props

  const { addNewPost } = props
  const [active, setActive] = useState(false)
  const [message, setMessage] = useState(false)

  return (
    <div id="posts">
      {isLoggedIn ? (
        <Fab
          onClick={() => setActive(true)}
          style={{
            position: 'sticky',
            marginLeft: '1500px',

            top: '0',
            zIndex: '100',
          }}
          aria-label="add"
        >
          <AddIcon onClick={() => setActive(true)} />
        </Fab>
      ) : (
        ''
      )}
      {active === true && <CreateNewPost addNewPost={addNewPost} />}

      {postList.map((post, index) => {
        return (
          <div
            id="post-card"
            key={index}
            style={{
              border: post.isAuthor
                ? '5px solid gold'
                : '2px solid rgb(156, 221, 156',
            }}
          >
            <div className="card-title">
              <h3>
                {post.title} ({post.location})
              </h3>
              <h3>Posted Price: {post.price}</h3>
            </div>
            <div className="descriptions">
              <h5>Description: {post.description}</h5>
              <h5>Delivery available: {post.willDeliver ? 'YES' : 'NO'}</h5>
              <h5>Posted by: {post.author.username}</h5>
            </div>

            {message === true && <CreateNewMessage postId={post._id} />}

            <div className="message">
              {post.isAuthor ? (
                <Fragment>
                  <Button
                    onClick={async () => {
                      try {
                        await hitAPI('DELETE', `/posts/${post._id}`)
                        const data = await hitAPI('GET', '/posts')

                        setPostList(data.posts)
                      } catch (err) {
                        console.error(err)
                      }
                    }}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => {
                      console.log('post is ', post)
                    }}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  >
                    Edit
                  </Button>
                </Fragment>
              ) : (
                <Button
                  onClick={async () => setMessage(true)}
                  variant="outlined"
                  color="primary"
                  fullWidth
                >
                  Message Seller
                </Button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
