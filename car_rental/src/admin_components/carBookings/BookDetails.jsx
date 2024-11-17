import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Header from '../header/Header';
const BookDetails = () => {

    const [data1, setdata] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_LINK_IMG2}/findallbooking`)
            .then(res => {
                console.log(res.data)
                setdata(res.data.data)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }, [])
    const handleDelete = (useremail) => {

        axios.delete(`${process.env.REACT_APP_BACKEND_LINK_IMG2}/deletebooking/${useremail}`)
            .then(res => {
                console.log(res.data);
                window.alert("data deleted");
                setdata(prevData => prevData.filter(item => item.useremail !== useremail));
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (

        <>
            <Header/>

            <h3 style={{ marginTop: "20px" }} className='text-center'>Booking Details </h3>
            <div style={{width:"100%",overflowX:"scroll"}}>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                        
                            {/* <th>#</th> */}
                            <th>User Mail</th>
                            <th>User Name</th>
                            <th>Car Name</th>
                            <th>Payment</th>
                            {/* <th>Source</th>
                            <th>Destination</th> */}
                            <th>hours</th>
                            <th>driver</th>
                            <th>date</th>
                            <th>contactno</th>
                            <th>Date and Time booking done</th>

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
                                            <td>{ii.usermail}</td>
                                            <td>{ii.username}</td>
                                            <td>{ii.carname}</td>
                                            <td>{ii.payment}</td>

                                            <td>{ii.hours}</td>
                                            <td>{ii.driver}</td>
                                            <td>{ii.date}</td>
                                            <td>{ii.contactno}</td>
                                            <td>{ii.curdate}</td>
                                            {/* <td>{ii.source}</td>
                                            <td>{ii.destination}</td> */}
                                            {/* <Link className='nav-linkss' to={"/Update"}>Home</Link> */}
                                            <td><button className='btn btn-success' onClick={(props) => {
                                                navigate('/BookUpdate');
                                                localStorage.setItem("useremail", ii.usermail);
                                            }

                                            } >Update</button><button className='btn btn-danger' onClick={(useremail) => handleDelete(ii.usermail)} >Delete</button></td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )

}

export default BookDetails
