import React, { useState } from 'react'
import './Message.css'

function Message(props) {
  const { messageList } = props
  console.log(messageList, 'this is props')
  return (
    <div className="message-container">
      {messageList.map((mes, idx) => {
        console.log('mes', mes)
        return (
          <div id="messagediv" className="message-card" key={idx}>
            <h3 className="mesage-title"> From : {mes.fromUser.username}</h3>
            <p>{mes.content}</p>
            <button
              onClick={() =>
                (document.getElementById('messagediv').style.display = 'none')
              }
            >
              Close
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Message
