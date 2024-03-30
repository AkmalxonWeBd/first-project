import React, { useEffect, useState } from 'react';
import "./discount.css"
import { useGetDiscountQuery } from '../../redux/slice/discount';
import Countdown from 'react-countdown';

const CountdownTimer = () => {
    const { data } = useGetDiscountQuery();

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    const [countdownTime, setCountdownTime] = useState(() => {
        const storedCountdownTime = localStorage.getItem('countdownEndTime');
        return storedCountdownTime ? parseInt(storedCountdownTime) : Date.now();
    });

    useEffect(() => {
        if (data && data.length > 0) {
            const item = data[0]; // Assuming only one item in the data array
            const backend_seconds = item.time_left;

            let diffTime = backend_seconds * 1000;
            const endTime = Date.now() + diffTime;

            localStorage.setItem('countdownEndTime', endTime);

            setCountdownTime(endTime);
        }
    }, [data]);
  
    return (
        <div id="saleTime">
            <Countdown date={countdownTime} renderer={({ days, hours, minutes, seconds }) => (
                <div className="countdown-wrapper">
                    <div className="countdown-item">
                        <p>Days</p>
                        <span>{days}</span>
                    </div>
                    <h1 className='sa'>:</h1>
                    <div className="countdown-item">
                        <p>Hours</p>
                        <span>{formatTime(hours)}</span>
                    </div>
                    <h1 className='sa'>:</h1>
                    <div className="countdown-item">
                        <p>Minutes</p>
                        <span>{formatTime(minutes)}</span>
                    </div>
                    <h1 className='sa'>:</h1>
                    <div className="countdown-item">
                        <p>Seconds</p>
                        <span>{formatTime(seconds)}</span>
                    </div>
                </div>
            )} />
        </div>
    );
};

export default CountdownTimer;
