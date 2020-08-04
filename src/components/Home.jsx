import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './Home.css'


//TODO: Create carousel that will generate images with titles, descriptions, and videos using video-react for youtube videos from LPData Prop
//npm for react video: npm install --save video-react react react-dom redux
//Website for video-react: https://video-react.js.org/
const Home = ({ LPData, covidData }) => {
    console.log(covidData);
    return (
        <div className="container-fluid">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-size"
                        src="https://i.pinimg.com/originals/bb/61/8d/bb618db7d825e2e03c8d86f781a65e06.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Under Construction</h3>
                        <p>OOOOOF!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-size"
                        src="https://wallpapercave.com/wp/wp2551790.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Under Construction</h3>
                        <p>OOOOOF!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-size"
                        src="https://wallpapercave.com/wp/wp2551791.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Under Construction</h3>
                        <p>OOOOOF!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home