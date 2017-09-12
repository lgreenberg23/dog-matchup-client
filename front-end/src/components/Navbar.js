import React from 'react'

import {
  Button,
  Container,
  Menu,
  Segment
} from 'semantic-ui-react'

const Navbar = () => (
  <Segment><div>
<Menu fixed='top' size='large'>
  <Container>
    <Menu.Item as='a'>Find Your Perfect Match Dog</Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item className='item'>
        <Button as='a'>See all Dogs</Button>
      </Menu.Item>
    </Menu.Menu>
  </Container>
</Menu>
</div></Segment>)

export default Navbar