import React from "react";
import BasketCheckout from "../basket/chekout";
import Product from "../Product";
import Mainn from "../main page img/main_img";

const Home = () => {
  return (
    <div>
      <Mainn />
      <Product />
      <BasketCheckout />
    </div>
  );
};

export default Home;
