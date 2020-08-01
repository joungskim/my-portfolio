import React from 'react';


//TODO: Create carousel that will generate images with titles, descriptions, and videos using video-react for youtube videos from LPData Prop
//npm for react video: npm install --save video-react react react-dom redux
//Website for video-react: https://video-react.js.org/
const Home = ({ LPData }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="carousel slide" id="carousel-712627">
                        <ol className="carousel-indicators">
                            <li data-slide-to="0" data-target="#carousel-712627">
                            </li>
                            <li data-slide-to="1" data-target="#carousel-712627" className="active">
                            </li>
                            <li data-slide-to="2" data-target="#carousel-712627">
                            </li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <img className="d-block w-100" alt="Carousel Bootstrap First" src="https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg" />
                                <div className="carousel-caption">
                                    <h4>
                                        First Thumbnail label
							</h4>
                                    <p>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
                                </div>
                            </div>
                            <div className="carousel-item active">
                                <img className="d-block w-100" alt="Carousel Bootstrap Second" src="https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg" />
                                <div className="carousel-caption">
                                    <h4>
                                        Second Thumbnail label
							</h4>
                                    <p>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" alt="Carousel Bootstrap Third" src="https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg" />
                                <div className="carousel-caption">
                                    <h4>
                                        Third Thumbnail label
							</h4>
                                    <p>
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
                                </div>
                            </div>
                        </div> <a className="carousel-control-prev" href="#carousel-712627" data-slide="prev"><span className="carousel-control-prev-icon"></span> <span className="sr-only">Previous</span></a> <a className="carousel-control-next" href="#carousel-712627" data-slide="next"><span className="carousel-control-next-icon"></span> <span className="sr-only">Next</span></a>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <h5 className="card-header">
                                    Card title
						</h5>
                                <div className="card-body">
                                    <p className="card-text">
                                        Card content
							</p>
                                </div>
                                <div className="card-footer">
                                    Card footer
						</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <h5 className="card-header">
                                    Card title
						</h5>
                                <div className="card-body">
                                    <p className="card-text">
                                        Card content
							</p>
                                </div>
                                <div className="card-footer">
                                    Card footer
						</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <h5 className="card-header">
                                    Card title
						</h5>
                                <div className="card-body">
                                    <p className="card-text">
                                        Card content
							</p>
                                </div>
                                <div className="card-footer">
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