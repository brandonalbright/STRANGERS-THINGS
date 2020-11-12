import React, { useState } from 'react'
import './CreateNewPost.css'
import { hitAPI } from '../api/index'
import { useHistory } from 'react-router-dom'
import CancelIcon from '@material-ui/icons/Cancel'

function CreateNewMessage(props) {
  const { addNewPost } = props
  const [description, setDescription] = useState(props.description || '')
  const [title, setTitle] = useState(props.title || '')
  const [price, setPrice] = useState(props.price || '')
  const [location, setLocation] = useState(props.location || '')
  const [willDeliver, setWillDeliver] = useState(false)
  const history = useHistory()

  return (
    <div id="form" className="createNewMessage">
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
        <CancelIcon
          onClick={() => {
            document.getElementById('form').style.display = 'none'
            history.push('/posts')
          }}
        />
        <h3>Title:</h3>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          type="text"
        />
        <h3>Description:</h3>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          type="text"
        />
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

        <h3>Will Deliver</h3>
        <input
         
          value={willDeliver}
          onChange={(event) => {
            setWillDeliver(!willDeliver)
          }}
          type="checkbox"  className="create-post-check"
        />
        <button>Post It</button>
      </form>
    </div>
  )
}

export default CreateNewMessage
