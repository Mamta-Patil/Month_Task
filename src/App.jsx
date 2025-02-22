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
      setmonthdata(res.data)
      console.log("monthdata after fetching : ",res.data)
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
      console.log("days data after fetching ",res.data.days)
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
      <div className='row m-0'>
         {/* <div className='month_slider col-12'>
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
         </div> */}

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



         <div className="main col-12 ">
         {
        data.map((el)=>(
            <div className="row">
              <div className='main_content'>
                <h4>{el.day_of_the_month} </h4>
                <h6>{el.card_header}</h6>
                <p>{el.card_body}</p>
                <img src={el.card_image} alt="" className='image img-fluid' />
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
