import React from 'react';
import Card from 'react-bootstrap/Card';
import './MusicianCardXL.scss';
import { AvatarImg } from '../AvatarImg/AvatarImg';
import { ButtonTranspOrg } from '../ButtonTranspOrg/ButtonTranspOrg';
import imgavatar from './img/avatar.png';

export const MusicianCardXL = (props) => {
    return (
    <Card className="imgcard-container" style={{backgroundColor: '#07305C', borderRadius: '3rem'}}>
        <Card.Img 
            className='img-card-edit'
            style={{borderRadius: '3rem 3rem 0 0'}}
            src={props.src}
            alt={props.alt}
        />
        <Card.Body style={{backgroundColor: '#01172f', borderRadius: '0 0 2rem 2rem'}}>
            <Card.Title style={{fontSize: '33px', color: 'white'}}>
                {props.title}
            </Card.Title>
            <Card.Text style={{color: 'white'}}>{props.text}</Card.Text>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
                <AvatarImg src={imgavatar}/>
                <h5 style={{color: 'white'}}>Artista/Banda</h5>
            </div>
            <ButtonTranspOrg label='$200/h - CDMX'/>
        </Card.Footer>
    </Card>        
    )
}
