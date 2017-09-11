import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const ModalScrollingExample = (props) => (
  <Modal trigger={<Button>More Info!</Button>}>
    <Modal.Header>{props.dog[0]}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.dog[2]} />
      <Modal.Description>
        <Header>Description</Header>
        <p>{props.dog[1]}</p>
        <p>Perfect For You!</p>

      </Modal.Description>
    </Modal.Content>
    <Button onClick={props.leaveComment}>Leave a comment on this breed</Button>
  </Modal>
)

export default ModalScrollingExample
