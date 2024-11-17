import React from 'react'
import Header from '../headerr/Header';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
const HIstory = () => {
    const uname = localStorage.getItem("validatedUserName");
    const validatedUserEmail = localStorage.getItem("validatedUserEmail");
    const usermail = localStorage.getItem("validatedUserName");
    let val = localStorage.getItem("validatedUser");
    const [validated, setvalidated] = useState('');
    const navigate = useNavigate();
    const [data1, setdata1] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_LINK_IMG2}/findallbooking`)
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
    
    let i =false;
    const toggle = ()=>{
        if(i==false){
            i = true
        }
        else{
            i=true
        }
    }   

    // const [mystate,setmystate] = useState(false);
    let mystate = false;
    return (
        <>
            <Header />
            <div>
                <center> <h3>My Orders History</h3> </center>
                
                <Table striped bordered hover size="sm" className='InnerTable'>
                    <thead>
                        <tr>
                            <th>Car Name</th>
                            <th>Hours</th>
                            <th>Date</th>
                            <th>Payment</th>
                            <th>Give Review</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data1.map((ii) => {
                                if(ii.usermail == usermail){
                                    mystate = true
                                }
                                else{
                                   mystate = false
                                }
                                return (
                                    
                                    <>
                                        {mystate  &&
                                        <tr>
                                            <td>{ii.carname}</td>
                                            <td>{ii.hours}</td>
                                            <td>{ii.date}</td>
                                            <td>{ii.payment}</td>
                                            

                                            {/* <Link className='nav-linkss' to={"/Update"}>Home</Link> */}
                                            <td><button className='btn btn-success' onClick={() => {
                                                 localStorage.setItem("carname", ii.carname);
                                                navigate('/GiveFeedBack');
                                               

                                            }

                                            } >Review</button>
                                                </td>
                                        </tr>}
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

export default HIstory
