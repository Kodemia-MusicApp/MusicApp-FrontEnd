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
                        La conexión con el talento musical 
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
                        Estés donde estés 
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
                    <h2 style={{ color: '#FFFFFF' }}>Y a la hora que desees</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
