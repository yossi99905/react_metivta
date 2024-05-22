

function Category({name,score, selected, selectBtn}) {
  return (
    <button  onClick={selectBtn} className={`border-tailwind-green rounded-full text-center m-auto hover:bg-tailwind-green-bright w-full mx-2 ${selected && "bg-tailwind-green"}`}>{name} - {score}</button>
  )
}

export default Category