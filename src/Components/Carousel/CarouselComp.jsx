import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './CarouselComp.scss'
import ImageOne from './img/imageOne.png'
import ImageTwo from './img/ImageTwo.png'
import ImageThree from './img/imageThree.png'

export const CarouselComp = (props) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 corousel-img-format"
                    src={ImageOne}
                    alt="slash"
                />
                <Carousel.Caption>
                    <h2 style={{ color: '#FFFFFF' }}>
                        Slash The Best Guitarrist Ever
                    </h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 corousel-img-format"
                    src={ImageTwo}
                    alt="slipknot"
                />
                <Carousel.Caption>
                    <h2 style={{ color: '#FFFFFF' }}>
                        SLIPKNOT THE MUSICIANS MONSTERS
                    </h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 corousel-img-format"
                    src={ImageThree}
                    alt="Snoop"
                />
                <Carousel.Caption>
                    <h2 style={{ color: '#FFFFFF' }}>Third slide label</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
