import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { toast } from "react-toastify";
import Modal from "../../generic/modal";
import { useDeleteProductImgMutation } from "../../redux/slice/product";

export default function OrderWiew({ items }) {

    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(!isOpen);
    const [deleteProduct, { isLoading }] = useDeleteProductImgMutation();
    const [search, setSearch] = useState("");

    const handleDelete = async (items) => {
        try {
            await deleteProduct({ items });
            toast.success("Maxsulot o'chirildi!");
            setIsOpen(false);
        } catch (err) {
            toast.error("Maxsulot o'chirishda xatolik:", err);
        }
    };
    const [skip, setOpen] = useState(false);
    const onClose = () => setOpen(!skip);


    return (
        <div>
            <button
                onClick={() => setOpen(!skip)}
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
                <AiOutlineEye className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                Ko'rish
            </button>
            {skip && (
                <Modal closeModal={onClose} actionType="view">
                    <div className="w-fit h-[50vh] overflow-x-auto md:w-[80vw] p-4">
                        <div className="flex flex-wrap w-full h-full md:items-stretch md:flex-row sm:flex-col sm:items-center sx:flex-col">
                            <div className="md:w-[50%] sm:w-full sx:w-full p-2 h-full">
                                <div className="grid grid-cols-2 h-[41.3vh] overflow-y-auto bg-white rounded-lg gap-2 shadow-lg border p-4">
                                    {items?.each_products?.length > 0 ? (
                                        items.each_products.map((value) =>
                                            <img src={value?.product?.image} alt={value?.product?.image} />
                                        )
                                    ) : (
                                        <p className="text-gray-800">Maxsulot Rasmlari yuq</p>
                                    )}

                                </div>
                            </div>
                            <div className="w-fit md:w-[50%] sm:w-full sx:w-full p-2 h-full">
                                <div className="bg-white rounded-lg shadow-lg border p-4 text-gray-800">
                                    <h2 className="text-xl mb-2">Barcha malumotlar</h2>
                                    <p>
                                        <strong>XARIDORNING Ismi:</strong> {items?.user?.first_name}
                                    </p>
                                    <p>
                                        <strong>Haridornign Familyasi:</strong>{items?.user?.last_name}
                                    </p>
                                    <p>
                                        <strong>Umumiy Xaridlar Narxi:</strong> {items?.total_price} so'm
                                    </p>
                                    <p>
                                        <strong>XARIDORNING telfon raqami:</strong> {items?.user?.phone}
                                    </p>
                                    <p>
                                        <strong>Tolov turi:</strong> {items?.payment_method}
                                    </p>
                                    <p>
                                        <strong>Yekazilganligi haqida: {items?.delivery_status}</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}