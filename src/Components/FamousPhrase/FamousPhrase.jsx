import React from 'react';
import Card from 'react-bootstrap/Card';
import './FamousPhrase.scss';

export const FamousPhrase = () => {
    return (
        <Card className='famous-phrase-card-container'>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{color: '#FD4948', fontWeight: 'bold'}}>
                        {' '}
                        La Música es la aritmética de los sonidos, como la óptica es la geometría de la luz. 
                        {' '}
                    </p>
                    <footer className="blockquote-footer" style={{color: '#FD4948'}}>
                        <cite title="Source Title">Claude Debussy 1862 - 1918</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}