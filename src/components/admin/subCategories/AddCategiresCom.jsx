import React, { useState } from "react";
import { toast } from "react-toastify";
import { useCreateSubCatigoriesMutation } from "../../redux/slice/SubCategories/crud";

import ImageUpload from "../../generic/imgUpload";
import Modal from "../../generic/modal";


const AddCategoriesCom = () => {
  const [open, setOpen] = useState(false);

  const [createCategoria, { isLoading: isCreating }] =
    useCreateSubCatigoriesMutation();

  const [inputValue, setInputValue] = useState({
    name: "",
    img: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputValue?.name);
    if (inputValue.img) {
      formData.append("image", inputValue.img);
    }

    try {
      await createCategoria(formData).unwrap();
      toast.success(`Category ${inputValue.name} added successfully`);
      setInputValue({
        name: "",
        img: "",
      });
      setOpen(false);
    } catch (error) {
      toast.error(`Failed to add category ${inputValue.name}`);
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="bg-blue-600 inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm "
      >
        Mahsulot qo'shish
      </button>
      {open && (
        <Modal
          loader={isCreating}
          closeModal={() => setOpen(false)}
          addFunc={handleSubmit}
        >
          <div className="flex flex-col gap-3">
            <div>
              <div>
                <label htmlFor="Maxsulot Name:">Maxsulot o'lchov:</label>
                <select
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      amount_measure: e.target.value,
                    })
                  }
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="Hech Biri">Hech Biri</option>
                  <option value="kg">Sabzavotlar</option>
                  <option value="dona">Sut maxsulotlari</option>
                  <option value="litr">Mevalar</option>
                  <option value="metr">asas3234</option>
                </select>
              </div>
              <label>Mahsuldo turi nomi:</label>
              <input
                type="text"
                onChange={(e) =>
                  setInputValue({ ...inputValue, name: e.target.value })
                }
                className="block w-full px-2 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
              />
            </div>
            <div>
              <ImageUpload
                title={"Image"}
                // iconName={<MdOutlineInsertPhoto className="text-5xl" />}
                iconTitle={"Upload Image"}
                fileType={"PNG, JPG, JPEG up to 5MB"}
                LabelFor={"img"}
                setInputValue={setInputValue}
                inputValue={inputValue}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AddCategoriesCom;
