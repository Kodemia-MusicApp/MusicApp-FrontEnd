import React from 'react'
import './ReserveButton.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const ReserveButton = () => {
    const navigate = useNavigate()
    return (
        <>
            <button
                className="btn-reserve"
                onClick={() => {
                    navigate('/reservation')
                }}
            >
                RESERVAR
            </button>
        </>
    )
}
