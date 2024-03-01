import React, { useState } from "react";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { toast } from "react-toastify";
import {
  useUpdateCategorieMutation,
  useGetCategoryQuery,
} from "../../redux/slice/CategoriesCrud/crud";
import Modal from "../../generic/modal";
import ImageUpload from "../../generic/imgUpload";

const UpdateCategories = ({ object }) => {
  const [skip, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(object);
  const [updateCategory, { isLoading: isUpdating }] =
    useUpdateCategorieMutation();
  const { data: categories } = useGetCategoryQuery();
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
          <div className="grid grid-cols-2 gap-3 ">
            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="Category Name:" className="text-black">
                  Category Name:
                </label>
                <input
                  value={inputValue?.title}
                  type="text"
                  className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  onChange={(e) =>
                    setInputValue({ ...inputValue, title: e.target.value })
                  }
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

export default UpdateCategories;
