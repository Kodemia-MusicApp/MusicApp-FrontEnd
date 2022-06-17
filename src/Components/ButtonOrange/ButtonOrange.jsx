import React from 'react'
import './ButtonOrange.scss'
import { useNavigate } from 'react-router-dom'

export const ButtonOrange = (props) => {
    const navigate = useNavigate()
    return (
        <button className="ButtonOrange" onClick={() => navigate(props.href)}>
            {props.label}
        </button>
    )
}
