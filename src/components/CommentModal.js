import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import CommentText from './CommentText'

export default class ModalExampleControlled extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: true,
      input: "" }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleSubmit = () => {
    this.props.writeComment(this.props.dog, this.state.input)
    this.handleClose()
  }

  handleChange = (event) => {
    console.log(this.state.input)
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header/>
        <Modal.Content>
          <h3>Leave a comment about this breed!</h3>
          <CommentText handleChange={this.handleChange}/>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleSubmit} inverted>
            <Icon name='checkmark' /> Leave Comment!
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
