import React from 'react'
import Header from '../headerr/Header'
import { Col, Form, Button, Row, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RatingInput from '../Ratingss/RatingInput';
const GiveFeedback = () => {
    const usermail = localStorage.getItem("validatedUserName");
    const carrnamee = localStorage.getItem("carname");
    const navigate = useNavigate();
    
    const [Ratings, setRatings] = useState('');
    const [FeedBack, setFeedBack] = useState('');

    const [validated, setValidated] = useState(false);



    const handleSubmit = (event) => {

        event.preventDefault()

        const setdata = {
            name: carrnamee,
            usermail: usermail,
            feedBack: FeedBack,
            ratings: Ratings
        }

        axios({
            url: `${process.env.REACT_APP_BACKEND_LINK_IMG2}/postFeedBack`,
            method: 'POST',
            data: setdata

        }).then(res => {
            console.log(res.data);
            window.alert("Thank You For FeedBack");
            navigate("/")
        })
            .catch((err) => {
                console.log(err);
            })

        setValidated(true);

    }
    const handleRatingSubmit = (formData) => {
        const { rating, description } = formData;
        // Here you can handle the submission, e.g., send the rating and description to an API
        console.log(`Submitted Rating: ${rating} stars`);
        console.log(`Description: ${description}`);
        // You can also update state or perform other actions based on the submitted data
    };
    return (

        <>
            {/* <Header /> */}
                <RatingInput onSubmit={handleRatingSubmit} />
            {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Container>

                    <Row>
                        <Col lg={6}>
                            <Form.Label>Ratings</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter ratings out of 5"
                                onChange={(e) => { setRatings(e.target.value) }}
                            />
                        </Col>
                        <Col lg={6}>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">FeedBack</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => { setFeedBack(e.target.value) }}></textarea>
                            </div>
                        </Col>


                    </Row>

                </Container>

                <Button type="submit" style={{ marginLeft: "50px" }}>Submit</Button>
            </Form> */}
        </>
    )
}

export default GiveFeedback
