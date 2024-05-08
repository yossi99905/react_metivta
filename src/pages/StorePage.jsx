import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser, faCartShopping, faTrashCan, faHome } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../components/store/ProductCard'
import CartProduct from '../components/store/CartProduct'
import { useCallback, useEffect, useMemo, useState } from 'react'
import axios from '../api/urls'
import { NavLink } from 'react-router-dom'
import useAuth from '../hook/useAuth'
import FormToPay from '../components/store/FormToPay'
import { useNavigate } from 'react-router-dom'
import signOut from '../auth/signOut'
import UserInformation from '../components/UserInformation'







function StorePage() {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const [productsList, setproductsList] = useState([])
    const [shoppingCartList, setShoppingCartList] = useState([])
    const [toPay, setToPay] = useState(0)
    const [isFormToPay, setIsFormToPay] = useState(false)
    const [showUserInformtion, setShowUserInformtion] = useState(false)

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getUsers = async () => {
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
                    setproductsList(resp.data);
                }
            } catch (err) {
                console.log(err);
            }
        };

        getUsers();
        return () => {
            isMounted = false
            controller.abort()
        }
    }
        , [])

    const addProductToShoppingCart = useCallback((productDetails) => {
        // add product to shopping cart
        setShoppingCartList(prevList => {
            const index = prevList.findIndex(element => element.name === productDetails.name);
            if (index !== -1) {
                const updatedList = [...prevList];
                updatedList[index] = { ...updatedList[index], amount: updatedList[index].amount + 1 };
                return updatedList;
            } else {
                return [...prevList, { ...productDetails, amount: 1 }];
            }
        });

        setToPay(prevToPay => prevToPay + productDetails.price);
    }, [setShoppingCartList]);


    const clearShopingCart = useCallback(() => {
        setShoppingCartList([]);
        setToPay(0);
    }, [setShoppingCartList]);


    const editAmount = useCallback((operation, productName) => {
        setShoppingCartList(prevList => {
            const index = prevList.findIndex(element => element.name === productName);
            if (index !== -1) {
                const updatedList = [...prevList];
                if (operation === "+") {
                    updatedList[index] = { ...updatedList[index], amount: updatedList[index].amount + 1 };
                } else {
                    if (updatedList[index].amount > 1) {
                        updatedList[index] = { ...updatedList[index], amount: updatedList[index].amount - 1 };
                    } else {
                        // if amount is 1, remove the product from the list
                        updatedList.splice(index, 1);
                    }
                }

                // calculate the new toPay
                const newToPay = updatedList.reduce((total, product) => total + product.price * product.amount, 0);
                setToPay(newToPay);

                return updatedList;
            }
        });
    }, [setShoppingCartList, setToPay]);

    const onClearOneProduct = useCallback((productName) => {
        setShoppingCartList(prevList => {
            const index = prevList.findIndex(element => element.name === productName);
            if (index !== -1) {
                const updatedList = [...prevList];
                updatedList.splice(index, 1);

                // calculate the new toPay
                const newToPay = updatedList.reduce((total, product) => total + product.price * product.amount, 0);
                setToPay(newToPay);

                return updatedList;
            }
        });
    }, [setShoppingCartList, setToPay]);



    return (
        <div className='grid grid-cols-9 grid-rows-12  '>
            <div className='bg-tailwind-green col-span-9  grid grid-cols-9 row-span-1 h-[7lvh]'>
                <div className='col-span-2 flex justify-end items-center'>
                    <div className=" text-white flex items-center justify-end  text-3xl font-bold mr-2">סל קניות </div>
                    <FontAwesomeIcon className='text-white mr-6 text-3xl' icon={faCartShopping} />
                </div>
                <div className='col-span-7 flex justify-end items-center space-x-2 mr-5 '>
                    <p className='text-white text-3xl'>{auth.firstName + " " + auth.lastName}</p>

                    <div className='bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center flex justify-center items-center hover:shadow-lg transition duration-300 ' onClick={() => setShowUserInformtion(perv => !perv)}>
                        <FontAwesomeIcon icon={faUser} className='text-tailwind-green text-xl' />
                        <UserInformation name={auth.firstName + " " + auth.lastName} purchaseCode={auth.purchaseCode} active={showUserInformtion} right={20} />
                    </div>
                    <div className='bg-tailwind-cream rounded-full h-10 w-10 flex justify-center items-center hover:shadow-lg transition duration-300'>
                        <FontAwesomeIcon icon={faHome} className='text-tailwind-green text-xl' onClick={() => navigate('/')} />
                    </div>
                    <div className='bg-tailwind-cream rounded-full h-10 w-10  text-sm text-center flex justify-center items-center hover:shadow-lg transition duration-300' onClick={() => { signOut(navigate); setAuth({}) }}>
                        <FontAwesomeIcon icon={faRightFromBracket} className='text-tailwind-green text-xl' />
                    </div>
                    <div className='bg-tailwind-cream rounded-lg h-10 w-10  text-sm text-center'>
                        <NavLink to={'/store/storeanagement'}>ניהול חנות</NavLink>
                    </div>
                </div>
            </div>

            {/* cart */}
            <div className='row-span-11 col-span-2 h-[90lvh] overflow-scroll'>
                <div className='flex h-20'>
                    <div className='size-4 bg-tailwind-cream rounded-full '></div>
                    <div onClick={clearShopingCart} className='size-10 bg-tailwind-cream rounded-full flex justify-center items-center'><FontAwesomeIcon className='text-xl' icon={faTrashCan} /></div>
                </div>
                <div className='flex flex-col space-y-1'>
                    {
                        shoppingCartList.length ?
                            shoppingCartList.map((product, index) => {
                                return <CartProduct key={index} name={product.name} price={product.price} amount={product.amount} editAmount={editAmount} onClearOneProduct={onClearOneProduct} />
                            })
                            :
                            <>

                            </>

                    }
                </div>
                <div className=''>
                    <button onClick={() => setIsFormToPay(toPay > 0 && toPay)} className='bg-tailwind-green rounded-full m-auto w-[60%] h-10 flex items-center justify-center text-white font-bold' >{parseFloat(toPay).toFixed(2)} לתשלום</button>

                </div>
                {
                    isFormToPay &&
                    <FormToPay showFormToPay={isFormToPay} numPay={toPay.toFixed(2)} closeFormToPay={() => setIsFormToPay(false)} />
                }

            </div>

            {/* products list */}
            <div className='border-l-8 border-tailwind-green col-span-7 row-span-11 pt-16 h-[90lvh] '>
                <div className='flex flex-wrap justify-start flex-row-reverse *:mx-2 *:my-2' >
                    {
                        productsList.length ?
                            productsList.map((product, index) => {
                                return <ProductCard key={index} name={product.name} price={product.price} onClickProductCard={addProductToShoppingCart} />
                            })
                            :
                            <div>
                                לא נמצאו מוצרים
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default StorePage