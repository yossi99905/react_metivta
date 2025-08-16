import { useState } from "react";
import { useShoppingCart } from "../hook/useShoppingCart";
import { useProducts } from "../hook/useProducts";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../atoms/authAtom";
import StoreHeader from "../components/store/StoreHeader";
import ShoppingCart from "../components/store/ShoppingCart";
import ProductList from "../components/store/ProductList";
import FormToPay from "../components/store/FormToPay";
import FormCardPayment from "../components/store/FormCardPayment";
import PaymentMethodModal from "../components/store/PaymentMethodModal";

function StorePage() {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const [isFormToPay, setIsFormToPay] = useState(false);
    const [showUserInformation, setShowUserInformation] = useState(false);
    const [showEmailPay, setShowEmailPay] = useState(false);
    const [showCardPay, setShowCardPay] = useState(false);

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

            {/* מודל בחירת שיטת תשלום */}
            <PaymentMethodModal
                isOpen={isFormToPay}
                onClose={() => setIsFormToPay(false)}
                onSelect={(method) => {
                    setIsFormToPay(false);
                    if (method === "email") {
                        setShowEmailPay(true); // יפתח FormToPay
                    } else if (method === "card") {
                        setShowCardPay(true); // יפתח FormCardPayment
                    }
                }}
            />

            {/* תשלום באימייל */}
            <FormToPay
                showFormToPay={showEmailPay}
                numPay={toPay.toFixed(2)}
                closeFormToPay={() => setShowEmailPay(false)}
                clearCart={clearCart}
            />

            {/* תשלום בכרטיס */}
            <FormCardPayment
                isOpen={showCardPay}
                onClose={() => setShowCardPay(false)}
                amount={toPay.toFixed(2)}
                onSuccess={clearCart}
            />

        </div>
    );
}

export default StorePage;
