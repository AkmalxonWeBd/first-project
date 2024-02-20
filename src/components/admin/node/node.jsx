import React, { useEffect, useState } from 'react'
import { apiUrl } from '../../../Api/api'
import { useGetNodeQuery } from '../../redux/slice/node/node';

const NodeCom = () => {
  const { data: categories, error, isLoading } = useGetNodeQuery();

    



    const [modal, setModal] = useState(false)

    return (
        <div class="relative p-3 overflow-x-auto shadow-md sm:rounded-lg">
            <div className='flex justify-between'>
                <div>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="izlash" required />
                </div>
                <div>
                    <button onClick={() => setModal(true)}
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">mahsulot+</button>
                    {modal &&
                        
                            <div class=" absolute top-0 left-[400px]  right-0 bottom-0 p-4 w-full max-w-md max-h-full">

                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            Create New Product
                                        </h3>
                                        <button onClick={()=> setModal(false)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span  class="sr-only">Close modal</span>
                                        </button>
                                    </div>

                                    <form class="p-4 md:p-5">
                                        <div class="grid gap-4 mb-4 grid-cols-2">
                                            <div class="col-span-2">
                                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mahsulot nomi</label>
                                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nomi.." required="" />
                                            </div>
                                            <div class="col-span-2 sm:col-span-1">
                                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mahsulot narhi</label>
                                                <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="0 sum" required="" />
                                            </div>
                                            <div class="col-span-2 sm:col-span-1">
                                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">bor mahsulotni tanlang</label>
                                                <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                    <option selected="">Olma</option>
                                                    <option value="TV">Behi</option>
                                                    <option value="PC">Anor</option>
                                                    <option value="GA">Nok</option>
                                                    <option value="PH">Tarvuz</option>
                                                </select>
                                            </div>
                                            <div class="col-span-2">
                                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Coment...</label>
                                                <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mahsulot haqida ...."></textarea>
                                            </div>
                                        </div>
                                        <button  type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                            Add new product
                                        </button>
                                    </form>
                                </div>
                            </div>
                        
                    }
                </div>
            </div>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            MAXSULOT NARXI
                        </th>
                        <th scope="col" class="px-6 py-3">
                            MAXSULOT HAQIDA KOMMENT
                        </th>
                        <th scope="col" class="px-6 py-3">
                            MAXSULOT NOMI
                        </th>
                        <th scope="col" class="px-6 py-3">
                            MAXSULOT QO'SHILGAN NARXI
                        </th>
                        <th scope="col" class="px-6 py-3">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {categories?.map((value) => {
                        return (
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {value?.price}
                                </th>
                                <td class="px-6 py-4">
                                    {value?.amount}
                                </td>
                                <td class="px-6 py-4">
                                    {value?.comment}
                                </td>
                                <td class="px-6 py-4">
                                    {value?.product}
                                </td>
                                <td class="px-6 py-4">
                                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">qushish</button>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default NodeCom