import React, { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { toast } from 'react-toastify';
import Modal from '../../generic/Modal';
import { useGetSubCategoryQuery } from '../../redux/slice/client/subcategory';
import { useGetNoteQuery, useUpdateNoteMutation } from '../../redux/slice/node/node';

const EditNote = ({ object }) => {
  // state
  const [skip, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(object);

  // redux
  const [updateProduct, { isLoading: isCreating }] = useUpdateNoteMutation();
  const { data, isLoading, refetch } = useGetNoteQuery({ skip });
  const { data: subData } = useGetSubCategoryQuery({ skip })



  // fuction
  const onClose = () => {
    setOpen(false);
  };


  // post data
  const addData = async () => {
    const formData = new FormData();
    formData.append('comment', inputValue.description);
    formData.append('price', inputValue.price);
    formData.append('amount', inputValue.amount);
    formData.append('product', inputValue.product);
    formData.append('title', inputValue.product_title);

    try {
      await updateProduct(formData).unwrap();
      toast.success(`Maxsulot ${inputValue.title} o'zgartirildi `);
      setInputValue({
        title: '',
        img: '',
      });
      setOpen(false);
    } catch (error) {
      toast.error(`Failed to add maxsulot ${inputValue.title}`);

    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="inline-flex w-[70px] h-[35px] justify-center items-center rounded-full bg-blue-500 p-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-400"
      >
        <BiEdit size={20} className="text-md" aria-hidden="true" />
      </button>
      {skip && (
        <Modal loader={isCreating} closeModal={onClose} addFunc={addData}>
          <div className='grid grid-cols-2 gap-3 '>

            <div className='flex flex-col gap-2'>
     
              <div>
                <label htmlFor="Maxsulot Name:" className='text-black'>Maxsulot Narxi:</label>
                <input
                  type="number"
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  value={inputValue.price}
                  onChange={(e) => setInputValue({ ...inputValue, price: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="Maxsulot Name:">Maxsulot Miqdori:</label>
                <input
                  type="number"
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  value={inputValue.amount}
                  onChange={(e) => setInputValue({ ...inputValue, amount: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Mahsulox haqida....</label>
                <textarea
                  id="message"
                  rows="4"
                  onChange={(e) => setInputValue({ ...inputValue, description: e.target.value })}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >{inputValue.comment}</textarea>
              </div>

            </div>
            <div className='flex flex-col '>
              <div className='flex flex-col'>
                <label className='text-gray-900'>Maxsulotni Tanlang</label>
                <select
                  value={inputValue?.product?.title}
                  onChange={(e) => setInputValue({ ...inputValue, product: e.target.value })}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Hech Biri">Hech Biri</option>
                  {data?.map((value) => {
                    return (
                      <option value={value?.product?.id}>{value?.product?.title}</option>
                    )
                  })}
                </select>



              </div>
            </div>
          </div>

        </Modal>
      )}
    </div>
  );
};

export default EditNote;