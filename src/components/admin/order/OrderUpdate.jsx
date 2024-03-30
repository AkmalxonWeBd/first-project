import React, { useState } from "react";
import ImageUpload from "../../ImageUpload/ImageUpload";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { toast } from "react-toastify";
import { BiEdit } from "react-icons/bi";
import axios from "axios";
import Modal from "../../generic/Modal";
import {useUpdateOrderMutation, useGetOrderQuery} from "../../redux/slice/order/order"

const OrderUpdate = ({ object }) => {
    // state
    const [payment, setPayment] = useState([
        {
            key: "to'lov tizimi",
            value: "TO'LOV TIZIMI",
        },
        {
            key: "naqd",
            value: "NAQD",
        },
    ]);
    const [status, setStatus] = useState([
        {
            key: "bekor qilindi",
            value: "BEKOR QILINDI",
        },
        {
            key: "qabul qilindi",
            value: "QABUL QILINDI",
        },
        {
            key: "yetkazilmoqda",
            value: "YETKAZILMOQDA",
        },
        {
            key: "yetkazildi",
            value: "YETKAZILDI",
        },
    ]);
    const [skip, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState(object);
    // redux
    const [updateProduct, { isLoading: isCreating }] = useUpdateOrderMutation();
    const { data, isLoading, refetch } = useGetOrderQuery({ skip });

    // fuction
    const onClose = () => {
        setOpen(false);
    };

    // post data
    const addData = async () => {
        const formData = new FormData();
        formData.append("delivery_status", inputValue.delivery_status);
        formData.append("id", object.location.id);
        try {
            await updateProduct(formData).unwrap();
            toast.success(`Maxsulot ${inputValue.user.first_name} o'zgartirildi `);
            setInputValue({
                user: "",
                total_price: "",
                delivery_status: "",
                location: "",
                user: "",
                delivery: "",
                each_products: "",
            });
            setOpen(false);
        } catch (error) {
            toast.error(`Failed to add maxsulot ${inputValue.user.first_name}`);
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
                    <div className="grid grid-cols-2 gap-3 ">
                        <div className="flex flex-col gap-2">
                            {/* <div>
                <label htmlFor="Maxsulot Nomi:" className="text-black">
                  Umumiy narx:
                </label>
                <input
                  type="number"
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  value={inputValue.total_price}
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      total_price: e.target.value,
                    })
                  }
                />
              </div> */}
                            <label htmlFor="" className="text-gray-900">
                                Statusni tanlang
                            </label>
                            <select
                                value={inputValue?.delivery_status?.choices}
                                onChange={(e) =>
                                    setInputValue({
                                        ...inputValue,
                                        delivery_status: e.target.value,
                                    })
                                }
                                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="Hech Biri">Hech Biri</option>
                                {status.map((item) => {
                                    return (
                                        <>
                                            <option value={item.value}>{item.key}</option>
                                        </>
                                    );
                                })}
                            </select>

                            {/* <label htmlFor="" className="text-gray-900">
                To'lov turini tanlang
              </label>
              <select
                value={inputValue?.payment_method?.choices}
                onChange={(e) =>
                  setInputValue({
                    ...inputValue,
                    payment_method: e.target.value,
                  })
                }
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Hech Biri">Hech Biri</option>
                {payment.map((item) => {
                  return (
                    <>
                      <option value={item.value}>{item.key}</option>
                    </>
                  );
                })}
              </select> */}

                            {/* <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Yaratilgan sana
                </label>
                <input
                  value={inputValue.created_date}
                  id="message"
                  rows="4"
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      created_date: e.target.value,
                    })
                  }
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  type="datetime-local"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Yangilangan sana
                </label>
                <input
                  value={inputValue.updated_date}
                  id="message"
                  rows="4"
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      updated_date: e.target.value,
                    })
                  }
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  type="datetime-local"
                />
              </div> */}
                        </div>
                        {/* <div className="flex flex-col ">
              <div className="flex flex-col">
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Yetkaziladigan manzili
                  </label>
                  <input
                    value={inputValue.delivery.name}
                    id="message"
                    rows="4"
                    onChange={(e) =>
                      setInputValue({ ...inputValue, delivery: e.target.value })
                    }
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    type="text"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Xaridorning joylashuvi
                  </label>
                  <input
                    value={inputValue.location.address}
                    id="message"
                    rows="4"
                    onChange={(e) =>
                      setInputValue({ ...inputValue, location: e.target.value })
                    }
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Xaridorning Ismi
                  </label>
                  <input
                    value={inputValue.user.first_name}
                    id="message"
                    rows="4"
                    onChange={(e) =>
                      setInputValue({ ...inputValue, user: e.target.value })
                    }
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Xaridorning Familiyasi
                  </label>
                  <input
                    value={inputValue.user.last_name}
                    id="message"
                    rows="4"
                    onChange={(e) =>
                      setInputValue({ ...inputValue, user: e.target.value })
                    }
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    type="text"
                  />
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div> */}
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default OrderUpdate;