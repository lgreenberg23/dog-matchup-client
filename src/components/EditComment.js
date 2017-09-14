import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import CommentText from './CommentText'
import EditCommentText from './EditCommentText'


export default class ModalExampleControlled extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      input: "",
      oldComment: ''
     }
    this.updateComment = this.updateComment.bind(this)
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = (value, oldComment) => {
    this.setState({
      input: value,
      oldComment: oldComment
    })
  }

  updateComment = () => {
    this.props.updateComment(this.state.input, this.props.dog, this.state.oldComment)
    this.setState({
      modalOpen: false
    })
  }

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Edit Comment</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header/>
        <Modal.Content>
          <h3>Leave a comment about this breed!</h3>
          <EditCommentText handleChange={this.handleChange} comment={this.props.comment}/>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.updateComment} inverted>
            <Icon name='checkmark' /> Leave Comment!
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
