import React from 'react'
import Card from 'react-bootstrap/Card'

export const FamousPhrase = () => {
    return (
        <Card
            style={{
                backgroundColor: '#01172f',
                border: '3px double #FFFFFF',
                margin: '50px 0',
            }}
        >
            <Card.Body>
                <blockquote className="blockquote text-center mb-0">
                    <p style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
                        {' '}
                        La Música es la aritmética de los sonidos, como la
                        óptica es la geometría de la luz.{' '}
                    </p>
                    <footer
                        className="blockquote-footer"
                        style={{ color: '#FFFFFF' }}
                    >
                        <cite title="Source Title">
                            Claude Debussy 1862 - 1918
                        </cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}
