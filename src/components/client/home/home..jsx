import React from 'react'
import BasketCheckout from '../basket/chekout'

import Product from '../Product'
import CategoriesHome from '../categories/categories.jsx'


const Home = () => {
  return (
    <div>
   <CategoriesHome/>
    <Product/>
    <BasketCheckout/>
    </div>
  )
}

export default Home
