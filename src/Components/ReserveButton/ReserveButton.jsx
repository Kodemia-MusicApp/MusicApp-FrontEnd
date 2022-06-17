import React from 'react'
import './ReserveButton.scss'
import { useNavigate } from 'react-router-dom'

export const ReserveButton = (id) => {
    const navigate = useNavigate()

    return (
        <>
            <button
                className="btn-reserve"
                onClick={() => {
                    navigate(`/reservation/${id.id}`)
                }}
            >
                RESERVAR
            </button>
        </>
    )
}
