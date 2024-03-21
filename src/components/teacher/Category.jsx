

function Category({name, selected, selectBtn}) {
  return (
    <button onClick={selectBtn} className={`border-tailwind-green rounded-full text-center m-auto hover:bg-tailwind-green-bright w-full mx-2 ${selected && "bg-tailwind-green"}`}>{name}</button>
  )
}

export default Category