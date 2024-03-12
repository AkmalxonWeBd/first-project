import React, { useState } from "react";
import { useGetProductQuery } from "../../redux/slice/product";
import { useCreateBasketMutation } from "../../redux/slice/client/basket";
import { toast } from "react-toastify";
import { FaRegHeart } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";
import RateStar from "../rate/rate";


const Skeleton = () => (
  <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-lg"></div>
);

const Product = () => {
  const { data, isLoading } = useGetProductQuery();
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredProductindex, setHoveredProductindex] = useState(null);
  const [createBasket] = useCreateBasketMutation();
  const productsToShow = 4;

  const showMore = () => {
    setStartIndex((prevIndex) => prevIndex + productsToShow);
  };

  const showLess = () => {
    setStartIndex(0);
  };

  const [productQuantities, setProductQuantities] = useState({});

  const incrementAmount = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const decrementAmount = (productId) => {
    if (productQuantities[productId] > 1) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
  };

  const productBy = async (id) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const addToBasket = async (id, amount) => {
    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("product", id);
    try {
      await createBasket(formData).unwrap();
      toast.success(`maxsulod  qushildi`);
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: 1,
      }));
    } catch (error) {
      toast.error(` Mahsulot Qushilmadi `);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-12 sm:grid-cols-2 md:grid-cols-4">
      {isLoading
        ? Array.from({ length: productsToShow * 2 }).map((__, index) => (
            <Skeleton key={index} />
          ))
        : data?.slice(0, startIndex + 8).map((product, index) => (
            <div
              key={index}
              className=""
              onMouseEnter={() => setHoveredProductindex(index)}
              onMouseLeave={() => setHoveredProductindex(null)}
            >
              <div className="w-[275px] h-[194px] shadow-lg overflow-hidden relative flex items-center justify-center rounded-b-lg">
                <img
                  className="w-[140px] h-[190px] object-cover"
                  src={product.image}
                  alt=""
                />
                <div className="flex flex-col items-start absolute right-10 top-2">
                  <FaRegHeart /> 
                  <LiaEyeSolid />
                </div>
               
                {(hoveredProductindex === index ||
                  productQuantities[product.id]) && (
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
                    {productQuantities[product.id] ? (
                      <>
                        <span
                          onClick={() => decrementAmount(product.id)}
                          className="cursor-pointer rounded-l bg-blue-500 py-1 px-3.5 text-white duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          -{" "}
                        </span>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="text"
                          value={productQuantities[product.id]}
                          min="1"
                        />
                        <span
                          onClick={() => incrementAmount(product.id)}
                          className="cursor-pointer rounded-r bg-blue-500 text-white py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          +{" "}
                        </span>
                      </>
                    ) : (
                      <button
                        onClick={() => productBy(product.id)}
                        className="bg-black text-white px-20 py-1 shadow-lg rounded-b-lg"
                      >
                        Add to Basket
                      </button>
                    )}
                  </div>
                )}
              </div>
              <div className="mt-2 text-center">
                <p className=" truncate text-lg text-left font-bold">{product.title}</p>
                <div className="flex gap-10" >
                <p className="text-red-600 text-left">{product.price}</p>
                <RateStar/>
                </div>
              </div>
            </div>
          ))}
      {startIndex + 8 >= data?.length && (
        <div className="col-span-4 flex justify-center">
          <button
            onClick={showLess}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            View Less
          </button>
        </div>
      )}
      {startIndex + 8 < data?.length && (
        <div
          className={`col-span-8 md:grid-cols-8 sm:col-span-2 flex ${
            startIndex === 0 ? " justify-end" : "justify-end" 
          } items-center`}
        >
          <button
            onClick={showMore}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
