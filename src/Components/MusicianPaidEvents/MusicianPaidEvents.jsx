import React from 'react'
import './MusicianPaidEvents.scss'

export const MusicianPaidEvents = (props) => {
    return (
        <div className='Paid-Events-Container'>
            <div className='Client-Name'>
                {/* <img className='Client-img' src={props.src} />
                <h4>{props.title}</h4> */}
                <h4>Nombre del Cliente</h4>
            </div>
        </div>
    )
}
