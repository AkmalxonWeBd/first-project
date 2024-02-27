// components/client/Layout/index.js

import { Outlet } from "react-router-dom";
import Footer from "../home/footer";
import Navbar from "../navbar";
import ProductShop from "../products/products";



const ClientLayout = () => {
  return (
    <div>
      <Navbar />
     <Outlet/>
      <Footer />
      <ProductShop/>
    </div>
  );
};

export default ClientLayout;
