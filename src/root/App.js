import React from 'react';
import { BrowserRouter, Route, Routes,   } from 'react-router-dom';
import Layout from '../components/admin/Layout/index';
import Login from '../components/admin/auth/sigin';
import CategoriesCrud from '../components/admin/CategoriesCrud/table';
import ProductCom from '../components/admin/productTest';
import NodeCom from '../components/admin/node/node';


function App() {

  return (
    <>
<BrowserRouter>
      <Routes>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="/admin" element={<Login/>} />
            <Route element={<Layout />}>
              <Route path="/admin/home" element={<h1>Admin</h1>} />
              <Route path="/admin/order" element={<h1>order</h1>} />
              <Route path="/admin/subcategories" element={<h1>subcategories</h1>} />
              <Route path="/admin/banners" element={<h1>banners</h1>} />
              <Route path="/admin/dashbord" element={<h1>dashbord</h1>} />
              <Route path="/admin/discount" element={<h1>discount</h1>} />
              <Route path="/admin/products" element={<ProductCom/>} />
              <Route path="/admin/deliveries" element={<h1>deliveries</h1>} />
              <Route path="/admin/categories" element={<CategoriesCrud/>} />
              <Route path="/admin/note" element={<NodeCom/>} />
            </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;