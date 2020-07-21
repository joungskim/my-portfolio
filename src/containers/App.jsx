import React from 'react';
import './App.css';
import 'tachyons';
import MPHeader from '../components/MPHeader.jsx';


function App() {
    return (
        <div className="App" >
            <MPHeader />
            <h1 class="animate__animated animate__fadeInDown">An animated element</h1>
        </div>
    );
}

export default App;