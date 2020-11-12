import React, { useState } from 'react'
import './CreateNewMessage.css'

function CreateNewMessage() {
  const [textValue, setTextValue] = useState('')
  return (
    <div className="new-message">
      <form>
        <textarea value={textValue} onChnage={() => {}}></textarea>
        <button>Send</button>
      </form>
    </div>
  )
}

export default CreateNewMessage
