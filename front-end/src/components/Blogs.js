import React from 'react'
import {Segment} from 'semantic-ui-react'
import BlogCard from './Card'
import { Card } from 'semantic-ui-react'

class Blogs extends React.Component {

  getAnalysis = (link) => {
    this.props.fetchAnalysis(link)
  }

	render() {
    let blogs = this.props.blogs.map((blog, index) => {
      for (let key in blog) {
        
        return (<BlogCard name={key} key={index} link={blog[key][1]} sentence={blog[key][2]} getAnalysis={this.getAnalysis}/>)
      }
    })

		return(
      <Segment>
      <div className="dogs" >
        Here are your most recent blogs, click on one to get your personality:
          <Card.Group>
            {blogs}
          </Card.Group>
			</div>
      </Segment>
			)
	}

}



export default Blogs
