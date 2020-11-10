import zIndex from '@material-ui/core/styles/zIndex'
import React, { useState } from 'react'
import './Posts.css'
import { Button } from '@material-ui/core'

function Posts(props) {
  const { postList, setPostList } = props

  return (
    <div id="posts">
      {postList.map((post, index) => {
        // Things to add:
        // only active posts show
        // message seller
        // edit post- owner
        // delete post- owner
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
            <div className="message">
              {post.isAuthor ? (
                <Button variant="outlined" color="secondary" fullWidth>
                  Delete
                </Button>
              ) : (
                <Button variant="outlined" color="primary" fullWidth>
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
