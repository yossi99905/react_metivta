import ProductCard from './ProductCard'
import GeneralItem from './GeneralItem'

export default function ProductList({ products, addProduct }) {
  return (
    <div className="border-l-8 border-tailwind-green col-span-4 sm:col-span-5 lg:col-span-7 row-span-11 pt-16 h-[90lvh] overflow-y-auto">
      {/* General item */}
      <div className="flex flex-wrap justify-start flex-row-reverse *:mx-2 *:my-2">
        <GeneralItem name="פריט כללי" onClickProductCard={addProduct} />
      </div>

      {/* Divider */}
      <div className="w-full flex justify-end mr-2">
        <div className="w-[90%] bg-black h-[1px] my-4"></div>
      </div>

      {/* Products */}
      <div className="flex flex-wrap justify-start flex-row-reverse *:mx-2 *:my-2">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              onClickProductCard={addProduct}
            />
          ))
        ) : (
          <div className="text-gray-500">לא נמצאו מוצרים</div>
        )}
      </div>
    </div>
  )
}
