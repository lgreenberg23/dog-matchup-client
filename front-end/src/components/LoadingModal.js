import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import ProgressBar from './ProgressBar'

class ModalExampleSize extends Component {
  state = { open: true, size: 'small'}

  show = size => () => this.setState({ size, open: true })


  render() {
    const { open, size } = this.state

    return (
      <div>
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>
            Please give use a few seconds while we match your personality with dog breeds!
          </Modal.Header>
          <Modal.Content>
            <ProgressBar />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default ModalExampleSize
