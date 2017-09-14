import React from 'react'
import { Icon, List } from 'semantic-ui-react'
import ListItem from './ListItem'

export default class Comments extends React.Component {
	// constructor(props) {
	// 	super(props)

	// }

  deleteComment = (e) => {
    this.props.deleteComment(e.target.getAttribute('value'), this.props.dog)
  }

  updateComment = (value, dog, oldComment) => {
    this.props.updateComment(value, dog, oldComment)
  }

	render() {
		let display = this.props.comments.map((comment, index) => {
				return(
				<ListItem key={index} deleteComment={this.deleteComment} updateComment={this.updateComment} comment={comment.text} dog={this.props.dog}/>
      )
		})

			return(
				<div className="dogs" >
          <List>
					   {display}
          </List>
				</div>
			)
	}

}




// import React from 'react'
// import { List } from 'semantic-ui-react'

// const ListExampleIconShorthand = () => (
//   <List>
//     <List.Item icon='users' content='Semantic UI' />
//     <List.Item icon='marker' content='New York, NY' />
//     <List.Item icon='mail' content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>} />
//     <List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
//   </List>
// )

// export default ListExampleIconShorthand
