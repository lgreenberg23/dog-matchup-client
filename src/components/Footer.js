import React from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react'

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='About' />
            <List link inverted>
              <List.Item as='a'>DogMatchr</List.Item>
              <List.Item as='a'>Contact Us</List.Item>
              <List.Item as='a'></List.Item>
              <List.Item as='a'></List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as='h4' inverted>Unahppy with your results?</Header>
            <p>Try writing some new blog posts to input fresh data into our matching algorithm.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
