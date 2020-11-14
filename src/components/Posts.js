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

function Posts(props) {
  const { postList, setPostList, isLoggedIn } = props
  const { addNewPost } = props
  const [active, setActive] = useState(false)
  const [wantsToReply, setReply] = useState('')
  const [inputVal, setInputVal] = useState('')
  const [isModifyPost, setIsModifyPost] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div id="posts">
      <Fab
        style={{
          position: 'sticky',
          marginLeft: '1500px',

          top: '0',
          zIndex: '100',
        }}
        color="primary"
        aria-label="add"
      >
        <AddIcon onClick={() => setActive(true)} />
      </Fab>
      {active === true && <CreateNewPost addNewPost={addNewPost} />}
      {postList.map((post, index) => {
        return (
          <div
            id="post-card"
            key={index}
            style={{
              border: (post.isAuthor && isLoggedIn)
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
                isLoggedIn?
                  <Button
                      onClick={async () => {
                        const objBody = {
                          message: {
                            content: post,
                          },
                        }
                        const result = await hitAPI(
                          'POST',
                          `/posts/${post._id}/messages`,
                          objBody,
                        )
                        console.log(result)
                        setMessage(result)
                      }}
                      variant="outlined"
                      color="primary"
                      fullWidth
                    >
                      Message Seller
                    </Button>
                    : null
                
                  
              )}
              
            </div>
            {post.isAuthor && (post.messages).length > 0? 
              <div className='incoming-messages'>
                    <h4>Messages:</h4>
                    {
                      (post.messages).map((message, index) =>{
                      return <p key={index}><strong>{index + 1}.</strong> {message.content} <strong>From:</strong> {message.fromUser.username}</p>
                      })
                    }
                </div>: ''}
          </div>
          
        )
      })}
    </div>
  )
}

export default Posts
