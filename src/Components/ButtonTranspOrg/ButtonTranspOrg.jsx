import React from 'react';
import './ButtonTranspOrg.scss';

export const ButtonTranspOrg = (props) => {
    return (
        <button className='ButtonTranspOrg' href={props.href}>{props.label}</button>
    )
}