import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

class EditCommentText extends React.Component {

  state = {
      input: this.props.commment
    }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    debugger
    return (
      <Form>
        <Input value={this.state.input} onChange={this.handleChange}/>
      </Form>
    )
  }
}

export default EditCommentText
