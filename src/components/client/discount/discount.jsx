import React from 'react'
import "./discount.css"
import DiscountWiev from './discountWiev'
import DiscountSlide from './discountSlide'


function DiscountTable() {
    return (
        <div className='discount'>
            <DiscountWiev/>
            <DiscountSlide/>
        </div>
    )
}

export default DiscountTable