import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Stack } from 'react-bootstrap';
import { BsFillCartCheckFill } from "react-icons/bs";
import Rating from 'react-rating';
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
                    <Card.Body className="bottom-card px-2">
                        <Stack direction="horizontal" gap={2}>
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly></Rating>
                            <p className="mt-3">{rating}</p>
                            <Button className="ms-auto cart-icon">
                                <BsFillCartCheckFill />
                            </Button>
                        </Stack>
                    </Card.Body>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllCourses;