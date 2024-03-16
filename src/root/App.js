import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/admin/Layout/index';
import Login from '../components/admin/auth/sigin';
import CategoriesCrud from '../components/admin/CategoriesCrud/table';
import ProductTable from '../components/admin/productCrud/product';
import TableCom from '../components/admin/subCategories/tableCom';
import ClientLayout from '../components/client/Layout';
import Home from '../components/client/home/home.';
import Dasjboard from '../components/admin/Dasjboard/Dashboard';
import { OrderCrud } from '../components/redux/slice/order/order';
import Banners from '../components/admin/banner/Banner';
import DiscountTbale from '../components/admin/discountCrud/Table';
import NoteTable from '../components/admin/node/node';


// import Home from "../components/client/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Client Side Routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<h1>Shop</h1>} />
          <Route path="contact" element={<h1>contact</h1>} />
          <Route path="signUp" element={<h1>Sign Up </h1>} />
 
        </Route>
        {/* Admin Panel Routes */}
        <Route index element={<h1>Home Page</h1>} />
        <Route path="/admin" element={<Login />} />
        <Route element={<Layout />}>
          
          <Route path="/admin/home" element={<Dasjboard />} />
          <Route path="/admin/order" element={<OrderCrud/>} />
          <Route path="/admin/subcategories" element={<TableCom />} />
          <Route path="/admin/banners" element={<Banners />} />
          <Route path="/admin/dashbord" element={<h1>dashbord</h1>} />
          <Route path="/admin/discount" element={<DiscountTbale/>} />
          <Route path="/admin/products" element={<ProductTable />} />
          <Route path="/admin/deliveries" element={<h1>deliveries</h1>} />
          <Route path="/admin/categories" element={<CategoriesCrud />} />
          <Route path="/admin/note" element={<NoteTable/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
