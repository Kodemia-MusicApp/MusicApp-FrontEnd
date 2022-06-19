import React from 'react'
import Card from 'react-bootstrap/Card'
import './MusicianCardXL.scss'
import { AvatarImg } from '../AvatarImg/AvatarImg'
import { ButtonTranspOrg } from '../ButtonTranspOrg/ButtonTranspOrg'
import imgavatar from './img/avatar.png'
import { useNavigate } from 'react-router-dom'

export const MusicianCardXL = (props) => {
    const navigate = useNavigate()
    return (
        <Card className="imgcard-container">
            <Card.Img
                className="img-card-edit"
                src={props.src}
                alt={props.alt}
                onClick={() => {
                    navigate(`/musician/description/${props.id}`)
                }}
            />
            <Card.Body className="card-boddy-text-edit" >
                <Card.Title style={{ fontSize: '33px', color: 'white' }}>
                    {props.title}
                </Card.Title>
                <Card.Text style={{ color: 'white' }}>{props.text}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <AvatarImg src={imgavatar} />
                    <h5 style={{ color: 'white' }}>Artista/Banda</h5>
                </div>
                <ButtonTranspOrg label="$200/h - CDMX" />
            </Card.Footer>
        </Card>
    )
}
