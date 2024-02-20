import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdOutlineAddPhotoAlternate, MdOutlineDashboard, MdOutlineDiscount } from "react-icons/md";
import { PiTaxi, PiUsersFourLight } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";

const Sidebar = () => {
  const navigate = useNavigate();
  const pathName = useLocation();

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
    <section className="flex gap-6">
      <div
        className={`bg-white min-h-screen ${open ? "w-80" : "w-20"} duration-500 text-gray-100 px-4 h-96 overflow-x-auto`}
      >
        <div className="flex items-center justify-end gap-6 py-3 text-center">
          <Link to="/admin/home" className={`no-underline ${open ? "block" : "hidden"}`}>
          <h1 className="text-3xl font-bold text-black">Omo Food</h1>
          </Link>

          {open ? (
            <FiArrowRight
              className="text-1xl text-black cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <FiArrowLeft
              className="text-1xl text-black cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <div className="relative flex flex-col gap-4 mt-4">
          {menus?.map((menu, i) => (
            <div key={i} onClick={() => handleClick(menu?.link)}>
              <Link
                to={`/admin${menu.link}`}
                className={`${
                  menu?.margin && ""
                } group flex items-center text-1xl no-underline text-center gap-1 font-medium p-2 rounded-md ${
                  pathName.pathname === `/admin${menu.link}` ? "actives text-white bg-blue-500" : "text-black"
                }`}
              >
                <h1 className="text-xl ">{React.createElement(menu?.icon)}</h1>
                <h2 className={`text-xl  ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                  {menu?.name}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;