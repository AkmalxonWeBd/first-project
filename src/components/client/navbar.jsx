import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
const Navbar = () => {
  return (
    <div className="  flex h-[70px] items-center  justify-around px-3 w-full pt-[30px]">
      <h1 className="font-bold text-2xl">Exclusive</h1>
      <ul className="flex justify-around gap-12  ">
        <Link to={"/"}><li>Home</li>{" "}</Link>
        <Link to={"/contact"}><li>Contact</li></Link>
        <Link to={"/shop"}><li>Shop</li></Link>
        <Link to={"/signUp"}><li>Sign Up</li></Link>
        <Link to={"/ProductShop"}><li>products</li></Link>
      </ul>
      <div className=" flex justify-between w-[350px] items-center">
        <div className=" flex  items-center">
          <input type="search" placeholder="What are you looking for?" className="w-[240px] h-[40px] pl-2  bg-yellow-100	" />
          <IoSearch className="font-bold text-2xl " />
        </div>
        <FaRegHeart className="font-bold text-2xl "/>
        <HiOutlineShoppingCart className="font-bold text-2xl "/>
      </div>
    </div>
  );
};

export default Navbar;
