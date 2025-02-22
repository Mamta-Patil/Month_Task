import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from 'react-router-dom';

const Months = () => {
    const [months, setMonths] = useState([]);
    const data=useParams()

    const responsiveSettings = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };
    
    const fetchMonths = async () => {
        try {
            const response = await axios.get("https://v1.realtormate.com/api/social_calendar/all_months");
            console.log("Fetched months:", response.data);
            setMonths(response.data);
        } catch (error) {
            console.error("Error fetching months:", error);
            setMonths([])
        }
    };

    useEffect(() => {
        fetchMonths();
    }, []);

    return (
        <div>
            <Carousel responsive={responsiveSettings} className='carousel'>
                {months.map((month) => (
                    <div key={month.id}>
                        <Link  to={`/${month.month}`} className='nav-link'>
                        <p>{month.calendar_banner_text}</p>
                        </Link>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Months
