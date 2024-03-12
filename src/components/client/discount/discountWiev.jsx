import React from 'react'
import "./discount.css"
import CountdownTimer from './Countdown'

function DiscountWiev() {
  return (
    <div>
        <div className='salesDiv flex-col'>
            <div className='DiscountTablesdc flex'>
                <div className=' w-5 h-10 bg-red-700 rounded'></div>
                <h1 className=' text-base'>Today’s</h1>
            </div>
            <div className='sale'>
                <h1 className='SalesH1'>Flash Sales</h1>
                <CountdownTimer/>
            </div>
        </div>
    </div>
  )
}

export default DiscountWiev