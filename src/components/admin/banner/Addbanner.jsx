import React, { useState } from 'react';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import { toast } from 'react-toastify';



import ImageUpload from '../../ImageUpload/ImageUpload';

import { useCreateBannersMutation } from '../../redux/slice/banner';
import { useGetSubCategoryQuery } from '../../redux/slice/client/subcategory';
import Modal from '../../generic/modal';


const AddBanners = ({ object }) => {
    // state
    const [skip, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState(object);

    // redux
    const [createProduct, { isLoading: isCreating }] = useCreateBannersMutation();
    const { data, isLoading, refetch } = useGetSubCategoryQuery({ skip });
    const { data: subData } = useGetSubCategoryQuery({ skip })



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
        if (inputValue.subcategory) {
            formData.append('subcategory', inputValue?.subcategory);
        }

        try {
            await createProduct(formData).unwrap();
            setInputValue({
                title: '',
                img: '',
            });
            setOpen(false);
        } catch (error) {
            toast.error(`Mahsulotlar turlari qushilmadi${inputValue.title}`);
        }
    };

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-gray shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                +
                Banner
            </button>
            {skip && (
                <Modal loader={isCreating} closeModal={onClose} addFunc={addData}>
                    <div className='grid grid-cols-2 gap-3'>

                        <div className='flex flex-col '>
                            <div className='flex flex-col text-center'>

                                <div className=''>
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

export default AddBanners;