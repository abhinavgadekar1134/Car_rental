import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pict from '../Images/blog-1.jpg'
import pic from '../Images/blog-2.jpg'
import pi from '../Images/blog-3.jpg'
import { VscAccount } from "react-icons/vsc";
import Header from '../headerr/Header';
import Footer from '../Footer/Footer';
import './Blog.css';
const Blog = () => {
  return (
    <>
    <Header/>
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <Card style={{ width: '18rem' }} className='blogcard'>
              <Card.Img variant="top" src={pict} />
              <Card.Body >
                <Card.Title>The Best way to drive Cars</Card.Title>
                <Card.Text>
                  Driving a car safely involves several key practices
                  This key practices are given are as follows :
                </Card.Text>
                <a href="https://www.wikihow.com/Drive-a-Car"><Button variant="primary">Read More</Button></a>
                <hr></hr>
                <VscAccount />   Abhinav
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ width: '18rem' }} className='blogcard'>
              <Card.Img variant="top" src={pic} />
              <Card.Body>
                <Card.Title>If your Car battery is Down</Card.Title>
                <Card.Text>
                  If your car battery is dead, here are a few steps you can take<br></br>
                  As follows:
                </Card.Text>
                <a href="https://www.wikihow.com/Survive-a-Long-Road-Trip"><Button variant="primary">Read More</Button></a>
                <hr></hr>
                <VscAccount />   Pranav
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ width: '18rem' }} className='blogcard'>
              <Card.Img variant="top" src={pi} />
              <Card.Body>
                <Card.Title>The best way to give Trip</Card.Title>
                <Card.Text>
                  Giving a trip or a ride to someone involves several considerations to ensure safety, comfort, etc..
                </Card.Text>
                <a href="https://www.wikihow.com/Check-Your-Fuel-Pump"><Button variant="primary">Read More</Button></a>
                <hr></hr>
                <VscAccount />   Prakash
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br><br></br>

      <Container>
        <Row>
          <Col md={4}>
            <Card style={{ width: '18rem' }} className='blogcard'>
              <Card.Img variant="top" src={pict} />
              <Card.Body>
                <Card.Title>Fuel Checking</Card.Title>
                <Card.Text>
                  Checking fuel involves monitoring the fuel level in your vehicle's tank and ensuring you have enough for your intended journey.
                </Card.Text>
                <a href="https://www.wikihow.com/Drive-at-Night"><Button variant="primary">Read More</Button></a>
                <hr></hr>
                <VscAccount />   Abhinav
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ width: '18rem' }} className='blogcard'>
              <Card.Img variant="top" src={pic} />
              <Card.Body>
                <Card.Title>Car driving at Night</Card.Title>
                <Card.Text>
                  Driving at night requires extra caution due to reduced visibility. Here are some tips for safer nighttime driving.
                </Card.Text>
                <a href="https://www.wikihow.com/Avoid-Accidents-While-Driving"><Button variant="primary">Read More</Button></a>
                <hr></hr>
                <VscAccount />   Abhinav
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ width: '18rem' }} className='blogcard'>
              <Card.Img variant="top" src={pi} />
              <Card.Body>
                <Card.Title>Your Safety in Car</Card.Title>
                <Card.Text>
                  Safety in a car is crucial for both drivers and passengers. Here are essential safety measures to prioritize
                </Card.Text>
                <a href="https://www.wikihow.com/Avoid-Accidents-While-Driving"><Button variant="primary">Read More</Button></a>
                <hr></hr>
                <VscAccount />   Pranav
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br><br></br><br></br>
    </div>
    <Footer/>
    </>
  )
}

export default Blog
