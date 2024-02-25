import React, { useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import { useGetBannersQuery, useUpdateBannersMutation } from '../../../redux/slice/client/banner';
import ImageUpload from '../../ImageUpload/ImageUpload';
import Modal from '../../generic/modal';

const UpdateProduct = ({ item }) => {
  // state
  const [skip, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(item.id);
  // redux
  const [updateProduct, { isLoading: isCreating }] = useUpdateBannersMutation();
  const { data, isLoading, refetch } = useGetBannersQuery({ skip });
  const onClose = () => {
    setOpen(false);
  };

  const addData = async () => {
    const formData = new FormData();
    formData.append('image', inputValue.img);
    formData.append('id', inputValue.id);
    try {
      await updateProduct(formData).unwrap();
      setInputValue({
        img: '',
      });
      setOpen(false);
    } catch (error) {

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
            <div className='flex flex-col '>
              <div className='flex flex-col'>
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

export default UpdateProduct;