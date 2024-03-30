import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import "./navbar.css"
import { useGetBannersQuery } from "../../redux/slice/banner";
const Navbar = () => {
  const { data } = useGetBannersQuery()
  const location = useLocation()
  return (
    <div>
      <div className="  flex h-[70px] items-center  justify-around px-3 w-full pt-[30px]">
        <h1 className="font-bold text-2xl">Exclusive</h1>
        <ul className="flex justify-around gap-12  ">
          <NavLink className={`span , span1 ${location.pathname === '/' && 'activeClient'}`} to="/"><li>Home</li></NavLink>
          <NavLink className={`span , span2 ${location.pathname === '/contact' && 'activeClient'}`} to="/contact"><li>Contact</li></NavLink>
          <NavLink className={`span , span3 ${location.pathname === '/shop' && 'activeClient'}`} to="/shop"><li>Shop</li></NavLink>
          <NavLink className={`span , span4 ${location.pathname === '/signUp' && 'activeClient'}`} to="/signUp"><li>Sign Up</li></NavLink>
        </ul>
        <div className=" flex justify-between w-[350px] items-center">
          <div className=" flex  items-center">
            <input type="search" placeholder="What are you looking for?" className="w-[240px] h-[40px] pl-2  bg-[rgb(245,245,245)]	" />
            <IoSearch className="font-bold text-2xl " />
          </div>
          <FaRegHeart className="font-bold text-2xl " />
          <HiOutlineShoppingCart className="font-bold text-2xl rou" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
