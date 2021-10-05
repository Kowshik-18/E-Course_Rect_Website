import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiCoursera } from "react-icons/si";
import './Footer.css';

const Footer = () => {
    return (
        <div className="color-fix py-5">
            <Container>
                <Row className="g-4 row-cols-md-4">
                    <Col>
                        <Stack gap={5}>
                            <span className="logo"><SiCoursera /> E-Courses</span>
                            <div>
                                <p>Follow Our Social Media</p>
                                <Stack direction="horizontal" gap={3} className="social-icon">
                                     <BsFacebook className="footer-icon1" />
                                     <BsInstagram className="footer-icon2" />
                                     <BsLinkedin className="footer-icon3" />
                                </Stack>
                            </div>
                        </Stack>
                    </Col>
                    <Col>
                         <Stack gap={2}>
                            <h5 className="fw-bold mb-3">
                                Explore
                            </h5>
                            <p>Blog</p>
                            <p>About Us</p>
                            <p>Courses</p>
                            <p>Contact</p>
                         </Stack>
                    </Col>
                    <Col>
                         <Stack gap={2}>
                            <h5 className="fw-bold mb-3">
                                Information
                            </h5>
                            <p>Membership</p>
                            <p>Purchase Guide</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                         </Stack>
                    </Col>
                    <Col>
                         <Stack gap={2}>
                            <h5 className="fw-bold mb-3">
                                Get in Touch
                            </h5>
                            <p>206 no Rahmatgonj</p>
                            <p>+880187******</p>
                            <p>example@gmail.com</p>
                         </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;