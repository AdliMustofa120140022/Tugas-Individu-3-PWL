import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Button } from 'react-bootstrap';

export default function Beranda() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1); // Track the page number

    useEffect(() => {
        fetchData();
    }, [page]); // Re-run effect when the page changes

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/everything?q=tesla&from=2023-09-15&sortBy=publishedAt&apiKey=2cec721a651f4b1a80436877904cba3b&page=${page}`
            );
            setData(response.data.articles.slice(0, 4));
        } catch (error) {
            console.error(error);
        }
    };

    const handleNextClick = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="container mt-4 mb-4">
            <Row xs={1} md={2} lg={4} className="g-4">
                {data.map((news, index) => (
                    <Col key={index}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={news.urlToImage} />
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Text>{news.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Button
                onClick={handleNextClick}
                variant="primary"
                className="mt-3 px-5"
            >
                Next
            </Button>
        </div>
    );
}
