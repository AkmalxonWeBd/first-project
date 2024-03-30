import React from 'react'
import Img from '../Footer/footer Img/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png';
import Img2 from '../Footer/footer Img/Qrcode 1.png'
import Img3 from '../Footer/footer Img/download-appstore.png'
import { FaFacebookF } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer flex justify-around items-center  bg-black  mt-32 h-[345px] w-[auto]'>
         {/* <h1>FOOTER</h1> */}
         <div className=' flex-col flex  justify-around items-start  text-white h-[236px] w-auto'>
          <h1>Exclusive</h1>
          <h3>Subscribe</h3>
          <h4>Get 10% off from your first order</h4>
          <input type="search" placeholder='Enter your email' className=' border bg-transparent  h-[48px] w-[217px]' />
         </div>
         <div className=' flex flex-col gap-8 items-start  text-white  h-[236px] w-auto'>
          <h1>Support</h1>
          <span className=' flex flex-col gap-6 items-start '>
              <h4>111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</h4>
              <h4>exclusive@gmail.com</h4>
              <h4>+88015-88888-9999</h4>
          </span>
         </div>
         <div className='flex  flex-col justify-between items-start gap-4 text-white'>
          <h1>Account</h1>
          <a href="#">My Account</a>
          <a href="#">Login/Register</a>
          <a href="#">Cart</a>
          <a href="#">Wishlist</a>
          <a href="#">Shop</a>
         </div>
         {/* /////////////////// */}
         <div className='flex  flex-col justify-between items-start gap-6 text-white mb-4'>
          <h1>Quick Link</h1>
          <a href="#">Privacy and Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">FAQ</a>
          <a href="#">Contract</a>
         </div>
         <div className='flex flex-col justify-between items-start  text-white gap-6'>
          <h1>Download App</h1>
          <p className=' text-gray-500'>Save $3 With App, New User Only</p>
          <span className='flex gap-2'>
            <img src={Img2} alt="" />
            <span className='flex flex-col gap-3'>
              <img src={Img} alt="" />
              <img src={Img3} alt="" />
            </span>
          </span>
          {/*  */}
          <span className='flex text-3xl gap-5'>
          <FaFacebookF />
          <FiTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          </span>
         </div>
    </div>

  )
}

export default Footer

