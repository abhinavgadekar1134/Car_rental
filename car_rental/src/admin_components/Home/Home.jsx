import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import CarDetails from '../carDetails/CarDetails'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const adnm = localStorage.getItem('adminname');
  const [ad, setad] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (adnm == null) {
      setad(false);
      window.alert("Please login");
      navigate('/Admin');
    }
    else {
      setad(true);
    }
  }, [])

  return (
    <>
      <div>
        <h1>{ad}</h1>

        {
          ad &&
          <div>
            <Header/>
            <CarDetails />
          </div>

        }
      </div>
  




    </>
  )
}

export default Home
