import React from 'react'
import InputForm from './InputForm'
import Image from './Image'


import {
  Button,
  Container,
  Grid,
  Header,
  List,
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
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={16}>

            {showInput}

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <br></br>
      <br></br>
      <br></br>
      </div>
    )}
}

export default Display
