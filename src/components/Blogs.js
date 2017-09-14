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
        return (<Grid.Column><Card.Group><BlogCard name={key} key={index} link={blog[key][1]} sentence={blog[key][2]} getAnalysis={this.getAnalysis}/></Card.Group></Grid.Column>)
      }
    })

		return(
      <Segment>
          <div>
          <br></br>
          <h2>Here are your most recent blogs, click on one to get your personality analysis:</h2>
          <br></br>
          <br></br>
          <Grid centered container columns={3}>
              {blogs}
          </Grid>
          </div>
          <br></br>
        </Segment>
			)
	}

}



export default Blogs
