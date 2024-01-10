import React from 'react'
import './Cars.css';
import Button from 'react-bootstrap/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaArrowCircleDown } from "react-icons/fa";
const Header1 = () => {
  return (
    <>
      <div>

        <header>
          <div className='head1' style={{ height: '700px', width: '100%', padding: '30px', fontSize: '80px', }}>

            <div className='in-head1'>CHOOSE<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YOUR<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CAR
              <div className='in-div11'>
                <AnchorLink style={{ backgroundColor: " rgba(255, 255, 255, 0)", background: 'none' }} href="#car1">
                  <Button style={{ marginLeft: '80px', backgroundColor: " rgba(255, 255, 255, 0)", background: 'none' }} variant="outline-light"> Click here &nbsp;<FaArrowCircleDown style={{ backgroundColor: " rgba(255, 255, 255, 0)" }} /></Button>{' '}
                </AnchorLink>
              </div>
            </div>

          </div>
        </header>
      </div>
    </>
  )
}

export default Header1
