import React from 'react'
import {Segment} from 'semantic-ui-react'
import BlogCard from './Card'
import { Card } from 'semantic-ui-react'
import {
  Button,
  Container,
  Grid,
  Header,
  List
} from 'semantic-ui-react'

class Blogs extends React.Component {

  getAnalysis = (link) => {
    this.props.fetchAnalysis(link)
  }

	render() {
    let blogs = this.props.blogs.map((blog, index) => {
      for (let key in blog) {
        return (<Grid.Column><BlogCard name={key} key={index} link={blog[key][1]} sentence={blog[key][2]} getAnalysis={this.getAnalysis}/></Grid.Column>)
      }
    })

		return(
          <div>
          <br></br>
          <h2>Here are your most recent blogs, click on one to get your personality:</h2>
          <br></br>
          <br></br>
          <Grid centered container columns={3} >

            <Card.Group>
                {blogs}
            </Card.Group>
        
        </Grid>
          </div>
			)
	}

}



export default Blogs
