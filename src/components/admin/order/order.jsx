import React, { useState } from "react";
import { useGetOrderQuery } from "../../redux/slice/order/order";

const OrderCrud = () => {
  const { data, error, isLoading } = useGetOrderQuery();

  const [search, setSearch] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const filteredData = data
  ? data?.filter((item) =>
      item?.user?.first_name && item?.user.first_name?.toLowerCase().includes(search.toLowerCase())
    )
  : [];

  return (
    <div className=" ">
      {/* Set the height to 100vh */}
      <section className="bg-gray-50 dark:bg-white-900 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-3xl  px-1 lg:px-12">
          <div className="bg-white  dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <br />
            <div className="flex justify-between px-3">
              <input
                type="text"
                id="table-search-users"
                className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Izlash..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <br />
            <div className="overflow-x-auto h-[80vh] w-[100%] ">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      XARIDORNING Ismi
                    </th>
                    <th scope="col" className="p-4">
                      XARIDORNING Familyasi
                    </th>
                    <th scope="col" className="p-4">
                      XARIDORNING Telfon raqami
                    </th>
                    <th scope="col" className="p-4">
                      Xarid narxi
                    </th>
                    <th scope="col" className="p-4">
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h1>Loader</h1>
                    </div>
                  ) : filteredData?.length > 0 ? (
                    filteredData?.map((item) => {
                      const dateObject = new Date(item?.created_date);
                      const options = { hour12: false };
                      const formattedDate = dateObject.toLocaleString(
                        "en-US",
                        options
                      );
                      return (
                        <tr
                          className="border-b dark:border-gray-600 hover:bg-gray-100  dark:hover:bg-white-700"
                          key={item.id}
                        >
                          <td className="px-4 py-3">
                            <span
                              className={`text-gray-800  text-base font-medium px-2 py-0.5 rounded`}
                            >
                              {item?.user?.first_name}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`text-gray-800  text-base font-medium px-2 py-0.5 rounded`}
                            >
                              {item?.user?.last_name}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`text-gray-800  text-base font-medium px-2 py-0.5 rounded`}
                            >
                              {item?.user?.phone} 
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`text-gray-800  text-base font-medium px-2 py-0.5 rounded`}
                            >
                              {item?.total_price} So'm
                            </span>
                          </td>

                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className="flex items-center space-x-4">
                            <div>
                                <h1>wiev</h1>
                              </div>
                              <div>
                                <h1>Location</h1>
                              </div>
                              <div>
                                <h1>Update</h1>
                              </div>

                              <div>
                                <h1>Delete</h1>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <h1>EmptyBox</h1>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderCrud
