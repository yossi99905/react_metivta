import { useState, useCallback } from "react";

export function useShoppingCart() {
  const [shoppingCartList, setShoppingCartList] = useState([]);
  const [toPay, setToPay] = useState(0);

  const recallTotal = (list) => 
    list.reduce((total, product) => total + product.price * product.amount, 0);

  const addProduct = useCallback((productDetails) => {
    setShoppingCartList(prevList => {
      const index = prevList.findIndex(p => p.name === productDetails.name);
      let updatedList;
      if (index !== -1) {
        updatedList = [...prevList];
        updatedList[index] = { ...updatedList[index], amount: updatedList[index].amount + 1 };
      } else {
        updatedList = [...prevList, { ...productDetails, amount: 1 }];
      }
      setToPay(recallTotal(updatedList));
      return updatedList;
    });
  }, []);

  const clearCart = useCallback(() => {
    setShoppingCartList([]);
    setToPay(0);
  }, []);

  const editAmount = useCallback((operation, productName) => {
    setShoppingCartList(prevList => {
      const index = prevList.findIndex(p => p.name === productName);
      if (index === -1) return prevList;
      const updatedList = [...prevList];
      if (operation === "+") {
        updatedList[index].amount++;
      } else if (updatedList[index].amount > 1) {
        updatedList[index].amount--;
      } else {
        updatedList.splice(index, 1);
      }
      setToPay(recallTotal(updatedList));
      return updatedList;
    });
  }, []);

  const removeProduct = useCallback((productName) => {
    setShoppingCartList(prevList => {
      const updatedList = prevList.filter(p => p.name !== productName);
      setToPay(recallTotal(updatedList));
      return updatedList;
    });
  }, []);

  return { shoppingCartList, toPay, addProduct, clearCart, editAmount, removeProduct };
}
