import React from 'react'

function Message(props) {
  const {postList} = props;

  function filteredMyPosts() {
    filteredMyPosts = postList.filter((post) => {
      return post.isAuthor;
    })
    return filteredMyPosts
  }

  return ((filteredMyPosts()).map((post, index) => {
    if ((post.messages).length > 0 ) {
      return (<div className='incoming-messages' key={index}>
      <h4 >Messages:</h4>
      {
        (post.messages).map((message, index) =>{
        return <p key={index}><strong>{index + 1}.</strong> {message.content} <strong>From:</strong> {message.fromUser.username}</p>
        })
      }
      </div>)
    } else {return null}

  })
  
  )}





export default Message
