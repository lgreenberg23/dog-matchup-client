import React from 'react'
import TraitCards from './TraitCards'
import {Segment, Grid} from 'semantic-ui-react'



class HumanTraits extends React.Component{


	render(){
		return (
			<div>
			<br></br><br></br>
			<Segment>
				<Grid centered columns={4}>
					<Grid.Row>
						<TraitCards personInfo={this.props.person} />
					</Grid.Row>
				</Grid>
			</Segment>
			</div>
		)
	}


}



export default HumanTraits
