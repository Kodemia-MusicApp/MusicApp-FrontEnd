import React from 'react';

function Avatar(props) {
    return (
        <React.Fragment>
            <img
                src={props.user.userUrl}
                alt={props.user.userName}
            />
            <p>{props.user.userName}</p>
        </React.Fragment>
    );
};

export { Avatar };