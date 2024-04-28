import React, { useEffect, useState } from 'react'
import axios from '../../api/urls'
import NavStore from './NavStore';
import ItemInfo from './ItemInfo';
import EditItem from './EditItem';

function ListItemsPage() {

  const [itemsList, setItemsList] = useState([]);
  const [editItems, setEditItems] = useState();

  // get all categories
  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const getCategories = async () => {
      try {
        const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
        const resp = await axios.get('/products', {
          headers: {
            'x-api-key': token
          },
          signal: controller.signal
        });
        console.log(resp.data);
        if (isMounted) {
          setItemsList(resp.data);
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

  // click edit item
  const clickEdit = (item) => {
    setEditItems(item);

  }

  // edit item to state and server
  const editItemOnList = async (data) => {
    console.log(data)
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
      const resp = await axios.put(`/products/${editItems._id}`, data, {
        headers: {
          'x-api-key': token
        }
      });
      console.log(resp.data);

      // update the item in the list
      setItemsList(prevList => {
        const index = prevList.findIndex(element => element._id === editItems._id);
        const updatedList = [...prevList];
        updatedList[index] = { ...updatedList[index], ...data };
        return updatedList;
      });
      setEditItems(null);
    } catch (err) {
      console.log(err);
    }
  }

  // delete item
  const deleteCategory = async (id) => {
    const confirmed = window.confirm("האם אתה בטוח שברצונך למחוק מוצר  זה?");
    if (!confirmed) {
      return;
    }
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
      const resp = await axios.delete(`/products/${id}`, {
        headers: {
          'x-api-key': token
        }
      });
      console.log(resp.data)
      // update category in categories state
      setItemsList(itemsList.filter(item => item._id !== id));

    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <>

      <div className='flex h-lvh justify-end'>
        <div className="w-lvw mx-9 my-32 max-w-[700px]">
          <div className='space-y-2'>
            <div className="grid grid-cols-6 sm:grid-cols-10 text-center place-items-center font-bold  gap-4 h-8">
              <div className='col-span-2 ml-8 sm:ml-0 space-x-3 flex justify-between'></div>

              <p className="col-span-2 sm:col-span-1 hidden sm:block">ברקוד</p>
              <p className="col-span-1 sm:col-span-1 hidden sm:block">כמות </p>
              <p className="col-span-1 sm:col-span-1 hidden sm:block"> מוצמד</p>
              <p className="col-span-1 sm:col-span-1 hidden sm:block">במלאי</p>
              <p className="col-span-1 sm:col-span-1 hidden sm:block">קטגוריה</p>

              <p className="col-span-1 sm:col-span-1 hidden sm:block text-end">מחיר</p>
              <p className="col-span-4 sm:col-span-2">שם מוצר</p>

            </div>


            {
              itemsList.length > 0 ?
                itemsList.map((item, index) => (
                  <ItemInfo key={index} name={item.name} price={item.price} category={item.category} inStock={item.inStock ? "כן" : "לא"} isPinned={item.isPinned ? "כן" : "לא"} inventoryCount={item.inventoryCount ? item.inventoryCount : "-"} barcodeNum={item.barcodeNum}
                    onClickEditItem={() => clickEdit(item)}
                    onDeleteItem={() => deleteCategory(item._id)}
                  />
                ))

                :
                <div className='bg-tailwind-cream p-4 rounded-2xl flex justify-between items-center'>
                  <p>אין קטגוריות</p>
                </div>

            }
            {
                editItems &&
                <EditItem showEditForm={editItems} name={editItems.name} price={editItems.price} category={editItems.category} inStock={editItems.inStock} isPinned={editItems.isPinned} inventoryCount={editItems.inventoryCount} barcodeNum={editItems.barcodeNum} image={editItems.image}
                onClickCloseBtn={() => setEditItems(null)} onClickEditAction={editItemOnList}
                />
                
              }




          </div>


        </div>


        <NavStore />


      </div>
    </>

  )
}

export default ListItemsPage