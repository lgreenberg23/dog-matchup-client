import React from 'react'
import { List } from 'semantic-ui-react'
import EditComment from './EditComment'

class ListExampleDivided extends React.Component {


  render() {
    return (

    <List.Item>
      <List.Icon onClick={this.props.deleteComment} value={this.props.comment} name='remove' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header >{this.props.comment}</List.Header>
        <List.Description>
          <EditComment comment={this.props.comment} updateComment={this.props.updateComment}/>
        </List.Description>
      </List.Content>
    </List.Item>
   )
  }
}

export default ListExampleDivided
