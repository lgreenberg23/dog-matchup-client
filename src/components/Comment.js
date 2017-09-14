import React from 'react'
import CommentModal from './CommentModal'

class Comment extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
	render() {
		return(<div><CommentModal dog={this.props.dog} writeComment={this.props.writeComment}/></div>)
	}

}



export default Comment
