import React from 'react'


class InputForm extends React.Component{

	state = {
		personalityText: ''
	}

	onSubmit = (event) => {
		event.preventDefault()
		this.props.fetchAnalysis(this.state.personalityText)
	}

	handleChange = (e) => {
		this.setState({ personalityText: e.target.value})
	}

	render(){
		return (
			<div className="InputForm">
			<form onSubmit={this.onSubmit}>
				<textarea type="text" onChange={this.handleChange}/>
				<input type="submit" value="submit"/>
			</form>
			</div>
		)
	}
}



export default InputForm
