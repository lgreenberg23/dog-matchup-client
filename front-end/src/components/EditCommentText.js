import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

class EditCommentText extends React.Component {
  state = {
    input: this.props.comment
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      input: e.target.value
    })
    this.props.handleChange(e.target.value, this.props.comment)
  }


  render() {
    return (
      <Form>
        <TextArea value={this.state.input} onChange={this.handleChange}/>
      </Form>
    )
  }
}

export default EditCommentText
