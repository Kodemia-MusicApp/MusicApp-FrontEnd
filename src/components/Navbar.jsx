import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user: {
                userName: '',
                userUrl: ''
            }
        }
    }
    
    render () {
        return (
            <div className='Navbar-Container'>
                <img src='' alt='' />
                <p>Tu Musico Ahora</p>
                <img src='' alt='' />
            </div>
        )
    }
}

export default Navbar;