import React, { useState } from 'react'
import Posts from './Posts'

function MyPosts(props) {
  const { postList, setPostList, updatePost } = props

  function filteredMyPosts() {
    const filteredMyPosts = postList.filter((post) => {
      return post.isAuthor
    })
    return filteredMyPosts
  }

  return (
    <>
      <Posts
        postList={filteredMyPosts()}
        setPostList={setPostList}
        updatePost={updatePost}
      />
    </>
  )
}

export default MyPosts
