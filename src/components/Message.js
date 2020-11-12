import React, { useState } from 'react'

function Message() {
  const [message, setMessage] = useState([])
  return (
    <div className="message">
      <h1>message</h1>
      {message.map((mes) => {
        return (
          <div className="message-card">
            <h1>Title</h1>
            <p>
              message bhbdschjdsb bcjdbscjn jsbdjs bjhsbdcjs hjsbdjhs hjsdbcjhs
              hsbdcjh
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Message
