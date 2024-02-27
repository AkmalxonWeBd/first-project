import React, { useState } from "react";
import { useGetSubcatigoriesQuery } from "../../redux/slice/SubCategories/crud";
import AddCategoriesCom from "./AddCategiresCom";

const TableCom = () => {
  const { data: categories, error, isLoading } = useGetSubcatigoriesQuery();

  console.log(categories, 'categories');
  const [, setSearch] = useState("");
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.error}</div>;

  return (
    <div class=" pt-10px relative overflow-x-auto bg-red-500 h-[99vh] shadow-md sm:rounded-lg">
      <div className="flex  justify-between">
        <div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            id="Oziq Ovqadlar"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search....."
            required
          />
        </div>
        <div>
          <button
            type="button"
            class="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {" "}
            <AddCategoriesCom/>{" "}
          </button>
        </div>
      </div>
      <table class="w-full  overflow-y-scroll  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              Mahsulod turi rasmi
            </th>
            <th scope="col" class="p-4">
              Mahsulod turi nomi
            </th>
            <th scope="col" class="p-4">action</th>
          </tr>

          {[...categories].reverse()?.map((value) => {
            return (
              <tr>
                <th scope="col" class="p-4">
                  <img className="rounded-2xl  w-[70px] h-[60px]" src={value?.image} alt={value?.title} />
                </th>
                <th scope="col" class="p-4">
                  {value?.title}
                </th>
                <th scope="col" class="p-4 flex gap-2">
                  <button>edit</button>
                  <button>delte</button>
                </th>

              </tr>
            )
          })}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default TableCom;
