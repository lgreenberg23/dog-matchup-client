import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'

export default class ProgressExampleIndicating extends Component {
  state = { percent: 10 }

  increment = () => {
    let self = this;
    let timesRan = 0
    var interval = setInterval(function(){
      timesRan += 1;
      if(timesRan === 5){
        clearInterval(interval);
      }
      self.setState({
        percent: self.state.percent + 20,
      });
    }, 750);
    return interval
  }

  componentWillMount() {
    this.increment()
  }

  render() {
    return (
      <div >
        <Progress percent={this.state.percent} indicating progress >Finding Dogs...</Progress>

      </div>
    )
  }
}
