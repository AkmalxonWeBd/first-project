import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdOutlineAddPhotoAlternate, MdOutlineDashboard, MdOutlineDiscount } from "react-icons/md";
import { PiTaxi, PiUsersFourLight } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { Link, useLocation, useNavigate, NavLink } from "react-router-dom";

import { BiCategoryAlt } from "react-icons/bi";
import "./sidabar.css"

// material-icons

// import IconButton from '@material-ui/core/IconButton';
// import Icon from '@material-ui/core/Icon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InsightsIcon from '@mui/icons-material/Insights';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = () => {
  const navigate = useNavigate();
  const pathName = useLocation();
  const location = useLocation();

  const menus = [
    { name: "Boshqaruv paneli", link: "/home", icon: GoHome },
    { name: "Buyurtmalar", link: "/order", icon: PiUsersFourLight },
    { name: "Asosiy sahifa rasmi", link: "/banners", icon: MdOutlineAddPhotoAlternate },
    { name: "Mahsulotlar", link: "/products", icon: MdOutlineDashboard },
    { name: "Chegirma", link: "/discount", icon: MdOutlineDiscount },
    { name: "Katta Turkum", link: "/categories", icon: BiCategoryAlt },
    { name: "Kichik Turkum", link: "/subcategories", icon: BiCategoryAlt, margin: true },
    { name: "Yetkazib berish", link: "/deliveries", icon: PiTaxi },
    { name: "Yon daftarcha", link: "/note", icon: TbReportAnalytics },
  ];

  const [open, setOpen] = useState(true);

  const handleClick = (link) => {
    navigate(`/admin${link}`);
  };

  return (
    <div className='container'>
      <aside>
        <div className="toggle">
          <div className="logo">
            <span><LocalGroceryStoreIcon /></span>
            <h2>
              omo-<span className="danger">food</span>
            </h2>
          </div>
          <div className="close" id="close-btn">
            <span className="material-icons-sharp"><CloseIcon /></span>
          </div>
        </div>

        <div className="sidebar">
          <NavLink className={`span , span1 ${location.pathname === '/admin/home' && 'active'}`}>
            <span className="material-icons-sharp"><DashboardIcon /></span>
            <h3>Dashboard</h3>
          </NavLink >
          <NavLink className={`span , span1 ${location.pathname === '/admin' && 'active'}`}>
            <span className="material-icons-sharp"><PersonOutlineIcon /></span>
            <h3>Users</h3>
          </NavLink >
          <NavLink className={`span , span1 ${location.pathname === '/' && 'active'}`}>
            <span className="material-icons-sharp"><ReceiptLongIcon /></span>
            <h3>History</h3>
          </NavLink >
          <NavLink className={`span , span1 ${location.pathname === '/' && 'active'}`}>
            <span className="material-icons-sharp"><InsightsIcon /></span>
            <h3>Analytics</h3>
          </NavLink >
          <NavLink className={`span , span1 ${location.pathname === '/' && 'active'}`}>
            <span className="material-icons-sharp"><MailOutlineIcon /></span>
            <h3>Tickets</h3>
            <span className="message-count">12</span>
          </NavLink >
          <NavLink className={`span , span1 ${location.pathname === '/' && 'active'}`}>
            <span className="material-icons-sharp"><InventoryIcon /></span>
            <h3>Sale List</h3>
          </NavLink >
          <NavLink className={`span , span1 ${location.pathname === '/' && 'active'}`}>
            <span className="material-icons-sharp"><ReportGmailerrorredIcon /></span>
            <h3>Reports</h3>
          </NavLink >
          <Link to={'/admin'}>
            <span className="material-icons-sharp"><LogoutIcon /></span>
            <h3>Logout</h3>
          </Link >
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;