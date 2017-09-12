import React from 'react'
import { Icon, List } from 'semantic-ui-react'

export default class Comments extends React.Component {
	// constructor(props) {
	// 	super(props)

	// }

  deleteComment = (e) => {
  	// debugger
    this.props.deleteComment(e.target.parentElement.innerText, this.props.dog)
  }

	render() {
    console.log("comments", this.props.comments)
		let display = this.props.comments.map((comment, index) => {
				return( 
				<List.Item 
				key={index}
				icon={<Icon onClick={this.deleteComment} name='remove' />}
				content={comment.text} 
				/>)
		})

			return(
				<div className="dogs" >
					{display}
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