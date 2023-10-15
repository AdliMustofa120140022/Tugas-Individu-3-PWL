import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container fluid className="bg-primary text-light">
            
            <Row>
                <Col className="text-center py-3">
                    Ini Footer (Adli Mustofa | 120140022)
                </Col>
            </Row>
        </Container>
    );
}