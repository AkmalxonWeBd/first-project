import React, { useState } from "react";
import data from "./data";

const ProductShop = () => {
  const [noOfElement, setnoOfElement] = useState(4);
  const slice = data.productData.slice(0, noOfElement);

  const viewMore = () => {
    if (noOfElement === data.productData.length) {
      setnoOfElement(4);
    } else {
      setnoOfElement(noOfElement + 4);
    }
  };

  return (
    <section className="py-4 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {slice.map((item) => (
          <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={item.id}>
            <div className="card p-0 overflow-hidden h-100 shadow">
              <img
                src={item.img}
                className="card-img-top"
                alt={item.title}
                style={{ width: "270px", height: "322px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-black text-white font-bold py-2 px-4 rounded-full mr-4"
          onClick={() => viewMore()}
        >
          {noOfElement === data.productData.length ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
};

export default ProductShop;
