import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComp.scss';
import Slash from './img/slash.jpg';
import Slipknot from './img/slipknot.jpg';
import Snoop from './img/Snoop.jpg';

export const CarouselComp = (props) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 corousel-img-format"
                    src={Slash}
                    alt="slash"
                />
                <Carousel.Caption>
                    <h2 style={{color: '#FD4948'}}>Slash The Best Guitarrist Ever</h2>
                    <p  style={{color: '#FD4948'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis iure, repudiandae voluptatum amet eligendi perferendis?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 corousel-img-format"
                    src={Slipknot}
                    alt="slipknot"
                />
                <Carousel.Caption>
                    <h2 style={{textShadow: '0 0 0.2em red'}}>SLIPKNOT THE MUSICIANS MONSTERS</h2>
                    <p style={{textShadow: '0 0 0.2em red'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 corousel-img-format"
                    src={Snoop}
                    alt="Snoop"
                />
                <Carousel.Caption>
                    <h2>Third slide label</h2>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}