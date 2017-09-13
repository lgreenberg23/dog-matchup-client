import React from 'react'
import TraitCards from './TraitCards'
import {Segment} from 'semantic-ui-react'



class HumanTraits extends React.Component{


	render(){
				return (
					<div>
					<br></br>
					<br></br>
					<Segment><TraitCards personInfo={this.props.person} /></Segment>
					</div>
				)
		}


}



export default HumanTraits
