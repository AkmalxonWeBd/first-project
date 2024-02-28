import React, { useState } from "react";
import { useGetCategoriesQuery } from "../../redux/slice/CategoriesCrud/crud";
import AddSubCategories from "./AddCategiresCom";
import SubUpdateCategories from "./UpdateCategoriesCom";
import DeleteCategories from "./DeleteCategoriesCom";

const TableCom = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search....."
            required
          />
        </div>
        <div>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            <AddSubCategories/>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto h-[80vh]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full">
            <tr>
              <th scope="col" className="p-4">
              SUBKATEGORIYA RASMI
              </th>
              <th scope="col" className="p-4">
              SUBKATEGORIYA NOMI
              </th>
              <th scope="col" className="p-4">
              KATTA KATEGORY NOMI
              </th>
              <th scope="col" className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.reverse().map((value) => (
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
                  <SubUpdateCategories/>
                  <DeleteCategories/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCom;