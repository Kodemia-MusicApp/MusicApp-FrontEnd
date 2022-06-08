import React from 'react'

export const User = (props) => {
    return (
        <div>
            <img src={props.user.userUrl} alt={props.user.userName} />
            <p>{props.user.userName}</p>
            <h2>User</h2>
        </div>
    )
}
