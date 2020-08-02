import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import MPHeader from '../components/MPHeader.jsx';
import Particles from 'react-particles-js';
import ContactMe from '../components/ContactMe'
import Home from '../components/Home';
import Resume from '../components/Resume';
import DevBlog from '../components/DevBlog';
import Projects from '../components/Projects';
import PostContactMe from '../components/PostContactMe'

import ResumeData from '../resumeData.js';
import DevBlogData from '../devblog.js';
import ProjectsData from '../projects.js';
import ApiKeys from '../apikeysData.js'


const particlesOptions = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: '',
        }
    }

    componentDidMount() {
        this.setState({route: 'PostContactMe'})
    }

    onRouteChange = (newRoute) => {
        this.setState({route: newRoute});
    }

    render() {
        const { route } = this.state;
        return (
            <div className="App" >
                <div>
                    <MPHeader onRouteChange={this.onRouteChange} />
                </div>
                <div className="container-fluid background-image">
                    <div className="body-container br3 ba b--black-10 shadow-5 bg-white-90 tl pa3">
                    <Particles className='particles'
                        params={particlesOptions}
                    />
                        {
                            route === 'Home' ? <Home /> 
                            : route === 'Resume' ? <Resume ResumeData={ResumeData} />
                            : route === 'DevBlog' ? 
                            DevBlogData.map((dbd) => {
                                return (
                                    <DevBlog devblog={dbd} />
                                )
                            })
                             : route === 'Projects' ? ProjectsData.map((project) => {
                                 return (
                                     <Projects project={project}/>                                 
                                    )
                             }) : route === 'ContactMe' ? 
                                    <ContactMe
                                        apiData={ApiKeys.emailjs}
                                        onRouteChange={this.onRouteChange}
                                    /> 
                                : route === 'PostContactMe' ? <PostContactMe /> : <Home />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;