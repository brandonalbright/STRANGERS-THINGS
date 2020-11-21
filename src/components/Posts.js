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
import EditPost from './EditPost'

function Posts(props) {
  const { postList, setPostList, isLoggedIn, updatePost, addNewPost } = props

  const [wantsToReply, setReply] = useState('')

  const [isModifyPost, setIsModifyPost] = useState('')

  return (
    <div id="posts">
      {postList.map((post, index) => {
        return (
          <div
            id="post-card"
            key={index}
            style={{
              border:
                post.isAuthor && isLoggedIn
                  ? '5px solid gold'
                  : '2px solid rgb(156, 221, 156',
            }}
          >
            <div className="card-title">
              <h3>
                {post.title} ({post.location}) [{post.createdAt}]
              </h3>
              <h3>Posted Price: {post.price}</h3>
            </div>
            <div className="descriptions">
              <h5>Description: {post.description}</h5>
              <h5>Delivery available: {post.willDeliver ? 'YES' : 'NO'}</h5>
              <h5>Posted by: {post.author.username}</h5>
            </div>
            {wantsToReply === post._id ? (
              <CreateNewMessage postId={post._id} />
            ) : null}
            {isModifyPost === post._id ? (
              <EditPost
                title={post.title}
                description={post.description}
                price={post.price}
                location={post.location}
                willDeliver={post.willDeliver}
                postId={post._id}
                updatePost={updatePost}
              />
            ) : null}

            <div className="message">
              {post.isAuthor ? (
                <Fragment>
                  <Button
                    onClick={async () => {
                      try {
                        const data = await hitAPI(
                          'DELETE',
                          `/posts/${post._id}`,
                        )

                        setPostList([...postList])
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
                      setIsModifyPost(post._id)
                    }}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  >
                    Edit
                  </Button>
                </Fragment>
              ) : isLoggedIn ? (
                <Button
                  onClick={() => setReply(post._id)}
                  variant="outlined"
                  color="primary"
                  fullWidth
                >
                  Message Seller
                </Button>
              ) : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
