import React from 'react';
import { Card, Container, Image, Row, Stack } from 'react-bootstrap';
import { BiCustomize } from "react-icons/bi";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FaPhotoVideo } from "react-icons/fa";
import { useHistory } from 'react-router';
import useCourses from '../../Hooks/useCourses';
import AllCourses from '../AllCourses/AllCourses';
import headerImg from '../images/header-img-removebg-preview.png';
import './Home.css';

const Home = () => {

    const [courses] = useCourses();
    const goodCourses = courses.filter(course => course.rating >= 4.5);

    let history = useHistory();

    function handleClick() {
        history.push("/services");
    }

    return (
        <div>
            <article className="top-part py-5">
                <Container className="py-5">
                    <Stack direction="horizontal">
                        <Stack direction="vertical" gap={4} className="mt-5 top-info">
                            <small className="p-2 text-center"><span className="p-1">Hot !</span> Stay connected with me and get 40% off</small>

                            <h1>Expert's Course <br />
                                is Here For Your <br />
                                Expand.</h1>

                            <p>Learnning is a life-long journey that in fact we never find
                                the<br /> terminate stop. Stop searching and enjoy the process.</p>
                        </Stack>
                        <div>
                            <Image src={headerImg} fluid width="800"></Image>
                        </div>
                    </Stack>
                </Container>
            </article>
            <article className="p-5 mt-5">
                <Stack direction="horizontal" gap={3} className="features mx-5 mt-4">
                    <Card className="card-fix">
                        <Card.Body className="d-flex align-items-center flex-column">
                            <Card.Title className="mb-3 title-card1">
                                <BiCustomize className="mt-4" />
                            </Card.Title>
                            <Card.Text>
                                <h4 className="fw-bold mb-3">Customize Freely to Your Preferences</h4>
                                <p>Issue cards with limits for your staff with a click</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card-fix">
                        <Card.Body className="d-flex align-items-center flex-column">
                            <Card.Title className="mb-3 title-card2">
                                <BsFillCloudArrowUpFill className="mt-4" />
                            </Card.Title>
                            <Card.Text>
                                <h4 className="fw-bold mb-3">Cloud or Download Lessons to Device</h4>
                                <p>Issue cards with limits for your staff with a click</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card-fix">
                        <Card.Body className="d-flex align-items-center flex-column">
                            <Card.Title className="mb-3 title-card3">
                                <FaPhotoVideo className="mt-4" />
                            </Card.Title>
                            <Card.Text>
                                <h4 className="fw-bold mb-3">Multimedia Study Materials and Info Channels</h4>
                                <p>Issue cards with limits for your staff with a click</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Stack>
            </article>
            <article className="my-5 py-5">
                <Container>
                    <div className="d-flex justify-content-between mb-4 px-4">
                        <h1>Propular Courses</h1>
                        <button className="btn-regular px-3" onClick={handleClick}>Browse All</button>
                    </div>
                    <Row className="g-4 row-cols-md-3">
                        {
                            goodCourses.map((course) =>
                                <AllCourses
                                    key={course.key}
                                    course={course}
                                ></AllCourses>
                            )
                        }
                    </Row>
                </Container>
            </article>
        </div>
    );
};

export default Home;