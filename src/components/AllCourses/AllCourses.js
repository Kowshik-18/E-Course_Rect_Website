import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './AllCourses.css';

const AllCourses = (props) => {

    const { name, catagory, price, img, rating } = props.course;

    return (
        <Col>
            <Card className="course-card">
                <Card.Img variant="top" src={img} fluid className="mb-2" />
                <Card.Body className="p-4">
                    <Card.Text className="d-flex justify-content-between card-top">
                        <h6><span>.</span>{catagory}</h6>
                        <p>${price}</p>
                    </Card.Text>
                    <Card.Title className="mb-4 fw-bold">
                        {name}
                    </Card.Title>
                    <Card.Text>
                        Rating: {rating}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllCourses;