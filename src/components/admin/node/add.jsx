import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Modal from '../../generic/Modal.jsx';
import { useCreateNoteMutation } from '../../redux/slice/node/node';
import { useGetProductQuery } from '../../redux/slice/product';

const AddNote = ({ object }) => {
    // state
    const [skip, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState(object);
    console.log(inputValue);
    // redux
    const [createProduct, { isLoading: isCreating }] = useCreateNoteMutation();
    const { data: pronote, isLoading, refetch } = useGetProductQuery({ skip });



    // fuction
    const onClose = () => {
        setOpen(false);
    };


    // post data
    const addData = async () => {
        const formData = new FormData();

        formData.append('comment', inputValue.description);
        // formData.append('update-date', inputValue.update_data);
        // formData.append('created_date', inputValue.created_date);
        formData.append('price', inputValue.price);
        formData.append('amount', inputValue.amount);
        formData.append('product', inputValue.product);
        // formData.append('', inputValue.product);



        try {
            await createProduct(formData).unwrap();
            toast.success(`Yon Daftarcha ${inputValue.title} added successfully`);
            setInputValue({
                title: '',
                img: '',
            });
            setOpen(false);
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                type="button"
                className="bg-blue-500 inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                +
                Maxsulot
            </button>
            {skip && (
                <Modal loader={isCreating} closeModal={onClose} addFunc={addData}>
                    <div className='grid grid-cols-2 gap-3 '>

                        <div className='flex flex-col gap-2'>

                            <div>
                                <label htmlFor="Maxsulot Name:" className='text-black'>Maxsulot Narxi:</label>
                                <input
                                    autoComplete='off'
                                    type="number"
                                    id="table-search-users"
                                    className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    onChange={(e) => setInputValue({ ...inputValue, price: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="Maxsulot Name:">Maxsulot Miqdori:</label>
                                <input
                                    autoComplete='off'
                                    type="number"
                                    id="table-search-users"
                                    className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    onChange={(e) => setInputValue({ ...inputValue, amount: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Comment....</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    autoComplete='off'
                                    onChange={(e) => setInputValue({ ...inputValue, description: e.target.value })}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required
                                ></textarea>
                            </div>

                        </div>
                        <div className='flex flex-col '>
                            <div className='flex flex-col'>
                                <label htmlFor="">Bor maxsulot Tanlang</label>
                                <select
                                    onChange={(e) => setInputValue({ ...inputValue, product: e.target.value })}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="Hech Biri">Hech Biri</option>
                                    {pronote?.map((vlue) => {
                                        return (
                                            <option key={vlue?.id} value={vlue?.id}>{vlue?.title}</option>
                                        )
                                    })}
                                </select>

                                <div>
                                    <label htmlFor="Maxsulot Name:">Yangi Maxsulot:</label>
                                    <input
                                        disabled={inputValue?.product !== "Hech Biri" && inputValue?.product !== undefined && inputValue?.product > 0}
                                        autoComplete='off'
                                        type="text"
                                        id="table-search-users"
                                        className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=""
                                        onChange={(e) => setInputValue({ ...inputValue, product: e.target.value })}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                </Modal>
            )}
        </div>
    );
};

export default AddNote;