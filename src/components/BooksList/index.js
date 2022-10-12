import React from 'react'
import Book from "../Book"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BooksList(props) {
    const params = props
    const { books } = params

    return (
        <Container>
            <Row xs={1} md={2} lg={4} className="g-4" key={Math.random()}>
                {Array.from(books).map((book) => (
                    <Col key={Math.random()}>
                        <Book
                            key={book.id}
                            book={book}>
                        </Book >
                    </Col>
                ))}
            </Row>
        </Container>
    );
}