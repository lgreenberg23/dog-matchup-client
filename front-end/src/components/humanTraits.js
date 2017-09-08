import React from 'react'


class HumanTraits extends React.Component{


	render(){
	// console.log(this.props)	
		let displayPerson = this.props.person.map((trait, index) => {	
			for (let key in trait){
				return <li key={index}> {key}: { Math.round(trait[key]) } percentile</li>		
			}
			//return displayPerson
		})

		return(
			<div className="person">
				{displayPerson}
			</div>
			)
	}

	
}



export default HumanTraits


