import React from 'react'
import './Cars.css';
import Filter from './Fillter'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import pic1 from '../Images/1.jpeg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaCar } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md"
import { BsFuelPumpFill } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Cars = () => {

  let val = localStorage.getItem("validatedUser");
  

  const Book = (props) => {
    val = localStorage.getItem("validatedUser");
    if (val === "true") {
      navigate('/BookCar');
      localStorage.setItem("carname", props);
    }
    else{
      window.alert("Please login for Booking ");

    }
  }


  const [data1, setdata1] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_LINK}/findallcar`)
      .then(res => {
        console.log(res.data)
        setdata1(res.data.data)
      }
      )
      .catch(err => {
        console.log(err)
      }
      )
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Filter />
      <div className='div1' >
        <center className='text'> <p style={{ display: 'inline', marginBottom: '50wpx' }}>NOW GET CHANCE TO RIDE IN YOUR DREAM CAR</p></center>
        <Container>
          <Row>
            {
              data1.map((cc) => {
                return (
                  <>
                    <Col md={3}>
                      <Card className='des1' border={false}>
                        <Card.Img variant='top' src={pic1} />
                        <Card.Body style={{ backgroundColor: 'white' }}>
                          <div style={{ top: '12px' }}>
                            <FaCar className='ic1' />
                            <p className='p1' style={{ background: "none", display: 'inline', position: 'relative', left: '20px' }}>
                              {cc.name}
                            </p>
                          </div>
                          <br></br>

                          <div>
                            <MdAirlineSeatReclineExtra className='ic2' />
                            <p style={{ background: "none", display: 'inline', position: 'relative', left: '20px' }}>{cc.noSeats}</p>
                          </div>
                          <br></br>

                          <div>
                            <BsFuelPumpFill className='ic2' />
                            <p className='p1' style={{ display: 'inline', position: 'relative', left: '20px' }}>
                              {cc.cartype}
                            </p>
                          </div>
                          <br></br>

                          <div>
                            <MdCurrencyRupee className='ic2' style={{ position: 'relative' }} />
                            <p className='p1' style={{ background: "none", display: 'inline', position: 'relative', left: '20px' }}>
                              {cc.rent}/hr
                            </p>
                          </div>
                          <br></br>

                          <div style={{ marginTop: '10px', background: "none" }}>
                            <Button variant="success" size="sm" onClick={(props) => {
                              Book(cc.name)
                            }

                            }>
                              Book Now
                            </Button>
                            <Button variant="outline-secondary" size="sm" >
                              See more details of car
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                )
              })
            }
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Cars
