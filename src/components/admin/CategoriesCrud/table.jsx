import React, { useState } from "react";
import AddCategories from "./AddCategories";
import { useGetCategoryQuery } from "../../redux/slice/CategoriesCrud/crud";
import UpdateCategories from "./UpdateCategories";
import DeleteCategorie from "./DeleteCategories";

const Table = () => {
  const { data, error, isLoading } = useGetCategoryQuery();
  const [search, setSearch] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.error}</div>;

  const categories = data || [];

  const filteredData = categories.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white-800 dark:bg-white-900 p-3 sm:p-4 antialiased">
      <div className="flex justify-between">
        <div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            id="Oziq Ovqadlar"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search....."
            required
          />
        </div>
        <div>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            {" "}
            <AddCategories />{" "}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto h-[80vh]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full">
            <tr>
              <th scope="col" className="p-4">
                Maxsulot rasmi
              </th>
              <th scope="col" className="p-4">
                Maxsulot Narxi
              </th>
             <th></th>
              <th scope="col" className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <h1>Loading...</h1>
              </div>
            ) : filteredData?.length > 0 ? (
              filteredData.reverse()?.map((item) => {
                const dateObject = new Date(item.created_date);
                const options = { hour12: false };
                // const formattedDate = dateObject.toLocaleString(
                //   "en-US",

                //   options
                // );

                return (
                  <tr
                    className="dark:border-gray-600 hover:bg-gray-500 hover:text-gray-800  dark:hover:bg-white-700"
                    key={item.id}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex items-center mr-3 ">
                        {item?.image && item?.image !== "" ? (
                          <div className="flex  gap-2 items-center">
                            <img
                              src={item?.thumbnail_image}
                              alt="item"
                              className="h-12 w-12 flex-none  rounded-full border object-cover"
                            />
                            <span className="text-gray-200 hover:text-gray-800 text-base font-medium px-2 py-0.5 rounded ">
                              {item?.title}
                            </span>
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-full border bg-gray-200 flex justify-center items-center">
                            <img
                              className="h-12 w-12 flex-none rounded-full border object-cover"
                              src={data.name1}
                              alt="product"
                            />
                          </div>
                        )}
                      </div>
                    </th>
                    <td className="px-4 py-3">
                      <span
                        className={`text-gray-200 dark:hover:text-gray-800 text-base font-medium px-2 py-0.5 rounded`}
                      >
                        {item.price} So'm
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-gray-200 hover:text-gray-800 text-base font-medium px-2 py-0.5 rounded`}
                      >
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center space-x-4">
                        <UpdateCategories object={item} />
                        <DeleteCategorie ID={item.id} />
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1>malumot yo'q</h1>
            )}
            {/* {filteredData.reverse().map((value) => (
              <tr key={value.id}>
                <td className="p-4">
                  <img
                    className="rounded-2xl w-[70px] h-[60px]"
                    src={value.image}
                    alt={value.title}
                  />
                </td>
                <td className="p-4">{value.title}</td>
                <td className="p-4 flex gap-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-4">
                      <UpdateCategories item={item} />
                    </div>
                    <DeleteCategorie id={item.id} />
                  </div>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
