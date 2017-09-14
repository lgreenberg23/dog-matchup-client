import React, { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm'
import HumanTraits from './components/humanTraits'
import DogMatch from './components/DogMatch'
import LoadingModal from './components/LoadingModal'
import Blog from './components/Blogs'
import Display from './components/display'
import { Segment } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'



class App extends Component {

    state = {
        personalityTraits: [],
        dogs: [],
        blogs: [],
    }


    //this sends a fetch request to Watson and gets back all of the personality info data
    // personInfo is the entire object, we used data from the big 5
    // energy = activity level
    // confidence = inverse of self-consciousness
    // focus = self-efficacy
    // independence = adventurousness

    fetchBlogs = (text) => {
        this.setState({
            personalityTraits: [],
            dogs: [],
            blogs: []
        })
        const createParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userInput: { input: text } })
        }
        fetch('https://react-project-api.herokuapp.com/api/v1/get_blogs', createParams)
            .then(res => res.json())
            .then(blogTitles => {
                this.setState({
                    blogs: blogTitles
                })

            })
    }

    fetchAnalysis = (url) => {
        this.setState({
            personalityTraits: undefined,
            dogs: undefined
        })
        const createParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userInput: { input: url } })
        }
        fetch('https://react-project-api.herokuapp.com/api/v1/get_traits', createParams)
            .then(res => res.json()).then(personInfo => {

                let person = [
                    { energy: ((personInfo.tree.children[0].children[0].children[2].children[0].percentage) * 100) },
                    { confidence: (100 - ((personInfo.tree.children[0].children[0].children[4].children[4].percentage) * 100)) },
                    { focus: ((personInfo.tree.children[0].children[0].children[1].children[5].percentage) * 100) },
                    { independence: ((personInfo.tree.children[0].children[0].children[0].children[0].percentage) * 100) }
                ]


                // below is the fetch to get the dog breed (it's inside the fetch above)
                const dogParams = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ personInfo: { info: person } })
                }

                fetch('https://react-project-api.herokuapp.com/api/v1/get_breed', dogParams)
                    .then(res => res.json())
                    .then(dogInfo => {
                        this.setState({
                            personalityTraits: person,
                            dogs: dogInfo
                        })
                    })
            })
    }

    usingRoutes = () => {
        if (this.state.personalityTraits !== undefined && this.state.personalityTraits.length > 1) {
            return <Redirect to = "/match" / >
        } else if (this.state.personalityTraits === undefined) {
            return <Redirect to = "/load" / >
        } else if (this.state.personalityTraits.length < 1 && this.state.blogs.length > 1) {
            return <Redirect to = "/blogs" / >
        } else {
            return <Redirect to = "/app" / >
        }
    }

    render() {
        // <Route path="/" component={Navbar}/>
        return ( <
            div >
            <
            Navbar fetchBlogs = { this.fetchBlogs }
            /> { this.usingRoutes() } <
            Route path = "/match"
            render = {
                () =>
                //this is the fial one with matched dogs and human traits
                <
                div className = "App" >
                <
                HumanTraits person = { this.state.personalityTraits }
                /> <
                DogMatch dogs = { this.state.dogs }
                leaveComment = { this.leaveComment }
                /> <
                /div>
            }
            /> <
            Route path = "/load"
            render = {
                () =>
                //loading bar page
                ( <
                    div className = "App row" >
                    <
                    LoadingModal / >
                    <
                    /div>
                )
            }
            /> <
            Route path = "/blogs"
            render = {
                () =>
                //choose the blog you want to analyze
                <
                div className = "App" >
                <
                Segment > < Blog fetchAnalysis = { this.fetchAnalysis }
                blogs = { this.state.blogs }
                /></Segment >
                <
                /div>
            }
            /> <
            Route path = "/app"
            render = {
                () =>
                //this is the first render, home screen
                <
                div className = "App" >
                <
                Segment > < Display fetchBlogs = { this.fetchBlogs }
                /></Segment >
                <
                /div>
            }
            /> <
            /div>
        )
    }
}


export default App;