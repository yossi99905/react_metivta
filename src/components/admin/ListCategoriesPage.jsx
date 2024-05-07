import React, { useEffect, useState } from 'react'
import NavAdmin from './NavAdmin'
import axios from '../../api/urls'
import CategoryInfo from './CategoryInfo';
import EditCategory from './EditCategory';

import HeaderAdmin from './HeaderAdmin';



function ListCategoriesPage() {

  const [categoriesList, setCategoriesList] = useState([]);
  const [editCategory, setEditCategory] = useState();

  // get all categories
  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const getCategories = async () => {
      try {
        const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
        const resp = await axios.get('/categories', {
          headers: {
            'x-api-key': token
          },
          signal: controller.signal
        });
        console.log(resp.data);
        if (isMounted) {
          setCategoriesList(resp.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getCategories();
    return () => {
      isMounted = false
      controller.abort()
    }

  }
    , [])

  // click edit category
  const clickEdit = (category) => {
    setEditCategory(category);

  }

  // edit category to state and server
  const editCategoryOnList = async (data) => {
    console.log(data)
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
      const resp = await axios.put(`/categories/${editCategory._id}`, data, {
        headers: {
          'x-api-key': token
        }
      });
      console.log(resp.data)
      // update category in categories state
      setCategoriesList(categoriesList.map(category => category._id === editCategory._id ? { ...data, _id: editCategory._id } : category));
      setEditCategory(null);


    }
    catch (err) {
      console.log(err);
    }
  }

  // delete category
  const deleteCategory = async (id) => {
    const confirmed = window.confirm("האם אתה בטוח שברצונך למחוק קטגוריה זאת?");
    if (!confirmed) return;
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
      const resp = await axios.delete(`/categories/${id}`, {
        headers: {
          'x-api-key': token
        }
      });
      console.log(resp.data)
      // update category in categories state
      setCategoriesList(categoriesList.filter(category => category._id !== id));
    }
    catch (err) {
      console.log(err);
    }
  }



  return (
<>

    <div className='flex  justify-end'>
      <div className="w-lvw mx-9 my-32 max-w-[700px]">
        <div className='space-y-2'>
          <div className="grid grid-cols-10 text-center  h-8 font-bold    px-10 *:self-center">

            <div className='col-span-2'></div>
            <p className="col-span-4 sm:col-span-4 ">נק׳</p>
            <p className="col-span-4 sm:col-span-4 text-end ">שם קטגוריה</p>

          </div>


          {
            categoriesList.length > 0 ?
            categoriesList.map((category, index) => (
              <CategoryInfo key={index} name={category.name} score={category.score}
              onClickEditCategory={() => clickEdit(category)}
              onDeleteCategory={() => deleteCategory(category._id)}
              />
              ))
              
              :
              <div className='bg-tailwind-cream p-4 rounded-2xl flex justify-between items-center'>
                <p>אין קטגוריות</p>
              </div>

}
          {
            editCategory &&
            <EditCategory showEditForm={editCategory} name={editCategory.name} score={editCategory.score}
            onClickCloseBtn={() => setEditCategory(null)} onClickEditAction={editCategoryOnList}
            />
            
          }




        </div>


      </div>


      <NavAdmin />


    </div>
          </>

  )
}

export default ListCategoriesPage