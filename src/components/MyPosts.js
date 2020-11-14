import React, { useState } from 'react'
import Posts from './Posts'

function MyPosts(props) {


    const {postList} = props;
    

    function filteredMyPosts() {
        filteredMyPosts = postList.filter((post) => {
          return post.isAuthor;
        })
        return filteredMyPosts
      }

    return (
        <>
        <Posts postList={filteredMyPosts()} />
        </>
    )
}

export default MyPosts

