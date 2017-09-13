import React from 'react'
import TraitCards from './TraitCards'
import {Segment} from 'semantic-ui-react'



class HumanTraits extends React.Component{


	render(){
				return (
					<Segment><TraitCards personInfo={this.props.person} /></Segment>
				)
		}


}



export default HumanTraits
