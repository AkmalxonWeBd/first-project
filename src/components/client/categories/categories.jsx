import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";



const  CategoriesHome = () => {
    const navigate = useNavigate();
  const location = useLocation();
  return (
    
    <div className='categoryhome'> 
                <NavLink className={location.pathname === '/client/' && 'active'} to={'/admin/src/components/admin/CategoriesCrud'}><span className="material-icons-sharp"><HiOutlineDevicePhoneMobile />
 </span><h3>Boshqaruv paneli</h3></NavLink >

    </div>
  )

}

export default  CategoriesHome