import React from 'react'
// import DogInfoModal from './DogInfoModal'
import DogCard from './DogCard'
import {Grid, Column, Segment, Card} from 'semantic-ui-react'

class DogMatch extends React.Component {

	render() {

		let display = this.props.dogs.map((dog, index) => {
			return(
			<div><Grid.Column><Card.Group> <DogCard dog={dog} /></Card.Group></Grid.Column> </div>
		)
		})

			return(
				<Segment>
					<Grid centered container columns={3}>
						<br></br>
						<h2>Based on your personality results above, here are the top 3 choices of dogs breeds that we've come up with for you:</h2>
						<br></br>
						{display}

					</Grid>
					<br></br><br></br><br></br>
				</Segment>
			)
	}

}



export default DogMatch



/*
          <DogCard
          dog={this.props.dog}
          getComments={this.getComments}
          writeComment={this.writeComment}
          updateComment={this.updateComment}
          deleteComment={this.deleteComment}
          comments={this.state.comments}
          testing={this.state.testing}
          />

          {dog[0]}<div><img src={dog[2]} alt=""/><DogInfoModal dog={dog}/>

*/
