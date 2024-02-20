import React from 'react';
import { useDeleteSubCatigoriesMutation } from '../../redux/slice/SubCategories/crud';

const DeleteCategoriesCom = ({ categoryId }) => {
  const [deleteCategory] = useDeleteSubCatigoriesMutation();

  const handleDelete = async () => {
    await deleteCategory(categoryId);
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteCategoriesCom;



  