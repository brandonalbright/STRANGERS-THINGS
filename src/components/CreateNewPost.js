import React, { useState } from 'react'
import './CreateNewPost.css'
import { hitAPI } from '../api/index'
import { useHistory } from 'react-router-dom'

function CreateNewMessage(props) {
  const { addNewPost } = props
  const [description, setDescription] = useState(props.description || '')
  const [title, setTitle] = useState(props.title || '')
  const [price, setPrice] = useState(props.price || '')
  const [location, setLocation] = useState(props.location || '')
  const [willDeliver, setWillDeliver] = useState(false)
  const history = useHistory()
  const[isDirty, setIsDirty] = useState(false)

  return (
    <div id="form" className="createNewMessage">
      <form
        onSubmit={async (e) => {
          event.preventDefault();

          setIsDirty(true);

          if (title.length === 0) {
            setIsDirty(true);
            return;
          }

          if(description.length === 0) {
            setIsDirty(true);
            return;
          }
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
            addNewPost(result.post)
            console.log(result)
          } catch (error) {
            console.error(error)
          }
          setDescription('')
          setPrice('')
          setTitle('')
          setWillDeliver('')
          setLocation('')
          document.getElementById('form').style.display = 'none'
          history.push('/posts')
        }}
      >
        <h3>Title:</h3>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          type="text"
        />
         {isDirty && title.length === 0 ? (
        <h3 style={{ color: "red" }}>You need a title</h3>
      ) : null}
        <h3>Description:</h3>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          type="text"
        />
         {isDirty && description.length === 0 ? (
        <h3 style={{ color: "red" }}>You need a description</h3>
      ) : null}
        <h3>Price</h3>

        <input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value)
          }}
          type="text"
        />

        <label for="location">Location</label>
        <input
          value={location}
          onChange={(event) => {
            setLocation(event.target.value)
          }}
          type="text"
        />

        <label for="willDeliver">Will Deliver</label>
        <input
          value={willDeliver}
          onChange={(event) => {
            setWillDeliver(!willDeliver)
          }}
          type="checkbox"
        />
        <button onClick={() => {}}>Post It</button>
      </form>
    </div>
  )
}

export default CreateNewMessage
