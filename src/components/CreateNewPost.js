import React, { useState } from 'react'
import './CreateNewPost.css'
import { hitAPI } from '../api/index'

function CreateNewMessage(props) {
  const { addNewPost } = props
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [willDeliver, setWillDeliver] = useState('')

  return (
    <div className="createNewMessage">
      <form
        onSubmit={async (e) => {
          event.preventDefault()
          const postData = {
            post: {
              title: title,
              description: description,
              price: price,
              willDeliver: willDeliver,
              location: location,
            },
          }

          try {
            const result = await hitAPI('POST', '/posts', postData)
            addNewPost(result)
            console.log(result)
          } catch (error) {
            console.error(error)
          }
        }}
      >
        <h1>Title</h1>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          type="text"
        />
        <div className="description-input">
          <h3>Description:</h3>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            type="text"
          />
        </div>
        <h3>Price</h3>
        <input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value)
          }}
          type="text"
        />
        <h3>Location</h3>
        <input
          value={location}
          onChange={(event) => {
            setLocation(event.target.value)
          }}
          type="text"
        />

        <h4>Will Deliver</h4>
        <input
          value={willDeliver}
          onChange={(event) => {
            setWillDeliver(!willDeliver)
          }}
          type="checkbox"
        />

        <button>Post It</button>
      </form>
    </div>
  )
}

export default CreateNewMessage
