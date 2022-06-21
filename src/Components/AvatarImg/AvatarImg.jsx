import React from 'react';
import './AvatarImg.scss';

export const AvatarImg = (props) => {
    return (
        <img className='Avatar-Img-Ch' src={props.src} alt={props.alt} />
    )
}