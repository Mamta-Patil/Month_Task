import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
function App() {
  const [monthdata,setmonthdata]=useState([])
  const [data,setdata]=useState([])

  function fetchmonthdata()
  {
    axios.get("https://v1.realtormate.com/api/social_calendar/all_months")
    .then((res)=>{
      console.log("monthdata:",res.data)
      setmonthdata(data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  function fetchdata()
  {
    axios.get("https://v1.realtormate.com/api/social_calendar/get/January")
    .then((res)=>{
      console.log(res.data.days)
      setdata(res.data.days)
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    fetchmonthdata()
    fetchdata()
  },[])

  return (
    <>
      <div>
         <div className='month_slider'>
<Carousel>
  {
    monthdata.map((el)=>{
      return(
      <Carousel.Item>
          <Carousel.Caption>
            <h4>{el.month}</h4>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })
  }
    </Carousel>
         </div>


         <div className="days_information">
         {
        data.map((el)=>(
            <div className="main">
              <div className='main_content'>
                <h4>{el.day_of_the_month} </h4>
                <h6>{el.card_header}</h6>
                <p>{el.card_body}</p>
                <img src={el.card_image} alt="" className='image img-fluid w-50 m-auto' />
              </div>
            </div>
        ))
       }
         </div>

      </div>
     
    </>
  )
}

export default App
