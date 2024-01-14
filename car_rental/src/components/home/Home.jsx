import React from 'react'
import './Home.css'
import img1 from '../Images/slider-img/slider-1.jpg';
import img2 from '../Images/slider-img/slider-2.jpg';
import img3 from '../Images/slider-img/slider-3.jpg';
import b1 from '../Images/Pic/blog-1.jpg'
import b2 from '../Images/Pic/blog-3.jpg'
import b3 from '../Images/Pic/drive.jpg'
import dri from '../Images/Pic/bmwoffer.png'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';


import carimg1 from '../Images/bmw-offer.png';
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../Footer/Footer';
import Cars from '../Cars/Cars';
import Header from '../headerr/Header';
import { FaBolt, FaCarSide, FaCity, FaPlaneDeparture, FaCheckDouble } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
  
  return (
    <>
      <Header />
      <div>

        {/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block car-img" alt="k" />
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block car-img" alt="k" />
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block car-img" alt="k" />
            </div>
            <div className='inner-div'>
              <div className='inn-div'>
                <h5>For rent 500₹ Per Day</h5>
                <h2>Reserved Now and Get 50%</h2><br />
                <h2>Off</h2><br /><br />
                <Button>Reserve now</Button>
              </div>

            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}


        <Carousel>
          <Carousel.Item>
            <img src={img1} alt="" srcset="" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} alt="" srcset="" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} alt="" srcset="" />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
        <div className='inner-div'>
            <div className='inn-div'>
              <h5>For rent 500₹ Per Day</h5>
              <h2>Reserved Now and Get 50%</h2><br />
              <h2>Off</h2><br /><br />
              <Button>Reserve now</Button>
            </div>

          </div>
      </div>

      <Container>
        <Row className='about-us-h'>
          <Col md={6}>
            <div>
              <h5 style={{ color: "#e3db00" }}>About Us</h5>

              <h2>Welcome to Car Rent Service</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, nihil facere unde autem dolorem a labore libero sint voluptates ad culpa consectetur maiores, quaerat hic reprehenderit ex animi doloremque aspernatur.</p>
              <table className='table' >
                <tr>
                  <td><div><FaCheckDouble style={{ color: "#e3db00" }} /> Lorem ipsum dolor sit amet consectetur </div></td>
                  <td><div><FaCheckDouble style={{ color: "#e3db00" }} /> Lorem ipsum dolor sit amet consectetur </div></td>
                </tr>
                <tr>
                  <td><div><FaCheckDouble style={{ color: "#e3db00" }} /> Lorem ipsum dolor sit amet consectetur </div></td>
                  <td><div><FaCheckDouble style={{ color: "#e3db00" }} /> Lorem ipsum dolor sit amet consectetur </div></td>

                </tr>
              </table>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <img src={carimg1} alt="" />
            </div>

          </Col>
        </Row>
      </Container>

      <div>

        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>
            <Col lg={4}>
              <Card >
                {/* <ul className="social">
            <li><a href="mailto:fgh@gmail.com"><FontAwesomeIcon icon={faLocationPin} /></a></li>
            
            </ul>   */}
                {/* <FontAwesomeIcon icon={faLocationPin} style={{fontSize:"40px",marginTop:"10px"}}/> */}
                <center><FaLocationDot style={{ fontSize: "40px", marginTop: "10px" }} /> </center>
                <Card.Body>
                  <Card.Title>City Transfer</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                </Card.Body>
              </Card>

            </Col>
            <Col lg={4}>
              <Card >
                <center><FaCity style={{ fontSize: "40px", marginTop: "10px" }} /></center>
                <Card.Body>
                  <Card.Title>Whole City Tour</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                </Card.Body>
              </Card>

            </Col>
            <Col lg={4}>
              <Card>

                <center><FaCarSide style={{ fontSize: "40px", marginTop: "10px" }} /></center>
                <Card.Body>
                  <Card.Title>Unlimited mile Car Rental</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                </Card.Body>
              </Card>

            </Col>
            <Col lg={4}>
              <Card >
                <center><FaBolt style={{ fontSize: "40px", marginTop: "10px" }} /></center>
                <Card.Body>
                  <Card.Title>Fast And Easy Booking</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                </Card.Body>
              </Card>

            </Col>
            <Col lg={4}>
              <Card >
                <center><FaLocationDot style={{ fontSize: "40px", marginTop: "10px" }} /></center>
                <Card.Body>
                  <Card.Title>Many Pickup Location</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                </Card.Body>
              </Card>

            </Col>
            <Col lg={4}>
              <Card >
                <center><FaPlaneDeparture style={{ fontSize: "40px", marginTop: "10px" }} /></center>
                <Card.Body>
                  <Card.Title>Airport Transfer</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                </Card.Body>
              </Card>

            </Col>



          </Row>
        </Container>
      </div>
      <br /><br />
      <div>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Come With</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>
            <Cars />
          </Row>
        </Container>

      </div>
      <br /><br /><br />
      <div style={{ backgroundColor: "blue", height: "400px" }}>
        <Container>
          <Row>
            <Col lg={6}>
              {/* <img src={dri} style={{ height: "350px", width: "550px" }} alt='' /> */}
              <img src={dri} style={{  marginTop: "100px", marginLeft: "40px" ,width:"auto" }} alt='' />
            </Col>
            <Col lg={6}>
              <h3 style={{ color: "white", marginTop: "100px", marginLeft: "40px" }}>Do You Want To Earn With Us?..So<br /> Don't Be Late</h3>
              <Button style={{ marginLeft: "40px" }}>Become a Driver</Button>
            </Col>
          </Row>
        </Container>

      </div>



      <br /><br /><br />
      <div>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our Blog</h6>
              <h2 className="section__title">Latest Blog</h2>
            </Col>
            <Col lg={4}>
              <Card >
                <Card.Body>
                  <Card.Img src={b1}></Card.Img>
                  <Card.Title>The Best way to Drive</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                  <Card.Link href="#">Read More</Card.Link>
                </Card.Body>
              </Card>

            </Col>
            <Col lg={4}>
              <Card >
                <Card.Body>
                  <Card.Img src={b2}></Card.Img>
                  <Card.Title>If Your Car battary is Low</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                  <Card.Link href="#">Read More</Card.Link>
                </Card.Body>
              </Card>

            </Col>
            <Col lg={4}>
              <Card >
                <Card.Body>
                  <Card.Img src={b3}></Card.Img>
                  <Card.Title>The Best way to Give trip</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                  <Card.Link href="#">Read More</Card.Link>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </Container>


      </div>
      <Footer />
    </>
  )
}

export default Home
