import React from 'react'
import { useGetOrderQuery } from '../../redux/slice/order/order'

function Order() {
   const {data,isLoading} =  useGetOrderQuery()

   console.log(data,'data');
  return (
    <div>
      
    </div>
  )
}

export default Order
