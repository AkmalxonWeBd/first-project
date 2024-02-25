import React from 'react';






import { useGetBannersQuery } from '../../redux/slice/banner/index.js';
import DeleteBanners from './Deletebanner.jsx';
import AddBanners from './Addbanner.jsx';
import { BsTypeH1 } from 'react-icons/bs';

const Banners = () => {
    const { data, error, isLoading } = useGetBannersQuery();


    return (
        <div className=" "> {/* Set the height to 100vh */}
            <section className="bg-gray-50  dark:bg-white-900 p-3 sm:p-5 antialiased">
                <div className="mx-auto max-w-screen-3xl  px-1 lg:px-12">
                    <div className="bg-white  dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <br />
                        <div className='flex justify-between px-3'>

                            <AddBanners />
                        </div>
                        <br />
                        <div className="overflow-x-auto  h-[80vh] ">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="p-4">Banner rasm</th>
                                        <th scope="col" className="p-4"></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map((item,index) => {
                                            return (
                                                <tr key={index+1} className="border-b dark:border-gray-600 hover:bg-gray-100  dark:hover:bg-white-700" key={item.id}>
                                                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <div className="flex items-center mr-3 ">
                                                            {item?.image && item?.image !== "" ? (
                                                                <div className='flex  gap-2 items-center'>
                                                                    <img
                                                                        src={item?.image}
                                                                        alt={item.title}
                                                                        className="h-12 w-12 flex-none  rounded-full border object-cover"
                                                                    />
                                                                    <span className="text-gray-800  text-base font-medium px-2 py-0.5 rounded ">
                                                                        {item?.title}
                                                                    </span>
                                                                </div>

                                                            ) : (
                                                                <div className="w-12 h-12 rounded-full border bg-gray-200 flex justify-center items-center">
                                                                    <img
                                                                        className="h-12 w-12 flex-none rounded-full border object-cover"
                                                                        src='noproduct'
                                                                        alt={item.title}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </th>
                                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <div className="flex items-center space-x-4">
                                                            {/* <UpdateBanners item={item.id} /> */}
                                                            <DeleteBanners ID={item.id} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banners;