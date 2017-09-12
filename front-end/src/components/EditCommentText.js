import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

class TextAreaExampleTextArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: this.props.commment
    }
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
        <TextArea value={this.state.input} onChange={this.handleChange}/>
      </Form>
    )
  }
}

export default TextAreaExampleTextArea
