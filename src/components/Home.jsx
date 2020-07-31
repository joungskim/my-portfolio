import React from 'react';


//TODO: Create carousel that will generate images with titles, descriptions, and videos using video-react for youtube videos from LPData Prop
//npm for react video: npm install --save video-react react react-dom redux
//Website for video-react: https://video-react.js.org/
const Home = ({LPData}) => {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="carousel slide" id="carousel-712627">
                        <ol class="carousel-indicators">
                            <li data-slide-to="0" data-target="#carousel-712627">
                            </li>
                            <li data-slide-to="1" data-target="#carousel-712627" class="active">
                            </li>
                            <li data-slide-to="2" data-target="#carousel-712627">
                            </li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                <img class="d-block w-100" alt="Carousel Bootstrap First" src="https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg" />
                                <div class="carousel-caption">
                                    <h4>
                                        First Thumbnail label
							</h4>
                                    <p>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
                                </div>
                            </div>
                            <div class="carousel-item active">
                                <img class="d-block w-100" alt="Carousel Bootstrap Second" src="https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg" />
                                <div class="carousel-caption">
                                    <h4>
                                        Second Thumbnail label
							</h4>
                                    <p>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" alt="Carousel Bootstrap Third" src="https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg" />
                                <div class="carousel-caption">
                                    <h4>
                                        Third Thumbnail label
							</h4>
                                    <p>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
                                </div>
                            </div>
                        </div> <a class="carousel-control-prev" href="#carousel-712627" data-slide="prev"><span class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#carousel-712627" data-slide="next"><span class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <h5 class="card-header">
                                    Card title
						</h5>
                                <div class="card-body">
                                    <p class="card-text">
                                        Card content
							</p>
                                </div>
                                <div class="card-footer">
                                    Card footer
						</div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <h5 class="card-header">
                                    Card title
						</h5>
                                <div class="card-body">
                                    <p class="card-text">
                                        Card content
							</p>
                                </div>
                                <div class="card-footer">
                                    Card footer
						</div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <h5 class="card-header">
                                    Card title
						</h5>
                                <div class="card-body">
                                    <p class="card-text">
                                        Card content
							</p>
                                </div>
                                <div class="card-footer">
                                    Card footer
						</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home