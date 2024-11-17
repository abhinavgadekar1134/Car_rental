import React from 'react'
import Header from '../headerr/Header'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import "./History.css";
import { CiUser } from "react-icons/ci";
const Car_Ratings = () => {
    const [data1, setdata1] = useState([])
    const [show, setShow] = useState(false);
    // const [rating, setRating] = useState(0);
    let rating = 1;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const carname = localStorage.getItem("carname");
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_LINK_IMG2}/findallFeedBack`)
            .then(res => {
                console.log(res.data)
                setdata1(res.data.data)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )


    }, [data1])
    let mystate = false;
    const handleRatingChange = (newRating) => {
        rating = newRating
    };
    return (
        <>
            <Header />
            <div className='InnerTable'>

                        {
                            data1.map((ii) => {
                                if (ii.name == carname) {
                                    mystate = true
                                }
                                else {
                                    mystate = false
                                }
                                return (
                                    <>
                                        
                                        {
                                            mystate&&<div className='feedbackMainDiv'>
                                                <CiUser className='useicon' />
                                                <div className='feedin'>
                                                    <div className='feedback1'>
                                                        <h4>{ii.usermail}</h4>
                                                        <span className='starsDiv'>{[1, 2, 3, 4, 5].map((star) => (

                                                            <span
                                                                key={star}
                                                                className={star <= rating ? 'star active' : 'star'}
                                                                onClick={() => handleRatingChange(star)}

                                                            >
                                                                <span className='nodisplay'>{rating = ii.ratings}</span>
                                                                &#9733;
                                                            </span>
                                                        ))}</span>
                                                    </div>
                                                    <div className='feedback2'>
                                                        <p>{ii.feedBack}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </>
                                )
                            })
                        }
                  
            </div>

        </>

    )
}

export default Car_Ratings
