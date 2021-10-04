import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../Hooks/useCourses';
import AllCourses from '../AllCourses/AllCourses';
import './Services.css';

const Services = () => {

    const [courses] = useCourses();

    return (
        <div className="pt-5 mb-5">
            <h1 className="text-center mb-5 fw-bold">All of Our Courses</h1>
            <Container>
                <Row className="g-4 row-cols-md-3">
                    {
                        courses.map(course =>
                            <AllCourses
                                key={course.key}
                                course={course}
                            ></AllCourses>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;