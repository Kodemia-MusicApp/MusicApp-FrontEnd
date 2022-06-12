import React from 'react';
import './ReserveButton.scss';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const ReserveButton = () => {
    
    return (
      
        <>
        
            <button className='btn-reserve'  onClick={() => {
                                    navigate('/reservation')
                                }}>RESERVAR</button>
        </>
    )
}