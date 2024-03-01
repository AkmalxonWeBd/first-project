import React, { useState } from 'react';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import { toast } from 'react-toastify';
import Modal from '../../generic/modal';
import ImageUpload from '../../generic/imgUpload';
import { useGetSubCategoryQuery } from '../../redux/slice/client/subcategory';

import { useNavigate } from 'react-router-dom';
import { useCreateProductMutation, useGetProductQuery } from '../../redux/slice/product';
import { useGetCategoryQuery } from '../../redux/slice/CategoriesCrud/crud';

const AddProduct = ({object}) => {
  // state
  const [skip, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(object);
  const navigate =useNavigate()
  // redux
  const { data, isLoading, refetch } = useGetProductQuery();
  const [createProduct, { isLoading: isCreating }] = useCreateProductMutation();
  const { data:subData } = useGetSubCategoryQuery()
  const {data:catigories} =useGetCategoryQuery()
  // fuction
  const onClose = () => {
    setOpen(false);
  };


  // post data
  const addData = async () => {
    const formData = new FormData();
    formData.append('title', inputValue.title);
    formData.append('image', inputValue.img);
    formData.append('description', inputValue.description);
    formData.append('price', inputValue.price);
    formData.append('amount', inputValue.amount);
    formData.append('amount_measure', inputValue.amount_measure);
    formData.append('category', inputValue?.category);
    if (inputValue.subcategory){
      formData.append('subcategory', inputValue?.subcategory);
    }

    try {
      await createProduct(formData).unwrap();
      toast.success(`Category ${inputValue?.title} added successfully`);
      setInputValue({
        title: '',
        img: '',
      });
      setOpen(false);
    } catch (error) {
      if (error.status==400) {
        toast.error(`Malumot tugri kiritilmagan !!!`)
      }
      else if (error.status==401) {
        toast.error(`Siz foydalanish huquqiga ega emasiz !!!`)

        localStorage.clear()
        navigate('/admin')
      }
     else if (error.status >=500) {
        toast.error('Server tomondan xatolik yokida internet ulangan')
      }
  
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
                <label htmlFor="Maxsulot Nomi:" className='text-black'>Maxsulot Nomi:</label>
                <input
                  type="text"
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  onChange={(e) => setInputValue({ ...inputValue, title: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="Maxsulot Name:" className='text-black'>Maxsulot Narxi:</label>
                <input
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
                  type="number"
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  onChange={(e) => setInputValue({ ...inputValue, amount: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="Maxsulot Name:">Maxsulot o'lchov:</label>
                <select
                  onChange={(e) => setInputValue({ ...inputValue, amount_measure: e.target.value })}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Hech Biri">Hech Biri</option>
                   <option value="kg">kg</option>
                   <option value="dona">dona</option>
                   <option value="litr">litr</option>
                   <option value="metr">metr</option>


                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Mahsulox haqida....</label>
                <textarea
                  id="message"
                  rows="4"
                  onChange={(e) => setInputValue({ ...inputValue, description: e.target.value })}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                ></textarea>
              </div>

            </div>
            <div className='flex flex-col '>
              <div className='flex flex-col'>
                <label htmlFor="">Kategorie Tanlang</label>
                <select
                  onChange={(e) => setInputValue({ ...inputValue, category: e.target.value })}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Hech Biri">Hech Biri</option>
                  {catigories?.map((value) => {
                    return (
                      <option value={value?.id}>{value?.title}</option>
                    )
                  })}
                </select>

                <div className='flex flex-col '>
                  <label htmlFor=""> Ichki Kategoriyani Tanlash</label>
                  <select
                    onChange={(e) => setInputValue({ ...inputValue, subcategory: e.target.value })}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Hech Biri">Hech Biri</option>
                    {subData?.map((value) => {
                      return (
                        <option value={value.id}>{value.title}</option>
                      )
                    })}
                  </select>
                </div>
                <div>
                  <ImageUpload
                    title={'Image'}
                    iconName={<MdOutlineInsertPhoto className="text-5xl" />}
                    iconTitle={'Upload Image'}
                    fileType={'PNG, JPG, JPEG up to 5MB'}
                    LabelFor={'img'}
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                  />
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Modal>
      )}
    </div>
  );
};

export default AddProduct;