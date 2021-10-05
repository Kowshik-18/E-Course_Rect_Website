import React from 'react';
import { Container, Image, Stack } from 'react-bootstrap';
import Rating from 'react-rating';
import customer from '../images/2968304-removebg-preview.png';
import person from '../images/person.jpg';

const Review = () => {
    return (
        <div className="my-5 py-5">
            <Container className="px-5 mx-5">
                <Stack direction="horizontal" gap={5}>
                    <div>
                        <Image src={customer} fluid style={{ width: "150rem" }}></Image>
                    </div>
                    <Stack gap={3} className="mt-5 pt-5">
                        <h1 className="fw-bold">What our clients say about us</h1>
                        <p>"I am grateful to the platform for timely and expectionally accurate courses for us. Every course are very helpful for me"</p>
                        <Stack direction="horizontal" gap={3}>
                            <Image src={person} roundedCircle width="100" height="100" />
                            <Stack gap={1} className="mt-3">
                                <h4>Mick Perry</h4>
                                <p>Student</p>
                                <Rating
                                    initialRating={4.6}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    readonly></Rating>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
};

export default Review;