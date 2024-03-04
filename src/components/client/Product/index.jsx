import React, { useState } from "react";
import { useGetProductQuery } from "../../redux/slice/product";

const Product = () => {
  const { data, isLoading } = useGetProductQuery();
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredProductindex, setHoveredProductindex] = useState(null);
  const productsToShow = 4;

  const showMore = () => {
    setStartIndex((prevIndex) => prevIndex + productsToShow);
  };
<h1></h1>
  const showLess = () => {
    setStartIndex(0);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.slice(0, startIndex + productsToShow).map((product, index) => (
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
                onClick={() =>
                  console.log("Add to Basket clicked for", product.name)
                }
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
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
      ))}
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
        <div className="col-span-4 flex justify-center">
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