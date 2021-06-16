import React, { Component } from 'react';
import '../App.css';
import '../bootstrap.css';
import slide1 from '../img/html.png';
import slide2 from '../img/white-house.jpg';




class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner v">
                        <div className="carousel-item active">
                            <img src={slide2} className="d-block" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={slide2} className="d-block" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={slide1} className="d-block" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Logo;
