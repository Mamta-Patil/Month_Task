import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Date = () => {

  const [days, setDays] = useState([]);
  const {month}=useParams()
  const [loading,setloading]=useState([]);

  const fetchDays = async () => {
    try {
    setloading(true)
      const response = await axios.get(`https://v1.realtormate.com/api/social_calendar/get/${month}`);
      console.log("Fetched days:", response.data.days);
      setDays(response.data.days);
      setloading(false)
    } 
    catch (error) {
      console.error("Error fetching days:", error);
      setloading(false)
    }
  };
    useEffect(() => {
    fetchDays();
  }, [month]);

  return loading ? <h1>loading......</h1> :(
    <div>
        <div className="main">
          {days.map((day) => (
            <div className="" key={day.day_of_the_month}>
              <div className='main_content'>
                <div>
                <p className='day_of_the_week'>{day.day_of_the_week}</p>
                <p className='day_of_the_month'>{day.day_of_the_month} </p>
                <h6 className='card_header m-0'>{day.card_header}</h6>
                <p className='card_body'>{day.card_body}</p>
                <a href="" className="button m-0" >SHEDDULE POST</a>
                </div>
                <img src={day.card_image} alt="" className='image img-fluid' />
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Date
