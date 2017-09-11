import React from 'react'
import InputForm from './InputForm'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from 'semantic-ui-react'

class Display extends React.Component{

  state={
    clicked: false
  }

  handleClick = () => this.setState({clicked: true})

render(){
           let showInput = ''
           if (this.state.clicked === false){
            showInput = (<div>
                  <Header as='h3' style={{ fontSize: '2em' }}>Match your personality to the right dog for you</Header>
                  <p style={{ fontSize: '1.33em' }}>
                              Our personality-matching algorithm analyzes your writing to correlate the four most relevant traits between you and our database of dog breeds. 
                              These traits are: energy, focus, confidence, and independence.
                  </p>
                  <Button size='huge' onClick={this.handleClick}>Try it Out</Button>
                  </div>)
                }else{
                       showInput= <InputForm fetchBlogs={this.props.fetchBlogs}/>
                }
            
    return(
  <div>

<Segment vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={16}>

            {showInput}

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>Hear from our customers:</Header>
          <p style={{ fontSize: '1.33em' }}>
            Put some kind of testimonial here?
          </p>
          
        </Container>
      </Segment>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'></List.Item>
                  <List.Item as='a'></List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>Footer Header</Header>
                <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </div>
    )}
}

export default Display
