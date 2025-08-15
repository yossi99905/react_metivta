import { useState } from 'react'
import NavAdmin from './NavAdmin'
import CategoryInfo from './CategoryInfo';
import EditCategory from './EditCategory';
import { useCategories, useDeleteCategory, useUpdateCategory } from '../../hook/useCategory';
import Modal from '../Modal';



function ListCategoriesPage() {

  const { data: categories = [] } = useCategories();
  const deleteCategory = useDeleteCategory();
  const updateCategory = useUpdateCategory();
  const [editCategory, setEditCategory] = useState(null);

  const onCloseModal = () => setEditCategory(null);

  const onDeleteCategory = (id) => {
    if (window.confirm("האם אתה בטוח שברצונך למחוק את הקטגוריה?")) {
      deleteCategory.mutateAsync(id.toString());
    }
  };

  const onSubmitEdit = async (data) => {
    if (!editCategory) return;
    await updateCategory.mutateAsync({ id: editCategory._id.toString(), category: data });
    onCloseModal();
  };

  const renderCategories = () => {
    if (categories.length === 0) {
      return (
        <div className="bg-tailwind-cream p-4 rounded-2xl flex justify-between items-center">
          <p>אין קטגוריות</p>
        </div>
      );
    }
    return categories.map((category, index) => (
      <CategoryInfo
        key={index}
        name={category.name}
        score={category.score}
        onClickEditCategory={() => setEditCategory(category)}
        onDeleteCategory={() => onDeleteCategory(category._id)}
      />
    ));
  };

  return (
    <>

      <div className='flex justify-end'>
        <div className="w-lvw mx-9 my-32 max-w-[700px]">
          <div className='space-y-2'>
            <div className="grid grid-cols-10 text-center  h-8 font-bold    px-10 *:self-center">

              <div className='col-span-2'></div>
              <p className="col-span-4 sm:col-span-4 ">נק׳</p>
              <p className="col-span-4 sm:col-span-4 text-end ">שם קטגוריה</p>

            </div>
            {renderCategories()}
          </div>
        </div>
        <NavAdmin />
      </div>
      <Modal isOpen={!!editCategory} onClose={onCloseModal}>
        {editCategory && (
          <EditCategory
            name={editCategory.name || ''}
            score={editCategory.score || 0}
            _id={editCategory._id || ''}
            onSubmit={onSubmitEdit}
            key={editCategory._id || ''}
          />
        )}
      </Modal>
    </>
  )
}

export default ListCategoriesPage