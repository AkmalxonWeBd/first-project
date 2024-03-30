import React from 'react'
import Slider from './slider'

function Mainn() {
  return (
    <div className='flex gap-[20px] h-[auto] items-center   justify-around px-3  pt-[30px]  m-auto '>
       <div className="sidebar flex h-[345px] w-[217px] flex-col items-start justify-between mt-[25px] pl-[40px]">
        <h2 className=' text-black	hover:text-red-700  hover:text-[20px] transition-all ease-out duration-300'>Woman's fashion</h2>
        <h2 className=' text-black	hover:text-red-700  hover:text-[20px] transition-all ease-out duration-300'>Men's fashion</h2>
        <h2 className=' text-black	hover:text-red-700  hover:text-[20px] transition-all ease-out duration-300'>Electronics</h2>
        <h2 className=' text-black	hover:text-red-700  hover:text-[20px] transition-all ease-out duration-300'>Home & Lifestyle</h2>
        <h2 className=' text-black	hover:text-red-700  hover:text-[20px] transition-all ease-out duration-300'>Medicine</h2>
        <h2 className=' text-black	hover:text-red-700  hover:text-[20px] transition-all ease-out duration-300'>Sports & Outdoor</h2>
        <h2 className=' text-black	hover:text-red-700  hover:text-[20px] transition-all ease-out duration-300'>Baby's & Toys</h2>
        <h2 className=' text-black	hover:text-red-700  hover:text-[20px] transition-all ease-out duration-300'>Groceries & Pets</h2>
        <h2 className=' text-black	hover:text-red-700  hover:text-[20px] transition-all ease-out duration-300'>Health & Beauty</h2>
       </div>
       {/* banner */}
       <div className="slider ">
        <Slider/>
       </div>
    </div>
  )
}

export default Mainn
