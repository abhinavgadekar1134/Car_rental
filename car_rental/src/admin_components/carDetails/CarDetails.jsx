import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap';
import CarAdd from './CarAdd';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const CarDetails = () => {
    const [data1, setdata1] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get("http://localhost:8000/abc/findallcar")
            .then(res => {
                console.log(res.data)
                setdata1(res.data.data)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }, [])

    const handleDelete = (carname) => {


        axios.delete(`http://localhost:8000/abc/deleteCar/${carname}`)
            .then(res => {
                console.log(res.data);
                window.alert('data deleted')
                setdata1(prevData => prevData.filter(item => item.carname !== carname));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const navigate = useNavigate();
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Car
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Car Details</Modal.Title>
                </Modal.Header>
                <Modal.Body><CarAdd /></Modal.Body>

            </Modal>

            <h3 style={{ marginTop: "20px" }} className='text-center'>Car Details</h3>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Name</th>
                        <th>Model</th>
                        <th>Car Type</th>
                        <th>Rent</th>
                        <th>Fuel</th>
                        <th>Price</th>
                        <th>Number of Seats</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data1.map((ii) => {
                            return (
                                <>
                                    <tr>
                                        {/* <th scope="row">1</th> */}
                                        <td>{ii.name}</td>
                                        <td>{ii.model}</td>
                                        <td>{ii.cartype}</td>
                                        <td>{ii.rent}</td>
                                        <td>{ii.fuel}</td>
                                        <td>{ii.price}</td>
                                        <td>{ii.noSeats}</td>
                                        <td>{ii.desc}</td>

                                        {/* <Link className='nav-linkss' to={"/Update"}>Home</Link> */}
                                        <td><button className='btn btn-success' onClick={() => {
                                            navigate('/UpdateCar');
                                            localStorage.setItem("carname", ii.name);
                                        }

                                        } >Update</button><button className='btn btn-danger' onClick={() => handleDelete(ii.name)} >Delete</button></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>


        </>
    )
}

export default CarDetails
