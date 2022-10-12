import React from 'react'
import Form from 'react-bootstrap/Form';
import './styles.css'

export default function BookSearch(){
    return (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>¿Qué quieres buscar?</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form>
      );
}