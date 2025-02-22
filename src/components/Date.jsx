import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Date = () => {

  const [days, setDays] = useState([]);
  const fetchDays = async () => {
    try {
      const response = await axios.get("https://v1.realtormate.com/api/social_calendar/get/January");
      console.log("Fetched days:", response.data.days);
      setDays(response.data.days);
    } catch (error) {
      console.error("Error fetching days:", error);
    }
  };
    useEffect(() => {
    // fetchMonths();
    fetchDays();
  }, []);
  return (
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
                {day.card_image && <img src={day.card_image} alt="" className='image img-fluid' />}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Date
