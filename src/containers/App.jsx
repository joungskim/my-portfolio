import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import MPHeader from '../components/MPHeader.jsx';
import { Animated } from "react-animated-css";
import image from '../Me.PNG';
import Scroll from '../components/Scroll';
import Home from '../components/Home'

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="App" >
                <div>
                    <MPHeader />
                </div>
                <div className="container-fluid background-image">
                    <Home />
                </div>
            </div>
        );
    }
}

export default App;