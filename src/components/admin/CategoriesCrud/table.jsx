// import React from 'react';
// import { FiEdit2, FiTrash2 } from 'react-icons/fi'; // For edit and delete icons

// const Table = ({ categories, onDelete, onEdit }) => {
//   return (
//     <div className="min-w-full">
//       <table className="w-full text-left">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Mahsulot turi rasmi</th>
//             <th className="px-4 py-2">Mahsulot turi nomi</th>
//             <th className="px-4 py-2">Harakatlar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((category) => (
//             <tr key={category.id} className="border-b">
//               <td className="px-4 py-2">
//                 <img src={category.image} alt={category.name} className="w-16 h-16" />
//               </td>
//               <td className="px-4 py-2">{category.name}</td>
//               <td className="px-4 py-2">
//                 <button onClick={() => onEdit(category.id)} className="mr-2">
//                   <FiEdit2 className="text-blue-500" />
//                 </button>
//                 <button onClick={() => onDelete(category.id)}>
//                   <FiTrash2 className="text-red-500" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

import React, { useState } from 'react';
import AddCategories from './AddCategories';
import UpdateCategories from './UpdateCategories';
import DeleteCategories from './DeleteCategories';
import { useGetCategoriesQuery } from '../../redux/slice/CategoriesCrud/crud';

const Table = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();
  const [editingCategory, setEditingCategory] = useState(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.error}</div>;

  return (
    <div>
      <AddCategories />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category) => (
            <tr key={category.id}>
              <td><img src={category.image} alt={category.name} style={{ width: '100px', height: '100px' }} /></td>
              <td>{category.name}</td>
              <td>
                {editingCategory === category.id ? (
                  <UpdateCategories category={category} stopEditing={() => setEditingCategory(null)} />
                ) : (
                  <>
                    <button onClick={() => setEditingCategory(category.id)}>Edit</button>
                    <DeleteCategories categoryId={category.id} />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;




