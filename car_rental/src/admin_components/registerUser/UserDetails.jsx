import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Header from '../header/Header';
const UserDetails = () => {

    const [data1, setdata] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_LINK}/findalluser`)
            .then(res => {
                console.log(res.data)
                setdata(res.data.data)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }, [data1])
    const handleDelete = (email) => {

        axios.delete(`${process.env.REACT_APP_BACKEND_LINK}/delete/${email}`)
            .then(res => {
                console.log(res.data);
                window.alert("data deleted");
                setdata(prevData => prevData.filter(item => item.email !== email));
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (

        <>
            <Header/>
            
            <h3 style={{ marginTop: "20px" }} className='text-center'>User Details </h3>
            <div style={{width:"100%",overflowX:"scroll"}}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>ContactNo</th>
                            <th>Gender</th>
                            <th>Address</th>
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
                                            <td>{ii.fname}</td>
                                            <td>{ii.lname}</td>
                                            <td>{ii.dob}</td>
                                            <td>{ii.email}</td>
                                            <td>{ii.contactno}</td>
                                            <td>{ii.gender}</td>
                                            <td>{ii.address}</td>
                                            {/* <Link className='nav-linkss' to={"/Update"}>Home</Link> */}
                                            <td><button className='btn btn-success' onClick={(props) => {
                                                navigate('/UserUpdate');
                                                localStorage.setItem("useremail", ii.email);
                                            }

                                            } >Update</button><button className='btn btn-danger' onClick={() => handleDelete(ii.email)} >Delete</button></td>
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

export default UserDetails;
