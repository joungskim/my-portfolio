import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import MPHeader from '../components/MPHeader.jsx';
import Particles from 'react-particles-js';
import Scroll from '../components/Scroll';
import Home from '../components/Home'
import Resume from '../components/Resume.jsx'
import ResumeData from '../resumeData.js'

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
            route: ''
        }
    }

    componentDidMount() {
        this.setState({route: 'Resume'})
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
                    <div className="body-container">
                    <Particles className='particles'
                        params={particlesOptions}
                    />
                        {
                            route === 'Home' ? <Home /> 
                            : route === 'Resume' ? <Resume ResumeData={ResumeData} />
                            : <div></div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;