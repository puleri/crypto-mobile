import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { chatUpdate } from '../../api/chat'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UpdateChat = props => {
  const [chat, setChat] = useState({ text: '' })
  const [updated, setUpdated] = useState(false)
  const { user, msgAlert, match } = props

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value }
    setChat(oldChat => {
      const updatedChat = { ...oldChat, ...updatedField }
      return updatedChat
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    chatUpdate(user, chat, match.params.chatId)
      .then(() => setUpdated(true))
      // Instead of state + Redirect pairing, you can also use `history`
      // as long as the component is exported `withRouter` or is passed the
      // `history` prop explicitely (see the `App.js` file)
      // This object can be destructured from the `props` as well.
      // The `ChatShow` component uses this pattern for delete
      // .then(() => props.history.push('/chat-show/' + match.params.chatId))
      .then(() => msgAlert({
        heading: 'Update successful',
        message: 'you have edited the message.',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Update failed',
        message: 'hey friend, you have to own the message to edit it. ' + err.message,
        variant: 'danger'
      }))
  }

  if (updated) {
    return (
      <Redirect to='/chats/'/>
    )
  }

  return (
    <React.Fragment>
      <Link className="back" to="/chats">Back</Link><br /><br />
      <h5>update message</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            as="input"
            placeholder="type editted message here"
            value={chat.text}
            onChange={handleChange}
            name="text"
          />
        </Form.Group>
        <Button variant="success" type="submit">Update</Button>
      </Form>
    </React.Fragment>
  )
}

export default UpdateChat
