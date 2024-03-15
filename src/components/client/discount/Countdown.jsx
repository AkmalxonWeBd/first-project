import React, { useEffect, useState } from 'react';
import "./discount.css"

const CountdownTimer = () => {
    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    const endDate = new Date("04/02/2024 00:00:00").getTime();

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = endDate - now;

            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);
            
            setDays(formatTime(d));
            setHours(formatTime(h));
            setMinutes(formatTime(m));
            setSeconds(formatTime(s));

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="saleTime">
            <div className="circle">
                <div id="days"><span>Days</span><br /><h1 className='timeFontSize'>{days}</h1></div>
            </div>
            <div className="circle">
                <div id="hours"><span>Hours</span><br /><h1 className='timeFontSize'>{hours}</h1></div>
            </div>
            <div className="circle">
                <div id="minutes"><span>Minutes</span><br /><h1 className='timeFontSize'>{minutes}</h1></div>
            </div>
            <div className="circle">
                <div id="seconds"><span>Seconds</span><br /><h1 className='timeFontSize'>{seconds}</h1></div>
            </div>
        </div>
    );
};

export default CountdownTimer;
