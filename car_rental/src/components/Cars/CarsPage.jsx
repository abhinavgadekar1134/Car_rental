import React from 'react'
import Header1 from './Header1'
import Cars from './Cars'
import Header from '../headerr/Header'
import Footer from '../Footer/Footer'
const CarsPage = () => {
  return (
    <>
        <Header/>
        <Header1/>
        <h2 className='text-center' style={{marginTop:"20px",color:"red"}}>Cars</h2>
        <Cars/>
        <Footer/>
    </>
  )
}

export default CarsPage
