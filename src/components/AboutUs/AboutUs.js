import React from 'react';
import { Container, Image, Stack } from 'react-bootstrap';
import career from '../images/career.png';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="pt-5">
            <Container className="px-5 mx-5">
                <Stack gap={4} className="mx-5 px-5 mb-5 text-center">
                    <small className="fw-bold">ABOUT OUR E-COURSE</small>
                    <h1>
                        We're inspiring the next <span className="fw-bold">generation</span> of the <span className="fw-bold">brightest minds</span> to get proper knowledge by E-Learning
                    </h1>
                </Stack>
                <Stack gap={5} className="mt-5 pt-5">
                    <h2 className="title">Change careers courses <br />
                        Thinking about a career change?</h2>
                    <Container>
                        <Stack direction="horizontal" gap={5}>
                            <div>
                                <Image src={career} fluid style={{width: "150rem"}}></Image>
                            </div>
                            <Stack gap={3} className="mt-5 pt-5">
                                <h3 className="fw-bold">The International Admissions Bulletin</h3>
                                <p>Ut enim ad minim veniam aliquip amet, nostrud exercitation ullamco. Pharetra massaultricies mi quis hendrerit. Elit eget gravida cum sociis.Ut enim ad minim veniam aliquip amet,nostrud exercitation ullamco. Pharetra massaultricies mi quis hendrerit. Elit eget gravida cum sociis.</p>
                                <button className="btn-regular p-3" style={{width: "200px"}}>Read it Now</button>
                            </Stack>
                        </Stack>
                    </Container>
                </Stack>
            </Container>
        </div>
    );
};

export default AboutUs;