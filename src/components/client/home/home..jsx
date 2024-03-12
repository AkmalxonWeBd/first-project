import React from 'react'
import BasketCheckout from '../basket/chekout'
import Product from '../Product'
import DiscountTable from '../discount/discount'


const Home = () => {
  return (
    <div>
      <DiscountTable />
      <Product />
      <BasketCheckout />
    </div>
  )
}

export default Home
