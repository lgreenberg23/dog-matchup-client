import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaExampleTextArea = (props) => (
  <Form>
    <TextArea placeholder='Leave your comment here!' onChange={props.handleChange}/>
  </Form>
)

export default TextAreaExampleTextArea
