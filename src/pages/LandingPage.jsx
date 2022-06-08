import React from 'react';
import './LandingPage.scss';
import Navbar from '../components/Navbar';
import Carousell from '../components/Carousel';

class LandingPage extends React.Component {
    render() {
        return (
            <div className='landingContainer'>
                <Navbar />
                <Carousell />
            </div>
        );
    }
}

export default LandingPage;