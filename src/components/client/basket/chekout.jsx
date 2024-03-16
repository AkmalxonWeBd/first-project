import React, { useState } from "react";
import { toast } from "react-toastify";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import Modal from "../../generic/Modal.jsx";
import { useOrderCreateMutation } from "../../redux/slice/order/order";
import { useGetDeliveriesQuery } from "../../redux/slice/client/deliveries";

const BasketCheckout = ({ selectProduct }) => {
  const [open, setOpen] = useState(false);
  const [orderCreate, { isLoading: isCreating }] = useOrderCreateMutation();
  const { data: deliveries, isLoading, refetch } = useGetDeliveriesQuery();

  const onClose = () => {
    setOpen(false);
  };
  const [inputValue, setInputValue] = useState({
    location: [40.9994774, 71.6635379], // Default location
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    longitude: "",
    latitude: "",
    address_status: "",
  });

  const addData = async () => {
    const formData = new FormData();
    selectProduct?.forEach((file, index) => {
      formData.append(`basket_products`, file);
    });
    formData.append("user.first_name", inputValue.first_name);
    if (inputValue?.last_name?.length) {
      formData.append("user.last_name", inputValue.last_name);
    }
    formData.append("user.phone", inputValue.phone);
    formData.append("location.address", inputValue.address);
    formData.append("location.longitude", inputValue.location[1]);
    formData.append("location.latitude", inputValue.location[0]);
    formData.append("delivery", inputValue.address_status);
    formData.append("payment_method", "NAQD");

    try {
      await orderCreate(formData).unwrap();
      toast.success(`Maxsulod haridi amalga oshirildi tez orada siz bilan bog'lanamiz`);
      setInputValue({
        location: "", 
        first_name: "",
        last_name: "",
        phone: "",
        address: "",
        address_status: "",
      });
      setOpen(false);
    } catch (error) {
      toast.error(`Ma'lumot to'ldiring tuliq`);
    }
  };

  const defaultState = {
    center: inputValue.location,
    zoom: 15,
  };
  const [markerGeometry, setMarkerGeometry] = useState(defaultState.center);

  const handleMapClick = (e) => {
    const coordinates = e.get("coords");
    setMarkerGeometry(coordinates);
    setInputValue({
      ...inputValue,
      location: coordinates,
    });
  };

  return (
    <div>
      {/* <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
      >
        Tasdiqlash
      </button> */}
      {open && (
        <Modal
          loader={isCreating}
          isDisabled={inputValue?.phone.length <= 10}
          closeModal={onClose}
          addFunc={addData}
        >
          <div className="check">
            <div className="w-full md:w-[400px] flex flex-col gap-3 p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label>Ism *</label>
                  <input
                    type="text"
                    value={inputValue.first_name}
                    onChange={(e) =>
                      setInputValue({
                        ...inputValue,
                        first_name: e.target.value,
                      })
                    }
                    className="block w-full px-2 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label>Familiya *</label>
                  <input
                    type="text"
                    value={inputValue.last_name}
                    onChange={(e) =>
                      setInputValue({
                        ...inputValue,
                        last_name: e.target.value,
                      })
                    }
                    className="block w-full px-2 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label>Telfon Raqam *</label>
                  <input
                    placeholder="+998"
                    type="tel"
                    value={inputValue.phone}
                    onChange={(e) => setInputValue({ ...inputValue, phone: e.target.value })}
                    maxLength={13}
                    className="block w-full px-2 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label>Manzil tetx</label>
                  <textarea
                    onChange={(e) =>
                      setInputValue({ ...inputValue, address: e.target.value })
                    }
                    placeholder="Namagan shahar uychi atrofi"
                    type="text"
                    className="block w-full px-2 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label>Manzil Turi *</label>
                  <select
                    onChange={(e) =>
                      setInputValue({
                        ...inputValue,
                        address_status: e.target.value,
                      })
                    }
                    className="block w-full px-2 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                  >
                    <option>Hech biri</option>
                    {deliveries?.map((value) => {
                      return <option value={value.id}>{value.name}</option>;
                    })}
                  </select>
                </div>
              </div>
              <YMaps className=' cadr' children query={{ lang: "en_RU" }}>
                <Map
                  width={"0%"}
                  height={"0px"}
                  defaultState={defaultState}
                  onClick={handleMapClick}
                >
                  <Placemark
                    geometry={markerGeometry}
                    options={{ draggable: true }}
                  />
                </Map>
              </YMaps>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BasketCheckout;


