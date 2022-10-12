import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export default function Book(props) {
    const params = props
    const book = params.book
    const { title, url } = book

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant="primary">Ver Detalle</Button>
                <br />
                <Badge bg="warning">Novela</Badge>{' '}
                <Badge bg="dark">4º ESO</Badge>{' '}
            </Card.Body>
        </Card>
    )
}