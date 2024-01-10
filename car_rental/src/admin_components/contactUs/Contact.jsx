import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Header from '../header/Header';
const Contact = () => {
  const [data1, setdata1] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/abc/findallcontact")
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

  const handleDelete = (email) => {


    axios.delete(`http://localhost:8000/abc/deleteCont/${email}`)
      .then(res => {
        console.log(res.data);
        window.alert('data deleted')
        setdata1(prevData => prevData.filter(item => item.email !== email));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
    <Header/>
      <h3 style={{ marginTop: "20px" }} className='text-center'>Contact Us </h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>State</th>
            <th>Contact</th>
            <th>Suggestion</th>
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
                    <td>{ii.fname}{ii.lname}</td>
                    <td>{ii.email}</td>
                    <td>{ii.city}</td>
                    <td>{ii.state}</td>
                    <td>{ii.contactno}</td>
                    <td>{ii.suggestion}</td>

                    {/* <Link className='nav-linkss' to={"/Update"}>Home</Link> */}
                    <td>
                      {/* <button className='btn' onClick={(props) => {
                      navigate('/UpdateContact');
                      localStorage.setItem("carname", ii.name);
                    }

                    } >Update</button> */}
                    <button className='btn btn-danger' onClick={() => handleDelete(ii.email)} >Delete</button></td>
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

export default Contact
