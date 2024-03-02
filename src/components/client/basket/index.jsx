import React from "react";
import { useGetBasketQuery, useIncrementMutation, useDeleteBasketMutation } from "../../redux/slice/client/basket";

const Basket = () => {
  const { data: dataBasket, isSuccess, refetch: refetchData } = useGetBasketQuery();
  const [deleteBasket] = useDeleteBasketMutation();
  const [Increment] = useIncrementMutation();

  const deleteFunc = async (id) => {
    try {
      await deleteBasket({ id });
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  const increment = async (value) => {
    const formData = new FormData();
    formData.append("amount", value?.amount + 1);
    formData.append("id", value.id);

    try {
      await Increment(formData).unwrap();
    } catch (error) {
      console.error("Error incrementing item:", error);
    }
  };

  const decrement = async (value) => {
    const formData = new FormData();
    formData.append("amount", value.amount - 1);
    formData.append("id", value.id);
    try {
      await Increment(formData).unwrap();
    } catch (error) {
      console.error("Error decrementing item:", error);
    }
  };

  return (
    <div className="pt-12">
      <div className="container mx-auto">
        <section className="items-center py-24 bg-gray-50 font-poppins">
          <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 lg:px-6">
            <h2 className="mb-10 text-4xl font-bold text-center text-gray-800">Shopping Cart</h2>
            {dataBasket?.items?.map((value) => (
              <div className="mb-10 lg:px-0" key={value?.id}>
                <div className="relative flex flex-wrap items-center -mx-1 border-b border-gray-200 dark:border-gray-500 xl:justify-between border-opacity-40">
                  <div className="flex items-center">
                    <button onClick={() => deleteFunc(value?.id)}>Delete</button>
                  </div>
                  <div className="w-full px-4 mb-6 md:w-96 xl:mb-0">
                    <h1 className="block text-xl font-medium  text-gray-800" >
                      {value?.product?.title}
                    </h1>
                    <p className="mt-1 text-base text-gray-700">
                      {value.product?.description?.length > 100
                        ? `${value?.product?.description.substring(0, 70)}...`
                        : value?.product?.description}
                    </p>
                    <p>Price: {value?.product?.price}</p>
                    <div>
                      <button onClick={() => increment(value)}>+</button>
                      <span>{value?.amount}</span>
                      <button onClick={() => decrement(value)}>-</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <h2>Total Price: {dataBasket?.total_price?.price}</h2>
              <button>Checkout</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Basket;
