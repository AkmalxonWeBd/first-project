import React, { useState } from "react";
import { useGetProductQuery } from "../../redux/slice/product";
import { useCreateBasketMutation } from "../../redux/slice/client/basket";
import { toast } from "react-toastify";

const Skeleton = () => (
  <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-lg"></div>
);

const Product = () => {
  const { data, isLoading } = useGetProductQuery();
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredProductindex, setHoveredProductindex] = useState(null);
 const [createBasket ] =   useCreateBasketMutation()
  const productsToShow = 4;

  const showMore = () => {
    setStartIndex((prevIndex) => prevIndex + productsToShow);
  };

  const showLess = () => {
    setStartIndex(0);
  };
 const productBy  =async  (id) => {

  console.log(id,'id');
  const formData = new FormData();
  formData.append("amount", 1);
  formData.append("product", id);
  try {
    await createBasket(formData).unwrap();
    toast.success(`maxsulod  qushildi`);
  } catch (error) {
    toast.error(` Mahsulot Qushilmadi `);
  }
  // refetch();
}
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
      {isLoading ? (
        Array.from({ length: productsToShow }).map((_, index) => (
          <Skeleton key={index} />
        ))
      ) : (
        data?.slice(0, startIndex + productsToShow).map((product, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredProductindex(index)}
            onMouseLeave={() => setHoveredProductindex(null)}
          >
            <div className="w-48 h-full rounded-lg shadow-lg overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt=""
              />
              {hoveredProductindex === index && (
                <button
                  onClick={() => productBy(product.id)}
                  className="absolute bottom-4 left-11 bg-blue-500 text-white px-2 py-1 rounded-lg shadow-lg"

                >
                  Add to Basket
                </button>
              )}
            </div>
            <div className="mt-2 text-center">
              <p className="text-lg font-bold">{product.name}</p>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))
      )}
      {startIndex + productsToShow >= data?.length && (
        <div className="col-span-4 flex justify-center">
          <button
            onClick={showLess}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            View Less
          </button>
        </div>
      )}
      {startIndex + productsToShow < data?.length && (
       <div className={`col-span-4 md:grid-cols-4 sm:col-span-2 flex ${startIndex === 0 ? 'justify-center' : 'justify-end'} items-center`}>
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




// import React, { useState } from "react";
// import { useGetProductQuery } from "../../redux/slice/product";

// const Product = () => {
//   const { data, isLoading } = useGetProductQuery();
//   const [startIndex, setStartIndex] = useState(0);
//   const [hoveredProductindex, setHoveredProductindex] = useState(null);
//   const productsToShow = 4;

//   const showMore = () => {
//     setStartIndex((prevIndex) => prevIndex + productsToShow);
//   };

//   const showLess = () => {
//     setStartIndex(0);
//   };

//   return (
//     <div className="grid grid-cols-4 gap-4">
//       {data?.slice(0, startIndex + productsToShow).map((product, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center"
//           onMouseEnter={() => setHoveredProductindex(index)}
//           onMouseLeave={() => setHoveredProductindex(null)}
//         >
//           <div className="w-48 h-full rounded-lg shadow-lg overflow-hidden">
//             <img
//               className="w-full h-full object-cover"
//               src={product.image}
//               alt=""
//             />
//             {hoveredProductindex === index && (
//               <button
//                 onClick={() =>
//                   console.log("Add to Basket clicked for", product.name)
//                 }
//                 className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
//               >
//                 Add to Basket
//               </button>
//             )}
//           </div>
//           <div className="mt-2 text-center">
//             <p className="text-lg font-bold">{product.name}</p>
//             <p className="text-gray-600">{product.price}</p>
//           </div>
//         </div>
//       ))}
//       {startIndex + productsToShow >= data?.length && (
//         <div className="col-span-4 flex justify-center">
//           <button
//             onClick={showLess}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
//           >
//             View Less
//           </button>
//         </div>
//       )}
//       {startIndex + productsToShow < data?.length && (
//         <div className="col-span-4 flex justify-center">
//           <button
//             onClick={showMore}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
//           >
//             View More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;