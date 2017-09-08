import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputForm'
import HumanTraits from './components/humanTraits'

class App extends Component {

  state ={
    personalityTraits: []
  }


  //this sends a fetch request to Watson and gets back all of the personality info data
  // personInfo is the entire object, we used data from the big 5
  // energy = activity level
  // confidence = inverse of self-consciousness
  // focus = self-efficacy
  // independence = adventurousness
  fetchAnalysis = (text) => {
    const createParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userInput: {input: text}})
    }
    fetch('http://localhost:3000/api/v1/get_traits', createParams)
      .then(res => res.json()).then(personInfo => {
      
      let person = [
        {energy: ((personInfo.tree.children[0].children[0].children[2].children[0].percentage)*100)},
        {confidence: (100-((personInfo.tree.children[0].children[0].children[4].children[4].percentage)*100))},
        {focus: ((personInfo.tree.children[0].children[0].children[1].children[5].percentage)*100)},
        {independence: ((personInfo.tree.children[0].children[0].children[0].children[0].percentage)*100)}
      ]
      // console.log(person)
        this.setState({ personalityTraits: person})
        console.log(this.state.personalityTraits)
    })
  }

  render() {
    if (this.state.personalityTraits.length > 1 ) {
      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <InputForm fetchAnalysis={this.fetchAnalysis}/>
          <HumanTraits person={this.state.personalityTraits}/>
      </div>
    );
    } else {
      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <InputForm fetchAnalysis={this.fetchAnalysis}/>
      </div>
    );
    }
  }
}


export default App;
