import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import CartProduct from './CartProduct'

export default function ShoppingCart({ shoppingCartList, toPay, clearCart, editAmount, removeProduct, onPayClick }) {
  return (
    <div className="row-span-11 col-span-5 sm:col-span-4 lg:col-span-2 overflow-scroll">
      {/* Total + Clear */}
      <div className="flex h-20 justify-center space-x-1">
        <div className="w-40 h-10 flex justify-center items-center text-2xl bg-tailwind-cream rounded-lg">
          ${toPay.toFixed(2)}
        </div>
        <div
          onClick={clearCart}
          className="size-10 bg-tailwind-cream rounded-full flex justify-center items-center cursor-pointer"
        >
          <FontAwesomeIcon className="text-xl" icon={faTrashCan} />
        </div>
      </div>

      {/* Cart items */}
      <div className="flex flex-col space-y-1">
        {shoppingCartList.length > 0 ? (
          shoppingCartList.map((product, index) => (
            <CartProduct
              key={index}
              name={product.name}
              price={product.price}
              amount={product.amount}
              editAmount={editAmount}
              onClearOneProduct={removeProduct}
            />
          ))
        ) : (
          <div className="text-gray-500 text-center mt-5">הסל ריק</div>
        )}
      </div>

      {/* Pay button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={onPayClick}
          disabled={toPay <= 0}
          className="bg-tailwind-green rounded-full w-[60%] h-10 flex items-center justify-center text-white font-bold disabled:opacity-50"
        >
          {parseFloat(toPay).toFixed(2)} לתשלום
        </button>
      </div>
    </div>
  )
}
