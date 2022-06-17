import React from 'react'
import './ButtonTranspOrg.scss'
import { useNavigate } from 'react-router-dom'

export const ButtonTranspOrg = (props) => {
    const navigate = useNavigate()
    return (
        <button
            className="ButtonTranspOrg"
            onClick={() => {
                navigate(props.href)
            }}
            href={props.href}
        >
            {props.label}
        </button>
    )
}
