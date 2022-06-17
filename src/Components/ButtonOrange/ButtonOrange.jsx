import React from 'react';
import './ButtonOrange.scss';

export const ButtonOrange = (props) => {
    return (
        <button className='ButtonOrange' href={props.href}>{props.label}</button>
    )
}