import React from 'react';
import { Container, Image } from 'react-bootstrap';
import page404 from '../images/3959810-removebg-preview.png';

const NotFound = () => {
    return (
        <div>
            <Container className="text-center">
                <Image src={page404} fluid width="500"></Image>
            </Container>
        </div>
    );
};

export default NotFound;