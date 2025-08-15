import { useState } from 'react'
import NavStore from './NavStore';
import ItemInfo from './ItemInfo';
import EditItem from './EditItem';
import Modal from '../Modal';
import { useDeleteProduct, useProducts, useUpdateProduct } from '../../hook/useProducts';

function ListItemsPage() {

  const { data: products = [] } = useProducts();
  const deleteProduct = useDeleteProduct();
  const updateProduct = useUpdateProduct();
  const [editProduct, setEditProduct] = useState(null);

  const onCloseModal = () => setEditProduct(null);

  const onDeleteProduct = (id) => {
    if (window.confirm("האם אתה בטוח שברצונך למחוק מוצר זה?")) {
      deleteProduct.mutateAsync(id.toString());
    }
  };

  const onSubmitEdit = async (data) => {
    if (!editProduct) return;
    await updateProduct.mutateAsync({ id: editProduct._id.toString(), product: data });
    onCloseModal();
  };

  const renderCategories = () => {
    if (products.length === 0) {
      return (
        <div className="bg-tailwind-cream p-4 rounded-2xl flex justify-between items-center">
          <p>אין קטגוריות</p>
        </div>
      );
    }
    return products.map((item, index) => (
      <ItemInfo key={index} name={item.name} price={item.price} category={item.category} inStock={item.inStock ? "כן" : "לא"} isPinned={item.isPinned ? "כן" : "לא"} inventoryCount={item.inventoryCount ? item.inventoryCount : "-"} barcodeNum={item.barcodeNum}
        onClickEditItem={() => setEditProduct(item)}
        onDeleteItem={() => onDeleteProduct(item._id)}
      />
    ));
  };

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
            {renderCategories()}
          </div>
        </div>
        <NavStore />
      </div>
      <Modal isOpen={!!editProduct} onClose={onCloseModal}>
        {editProduct && (
          <EditItem
            showEditForm={editProduct}
            name={editProduct.name}
            price={editProduct.price}
            category={editProduct.category}
            inStock={editProduct.inStock}
            isPinned={editProduct.isPinned}
            inventoryCount={editProduct.inventoryCount}
            barcodeNum={editProduct.barcodeNum}
            image={editProduct.image}
            onSubmit={onSubmitEdit}
            key={editProduct._id}
          />
        )}
      </Modal>
    </>

  )
}

export default ListItemsPage