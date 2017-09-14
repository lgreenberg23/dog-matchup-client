import React from 'react'
import InputForm from './InputForm'
import NavBarInput from './NavBarInput'


import {
  Button,
  Container,
  Menu,
  Segment
} from 'semantic-ui-react'

const Navbar = (props) => (
  <Segment><div>
<Menu fixed='top' size='large'>
  <Container>
    <Menu.Item as='a'>Find Your Perfect Match Dog</Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item className='item'>
        <NavBarInput fetchBlogs={props.fetchBlogs}/>
      </Menu.Item>
    </Menu.Menu>
  </Container>
</Menu>
</div></Segment>)

export default Navbar
