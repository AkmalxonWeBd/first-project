// components/client/Layout/index.js

import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";
import Navbar from "../navbar/navbar";



const ClientLayout = () => {
  return (
    <div>
      <Navbar />
     <Outlet/>
      <Footer />
    </div>
  );
};

export default ClientLayout;