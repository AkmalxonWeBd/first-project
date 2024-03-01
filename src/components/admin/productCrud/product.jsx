import React, { useState } from 'react'
import { useGetProductQuery, useGetProductsQuery } from '../../redux/slice/product'
import AddCategories from './Addproduct.jsx';
import DeleteCategorie from './delete.jsx';
import UpdateProduct from './Update.jsx';

const ProductTable = () => {
    const { data, error, isLoading } = useGetProductQuery();
    const [search, setSearch] = useState("");
    const filteredData = data
        ? data?.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        )
        : [];
    const [isHovered, setIsHovered] = useState(false);
    const datas = [
        {
            name1: "Bunday product yo'q"
        }
    ]
    return (
        <div className=" ">
            <section className="bg-gray-50  dark:bg-white-900 p-3 sm:p-4 antialiased">
                <div className="">
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
                            <AddCategories />
                        </div>
                        <br />
                        <div className="overflow-x-auto  h-[80vh] ">
                            <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="  text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            Maxsulot rasmi
                                        </th>

                                        <th scope="col" className="p-4">
                                            Maxsulot Narxi
                                        </th>
                                        <th scope="col" className="p-4">
                                            Maxsulot Yaratilgan Vaqti
                                        </th>
                                        <th scope="col" className="p-4">
                                            Action
                                        </th>
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
                                            const formattedDate = dateObject.toLocaleString(
                                                "en-US",

                                                options
                                            );

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
                                                                        src={datas.name1}
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
                                                            {formattedDate}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <div className="flex items-center space-x-4">
                                                        <UpdateProduct object={item} />
                                                        <DeleteCategorie ID={item.id} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <h1>malumot yo'q</h1>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductTable;
