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
                className="d-block w-100"
                src={Slash}
                alt="slash"
                style={{ width: '100%', height: '500px' }}
                />
                <Carousel.Caption>
                <h2>Slash The Best Guitarrist Ever</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis iure, repudiandae voluptatum amet eligendi perferendis?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Slipknot}
                alt="slipknot"
                style={{ width: '100%', height: '500px' }}
                />
                <Carousel.Caption>
                <h2>SLIPKNOT THE MUSICIANS MONSTERS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Snoop}
                alt="Snoop"
                style={{ width: '100%', height: '500px' }}
                />
                <Carousel.Caption>
                <h2>Third slide label</h2>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}