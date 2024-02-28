import React, { useState } from "react";
import { toast } from "react-toastify";
import Modal from "../../generic/modal";
import ImageUpload from "../../generic/imgUpload";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { useUpdateSubcatigoriesMutation } from "../../redux/slice/SubCategories/crud";


const SubUpdateCategories = ({ object }) => {
  const [skip, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(object);
  const [updateCategory, { isLoading: isUpdating }] =    useUpdateSubcatigoriesMutation();

  const onClose = () => {
    setOpen(false);
  };

  const updateData = async () => {
    const formData = new FormData();
    formData.append("id", inputValue.id);
    formData.append("name", inputValue.title);
    formData.append("img", inputValue.img);

    try {
      await updateCategory(formData).unwrap();
      toast.success(`Category ${inputValue.name} updated successfully`);
      setOpen(false);
    } catch (error) {
      console.error("Failed to update category:", error);
      toast.error("Failed to update category");
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="bg-blue-500 inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Edit
      </button>
      {skip && (
        <Modal loader={isUpdating} closeModal={onClose} addFunc={updateData}>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
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
              <div>
                <label htmlFor="Category Name:" className="text-black">
                  Category Name:
                </label>
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
                  iconName={<MdOutlineInsertPhoto className="text-5xl" />}
                  iconTitle={"Upload Image"}
                  fileType={"PNG, JPG, JPEG up to 5MB"}
                  LabelFor={"img"}
                  setInputValue={setInputValue}
                  inputValue={inputValue}
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};


export default SubUpdateCategories;