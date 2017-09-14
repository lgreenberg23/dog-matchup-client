import React from 'react'
import { Card } from 'semantic-ui-react'

const CardExampleHeaderCard = (props) => (

    <Card onClick={() => props.getAnalysis(props.link)}>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>Blog Post</Card.Meta>
        <Card.Description >{props.sentence}</Card.Description>
      </Card.Content>
    </Card>

)

export default CardExampleHeaderCard
