import React from 'react'


class InputForm extends React.Component{

	state = {
		name: ''
	}

	onSubmit = (event) => {
		event.preventDefault()
		this.props.fetchBlogs(this.state.name)
	}

	handleChange = (e) => {
		console.log(e.target.value)
		this.setState({ name: e.target.value})
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
