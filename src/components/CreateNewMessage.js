import React, { useState } from 'react'
import './CreateNewMessage.css'
import { hitAPI } from '../api'
import CancelIcon from '@material-ui/icons/Cancel'

function CreateNewMessage(props) {
  const { postId, closeReply } = props

  const [textValue, setTextValue] = useState('')

  return (
    <div id="message-form" className="new-message">
      <form
        onSubmit={async (event) => {
          event.preventDefault()
          const objBody = {
            message: {
              content: textValue,
            },
          }
          const result = await hitAPI(
            'POST',
            `/posts/${postId}/messages`,
            objBody,
          )

          setTextValue('')
          closeReply()
        }}
      >
        <CancelIcon
          onClick={() => {
            closeReply()
          }}
        />
        <textarea
          value={textValue}
          onChange={(event) => setTextValue(event.target.value)}
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  )
}

export default CreateNewMessage
