import React from 'react'
import { Icon } from 'semantic-ui-react'

export default class Comments extends React.Component {
	constructor(props) {
		super(props)

	}

  deleteComment = (e) => {
    this.props.deleteComment(e.target.innerText, this.props.dog)
  }

	render() {
    console.log("comments", this.props.comments)
		let display = this.props.comments.map((comment, index) => {
				return <li key={index}> {comment.text} </li>
		})

			return(
				<div className="dogs" >
					{display}
				</div>
			)
	}

}
