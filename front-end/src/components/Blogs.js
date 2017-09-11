import React from 'react'

class Blogs extends React.Component {

  getAnalysis = (event) => {
    this.props.fetchAnalysis(event.target.getAttribute('value'))
  }

	render() {

    let blogs = this.props.blogs.map((blog) => {
      for (let key in blog) {
        // debugger
        return (<li value={blog[key][1]} onClick={this.getAnalysis}>{key}</li>)
      }
    })

		return(
      <div className="dogs" >
        Here are your most recent blogs, click on one to get your personality:
        <ul>
          {blogs}
        </ul>
			</div>
			)
	}

}



export default Blogs
