import React, { useState } from "react";
import { PiTaxi, PiUsersFourLight } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { Link, useLocation, useNavigate, NavLink } from "react-router-dom";

import { BiCategoryAlt } from "react-icons/bi";
import "./sidabar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
      <aside>
        {/* <div className="llogo">
          <Link className="toggle">
            <div className="logo">
              <span><LocalGroceryStoreIcon /></span>
              <h2>omo-<span className="danger">food</span></h2>
            </div>
          </Link>
          
        </div> */}
        <div className="sidebar">
          <NavLink className={location.pathname === '/admin/home' && 'active'} to={'/admin/home'}><span className="material-icons-sharp"><DashboardIcon /></span><h3>Boshqaruv paneli</h3></NavLink >
          <NavLink className={location.pathname === '/admin/order' && 'active'} to={'/admin/order'}><span className="material-icons-sharp"><InventoryIcon /></span><h3>Buyurtmalar</h3></NavLink >
          <NavLink className={location.pathname === '/admin/banners' && 'active'} to={'/admin/banners'}><span className="material-icons-sharp"><InsertPhotoOutlinedIcon /></span><h3>Asosiy sahifa rasmi</h3></NavLink >
          <NavLink className={location.pathname === '/admin/products' && 'active'} to={'/admin/products'}><span className="material-icons-sharp"><CategoryOutlinedIcon /></span><h3>Mahsulotlat</h3></NavLink >
          <NavLink className={location.pathname === '/admin/discount' && 'active'} to={'/admin/discount'}><span className="material-icons-sharp"><LoyaltyOutlinedIcon /></span><h3>Chegirma</h3></NavLink >
          <NavLink className={location.pathname === '/admin/categories' && 'active'} to={'/admin/categories'}><span className="material-icons-sharp"><BiCategoryAlt /></span><h3>Katta Turkum</h3></NavLink >
          <NavLink className={location.pathname === '/admin/subcategories' && 'active'} to={'/admin/subcategories'}><span className="material-icons-sharp"><BiCategoryAlt /></span><h3>Kichik turkum</h3></NavLink >
          <NavLink className={location.pathname === '/admin/deliveries' && 'active'} to={'/admin/deliveries'}><span className="material-icons-sharp"><PiTaxi /></span><h3>Yetkazib berish</h3> </NavLink >
          <NavLink className={location.pathname === '/admin/note' && 'active'} to={'/admin/note'}><span className="material-icons-sharp"><TbReportAnalytics /></span> <h3>Yon daftarcha</h3> </NavLink >
          <Link to={'/admin'}> <span className="material-icons-sharp"><LogoutIcon /></span> <h3>Logout</h3></Link >
        </div>
      </aside>
      
  );
};
export default Sidebar;