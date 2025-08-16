import { useState } from "react";
import { useShoppingCart } from "../hook/useShoppingCart";
import { useProducts } from "../hook/useProducts";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../atoms/authAtom";
import StoreHeader from "../components/store/StoreHeader";
import ShoppingCart from "../components/store/ShoppingCart";
import ProductList from "../components/store/ProductList";
import FormToPay from "../components/store/FormToPay";

function StorePage() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [isFormToPay, setIsFormToPay] = useState(false);
  const [showUserInformation, setShowUserInformation] = useState(false);

  const { data: products = [] } = useProducts();
  const { shoppingCartList, toPay, addProduct, clearCart, editAmount, removeProduct } = useShoppingCart();

  return (
    <div className="grid grid-cols-9 grid-rows-12">
      
      <StoreHeader
        auth={auth}
        setAuth={setAuth}
        navigate={navigate}
        showUserInformation={showUserInformation}
        setShowUserInformation={setShowUserInformation}
      />

      <ShoppingCart
        shoppingCartList={shoppingCartList}
        toPay={toPay}
        clearCart={clearCart}
        editAmount={editAmount}
        removeProduct={removeProduct}
        onPayClick={() => setIsFormToPay(toPay > 0)}
      />

      <ProductList
        products={products}
        addProduct={addProduct}
      />

      {isFormToPay && (
        <FormToPay
          clearCart={clearCart}
          showFormToPay={isFormToPay}
          numPay={toPay.toFixed(2)}
          closeFormToPay={() => setIsFormToPay(false)}
        />
      )}
    </div>
  );
}

export default StorePage;
