import React from 'react'
import './Header1';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosFunnel } from "react-icons/io";
import { FaCarSide } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { PiGasCanDuotone } from "react-icons/pi";

const FIlter = () => {
  return (
    <div id='car1'>
      
      <Dropdown>
        <Dropdown.Toggle style={{ marginLeft:'10px',padding:"3px", marginTop:'10px'}}variant="outline-dark" id="dropdown-basic">
           <IoIosFunnel />
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ marginLeft:'',}}>
            <Dropdown>
               <Dropdown.Toggle style={{border:'none', padding:"3px",}}variant="outline-dark" id="dropdown-basic">
                  <FaCarSide/>&nbsp; Car type
               </Dropdown.Toggle>
               <Dropdown.Menu style={{ marginLeft:'110px',padding:"3px",}}>
              
               </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
               <Dropdown.Toggle style={{border:'none', padding:"3px",}}variant="outline-dark" id="dropdown-basic">
                  <MdAirlineSeatReclineExtra />&nbsp; No. of seats
               </Dropdown.Toggle>
               <Dropdown.Menu style={{ marginLeft:'110px',padding:"3px",}} >
                  <Dropdown.Item href="#/action-1">car</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">car</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">car</Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
               <Dropdown.Toggle style={{border:'none', padding:"3px",}}variant="outline-dark" id="dropdown-basic">
                  <PiGasCanDuotone />&nbsp; Fuels
               </Dropdown.Toggle>
               <Dropdown.Menu style={{ marginLeft:'110px',padding:"3px",}}> 
                  <Dropdown.Item href="#/action-1">car</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">car</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">car</Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
        </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default FIlter
