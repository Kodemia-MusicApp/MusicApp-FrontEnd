import React from 'react';
import Card from 'react-bootstrap/Card';
import './MusicianCardXL.scss';

export const MusicianCardXL = (props) => {
    return (
    <Card className="bg-dark text-white imgcard-container">
        <Card.Img 
            className='img-card-edit'
            src={props.src}
            alt={props.alt}
        />
        <Card.ImgOverlay>
            <Card.Title style={{fontSize: '33px'}}>{props.title}</Card.Title>
            <Card.Text style={{fontWeight: 'bolder'}}>{props.text}</Card.Text>
        </Card.ImgOverlay>
    </Card>        
    )
}
