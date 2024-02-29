import React, { useEffect, useState } from "react";
import { RiUserLocationLine } from "react-icons/ri";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { VscLiveShare } from "react-icons/vsc";
import Modal from "../../generic/modal";
const OrderLocation = ({ location }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const defaultState = {
    center: [+location?.longitude, +location.latitude],
    zoom: 15,
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <button
        onClick={() => setIsModalOpen(true)}
        type="button"
        className="inline-flex w-[70px] h-[35px] justify-center items-center rounded-full bg-gray-500 p-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-400"
        aria-label="Open Location Map"
      >
        <RiUserLocationLine size={20} className="text-md" aria-hidden="true" />
      </button>
      {isModalOpen && (
        <Modal className="" closeModal={onClose}>
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.67 7.5l-7.18-3.29c-.49-.22-1.09-.22-1.58 0l-7.18 3.29C1.18 7.78 1 8.38 1 9v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-.62-.18-1.22-.5-1.5zM12 3.58l5.95 2.73L12 9.04 6.05 6.31 12 3.58zm-7 8.04l5 2.29V21H4V11.62zM14 13v6.29l5-2.29V13h-5z" />
            </svg>

            <a
              href={`https://www.google.com/maps/search/${location.longitude},${location.latitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Share on Google Maps
            </a>
          </div>

          <p className=" text-gray-800 whitespace-pre-wrap break-words"> Foydalanuvchini adresi:  {location?.address}</p>

          <YMaps>
            <Map defaultState={defaultState}>
              <Placemark geometry={[+location?.longitude, +location.latitude]} />
            </Map>
          </YMaps>
        </Modal>
      )}
    </div>
  );
};

export default OrderLocation;