import React from 'react'
import BasketCheckout from '../basket/chekout'
import Product from '../Product'
import DiscountTable from '../discount/discount'
import Mainn from "../main page img/main_img";

const Home = () => {
  return (
    <div>
      <Mainn />
      <DiscountTable />
      <Product />
      <BasketCheckout />
      <Product />
      <BasketCheckout />
    </div>
  );
};

export default Home;
