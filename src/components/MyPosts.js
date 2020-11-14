import React, { useState } from 'react'
import Posts from './Posts'

function MyPosts(props) {
  const { postList, setPostList } = props

  function filteredMyPosts() {
    const filteredMyPosts = postList.filter((post) => {
      return post.isAuthor
    })
    return filteredMyPosts
  }

  return (
    <>
      <Posts postList={filteredMyPosts()} setPostList={filteredMyPosts()} />
    </>
  )
}

export default MyPosts
